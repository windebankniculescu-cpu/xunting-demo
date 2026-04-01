import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { Readable } from "node:stream";

const workspaceDir = process.cwd();
const catalogPath = path.join(workspaceDir, "catalog-data.js");
const outputDir = path.join(workspaceDir, "media", "audio");
const manifestPath = path.join(workspaceDir, "audio-manifest.js");

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
    const ext = path.extname(pathname);
    return ext || ".mp3";
  } catch {
    return ".mp3";
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

  const fileStream = fs.createWriteStream(destPath);
  const bodyStream = Readable.fromWeb(response.body);
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
      const selectedLessons = (album.lessons || []).slice(0, 3);
      selectedLessons.forEach((lesson, lessonIndex) => {
        if (!lesson.audioUrl) {
          return;
        }

        const key = `${tabKey}::${levelTitle}::${albumIndex}::${lessonIndex}`;
        const ext = getExtension(lesson.audioUrl);
        const relativePath = path
          .join(
            "media",
            "audio",
            slugify(tabKey),
            slugify(levelTitle),
            `${String(albumIndex + 1).padStart(2, "0")}-${slugify(album.title)}`,
            `${String(lessonIndex + 1).padStart(2, "0")}-${slugify(lesson.title)}${ext}`,
          )
          .split(path.sep)
          .join("/");
        const absolutePath = path.join(workspaceDir, relativePath);

        manifest[key] = `./${relativePath}`;
        tasks.push({ url: lesson.audioUrl, dest: absolutePath, key });
      });
    });
  }
}

console.log(`Preparing ${tasks.length} local audio files...`);

for (const [index, task] of tasks.entries()) {
  console.log(`[${index + 1}/${tasks.length}] ${task.key}`);
  await downloadFile(task.url, task.dest);
}

fs.writeFileSync(
  manifestPath,
  `window.localAudioManifest = ${JSON.stringify(manifest, null, 2)};\n`,
  "utf8",
);

console.log(`Saved manifest to ${manifestPath}`);
