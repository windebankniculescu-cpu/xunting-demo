import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { Readable } from "node:stream";

const workspaceDir = process.cwd();
const catalogPath = path.join(workspaceDir, "catalog-data.js");
const outputDir = path.join(workspaceDir, "media", "covers");
const manifestPath = path.join(workspaceDir, "cover-manifest.js");

const code = fs.readFileSync(catalogPath, "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const catalog = sandbox.window.catalogResourceCollections || {};

function slugify(input) {
  return String(input || "")
    .normalize("NFKD")
    .replace(/[^\w\u4e00-\u9fa5-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || "item";
}

function getExtension(url) {
  try {
    const pathname = new URL(url).pathname;
    return path.extname(pathname) || ".jpg";
  } catch {
    return ".jpg";
  }
}

async function downloadFile(url, destPath) {
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
    return;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`download failed: ${response.status} ${response.statusText}`);
  }

  const bodyStream = Readable.fromWeb(response.body);
  const fileStream = fs.createWriteStream(destPath);
  await new Promise((resolve, reject) => {
    bodyStream.pipe(fileStream);
    bodyStream.on("error", reject);
    fileStream.on("finish", resolve);
    fileStream.on("error", reject);
  });
}

const manifest = {};
const tasks = [];

for (const [tabKey, levels] of Object.entries(catalog)) {
  for (const [levelTitle, albums] of Object.entries(levels)) {
    albums.forEach((album, albumIndex) => {
      if (!album.coverUrl) {
        return;
      }

      const key = `${tabKey}::${levelTitle}::${albumIndex}`;
      const ext = getExtension(album.coverUrl);
      const relativePath = path
        .join(
          "media",
          "covers",
          slugify(tabKey),
          slugify(levelTitle),
          `${String(albumIndex + 1).padStart(2, "0")}-${slugify(album.title)}${ext}`,
        )
        .split(path.sep)
        .join("/");
      const absolutePath = path.join(workspaceDir, relativePath);

      manifest[key] = `./${relativePath}`;
      tasks.push({ url: album.coverUrl, dest: absolutePath, key });
    });
  }
}

console.log(`Preparing ${tasks.length} local covers...`);

for (const [index, task] of tasks.entries()) {
  console.log(`[${index + 1}/${tasks.length}] ${task.key}`);
  await downloadFile(task.url, task.dest);
}

fs.writeFileSync(
  manifestPath,
  `window.localCoverManifest = ${JSON.stringify(manifest, null, 2)};\n`,
  "utf8",
);

console.log(`Saved manifest to ${manifestPath}`);
