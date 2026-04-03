const tracks = [
  {
    title: "Disney Children's Favorites Songs Vol. 1",
    lang: "英语",
    duration: 225,
    progress: 42,
  },
  {
    title: "三字经 晨读启蒙",
    lang: "国学",
    duration: 312,
    progress: 128,
  },
  {
    title: "睡前故事 森林晚安集",
    lang: "故事",
    duration: 286,
    progress: 84,
  },
  {
    title: "宝宝古诗 轻吟版",
    lang: "中文",
    duration: 198,
    progress: 30,
  },
];

const titleEl = document.getElementById("trackTitle");
const titleWindowEl = document.getElementById("trackTitleWindow");
const titleRailEl = document.getElementById("trackTitleRail");
const langEl = document.getElementById("trackLang");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");
const progressTrack = document.getElementById("progressTrack");
const progressFill = document.getElementById("progressFill");
const progressThumb = document.getElementById("progressThumb");
const abMarkerA = document.getElementById("abMarkerA");
const abMarkerB = document.getElementById("abMarkerB");
const deviceStage = document.getElementById("deviceStage");
const deviceFrame = document.getElementById("deviceFrame");
const playBtn = document.getElementById("playBtn");
const playAlbumArt = document.getElementById("playAlbumArt");
const playBackBtn = document.getElementById("playBackBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const speedBtn = document.getElementById("speedBtn");
const speedBtnLabel = document.getElementById("speedBtnLabel");
const abLoopBtn = document.getElementById("abLoopBtn");
const abLoopLabel = document.getElementById("abLoopLabel");
const playlistBtn = document.getElementById("playlistBtn");
const speedPanel = document.getElementById("speedPanel");
const speedPanelCloseBtn = document.getElementById("speedPanelCloseBtn");
const speedOptionList = document.getElementById("speedOptionList");
const playlistPanel = document.getElementById("playlistPanel");
const playlistPanelCloseBtn = document.getElementById("playlistPanelCloseBtn");
const playlistPanelTitle = document.getElementById("playlistPanelTitle");
const playlistList = document.getElementById("playlistList");
const petSceneMetricLabel = document.getElementById("petSceneMetricLabel");
const petSceneMetricValue = document.getElementById("petSceneMetricValue");
const petSceneMetricFill = document.getElementById("petSceneMetricFill");
const petExpFill = document.getElementById("petExpFill");
const petExpText = document.getElementById("petExpText");
const petEgg = document.getElementById("petEgg");
const petEggStage = document.getElementById("petEggStage");
const petAccessoryHead = document.getElementById("petAccessoryHead");
const petAccessoryFace = document.getElementById("petAccessoryFace");
const petAccessoryClothes = document.getElementById("petAccessoryClothes");
const petSpeechBubble = document.getElementById("petSpeechBubble");
const petSpeechText = document.getElementById("petSpeechText");
const petPoopMarker = document.getElementById("petPoopMarker");
const petBroomMarker = document.getElementById("petBroomMarker");
const petCleanupBtn = document.getElementById("petCleanupBtn");
const petSceneCarousel = document.getElementById("petSceneCarousel");
const petSceneTrack = document.getElementById("petSceneTrack");
const petScenePager = document.getElementById("petScenePager");
const petSceneName = document.getElementById("petSceneName");
const petActionName = document.getElementById("petActionName");
const petItemGrid = document.getElementById("petItemGrid");
const petStatusText = document.getElementById("petStatusText");
const petRoom = document.getElementById("petRoom");
const petOrchardLayer = document.getElementById("petOrchardLayer");
const petOrchardPull = document.getElementById("petOrchardPull");
const petOrchardBubbles = document.getElementById("petOrchardBubbles");
const petHarvestModal = document.getElementById("petHarvestModal");
const petHarvestFruitEmoji = document.getElementById("petHarvestFruitEmoji");
const petHarvestText = document.getElementById("petHarvestText");
const petHarvestConfirmBtn = document.getElementById("petHarvestConfirmBtn");
const bottomNav = document.querySelector(".bottom-nav");
const navItems = [...document.querySelectorAll(".nav-item")];
const pages = [...document.querySelectorAll(".app-page")];
const resourcePage = document.querySelector('.resource-page');
const resourceTabs = [...document.querySelectorAll("[data-resource-tab]")];
const resourceSearchTrigger = document.getElementById("resourceSearchTrigger");
const searchPageBackBtn = document.getElementById("searchPageBackBtn");
const searchFieldBtn = document.getElementById("searchFieldBtn");
const resourceSearchInput = document.getElementById("resourceSearchInput");
const searchResultsMeta = document.getElementById("searchResultsMeta");
const searchHistoryList = document.getElementById("searchHistoryList");
const searchHistoryClearBtn = document.getElementById("searchHistoryClearBtn");
const searchResultsGrid = document.getElementById("searchResultsGrid");
const searchKeyboard = document.getElementById("searchKeyboard");
const searchSubmitBtn = document.getElementById("searchSubmitBtn");
const resourceGrid = document.getElementById("resourceGrid");
const detailBackBtn = document.getElementById("detailBackBtn");
const detailAlbumTitle = document.getElementById("detailAlbumTitle");
const detailAlbumDesc = document.getElementById("detailAlbumDesc");
const detailAlbumDescFull = document.getElementById("detailAlbumDescFull");
const detailAlbumTags = document.getElementById("detailAlbumTags");
const detailAlbumCover = document.getElementById("detailAlbumCover");
const detailLessonCount = document.getElementById("detailLessonCount");
const lessonList = document.getElementById("lessonList");
const detailDescExpandBtn = document.getElementById("detailDescExpandBtn");
const detailDescModal = document.getElementById("detailDescModal");
const detailDescCollapseBtn = document.getElementById("detailDescCollapseBtn");
const ageFilterBtn = document.getElementById("ageFilterBtn");
const ageDropdown = document.getElementById("ageDropdown");
const ageOptions = [...document.querySelectorAll("[data-age-range]")];
const ageFilterPicker = ageFilterBtn?.closest(".resource-age-picker");
const discoverFilterBtn = document.getElementById("discoverFilterBtn");
const filterSheet = document.getElementById("filterSheet");
const filterBackBtn = document.getElementById("filterBackBtn");
const filterGroupTabs = document.getElementById("filterGroupTabs");
const filterGroupTitle = document.getElementById("filterGroupTitle");
const filterOptionList = document.getElementById("filterOptionList");
const filterConfirmBtn = document.getElementById("filterConfirmBtn");
const filterResultsPage = document.getElementById("filterResultsPage");
const filterResultsBackBtn = document.getElementById("filterResultsBackBtn");
const filterResultsTags = document.getElementById("filterResultsTags");
const filterResultsGrid = document.getElementById("filterResultsGrid");
const lockKnob = document.getElementById("lockKnob");
const lockLayer = document.getElementById("lockLayer");
const lockHome = document.getElementById("lockHome");
const lockClock = document.getElementById("lockClock");
const lockDate = document.getElementById("lockDate");
const lockTrackTitle = document.getElementById("lockTrackTitle");
const lockSwipeZone = document.getElementById("lockSwipeZone");
const emergencyLockBtn = document.getElementById("emergencyLockBtn");
const settingsLockBtn = document.getElementById("settingsLockBtn");
const emergencyPage = document.getElementById("emergencyPage");
const settingsPage = document.getElementById("settingsPage");
const babyInfoPage = document.getElementById("babyInfoPage");
const babyInfoEntry = document.getElementById("babyInfoEntry");
const serviceBackButtons = [...document.querySelectorAll("[data-service-back]")];
const lockNoticeModal = document.getElementById("lockNoticeModal");
const lockNoticeTitle = document.getElementById("lockNoticeTitle");
const lockNoticeText = document.getElementById("lockNoticeText");
const lockNoticeConfirmBtn = document.getElementById("lockNoticeConfirmBtn");
const unlockGuideModal = document.getElementById("unlockGuideModal");
const unlockGuideConfirmBtn = document.getElementById("unlockGuideConfirmBtn");
const gesturePanel = document.getElementById("gesturePanel");
const gestureStatus = document.getElementById("gestureStatus");
const gestureGridWrap = document.getElementById("gestureGridWrap");
const gestureGrid = document.getElementById("gestureGrid");
const gestureLines = document.getElementById("gestureLines");
const gestureDots = [...document.querySelectorAll(".gesture-dot")];
const lockState = document.getElementById("lockState");
const scrollWheel = document.getElementById("scrollWheel");
const volumeState = document.getElementById("volumeState");
const baseDevicePixelRatio = window.devicePixelRatio || 1;

let currentTrack = 0;
let isPlaying = true;
let isChildLockActive = false;
let volume = 68;
let currentQueue = tracks;
let currentResourceTab = "english";
let currentAgeRange = "3-6岁";
let currentEnglishLevel = "L1入门";
let currentFilterGroup = "duration";
let currentAlbumId = null;
let previousPageBeforeDetail = "resource";
let previousPageBeforePlay = null;
let previousPageBeforeSearch = "resource";
let searchDraftKeyword = "";
let searchCommittedKeyword = "";
let searchHistory = [];
let swipeStartY = null;
let isDrawingGesture = false;
let gesturePath = [];
let longPressTimer = null;
let longPressTriggered = false;
let pendingAutoplay = false;
let currentPlaybackRate = 1;
let abLoopStart = null;
let abLoopEnd = null;
let lastAnalyticsUpdateAt = null;
let currentPetTab = "head";

const searchSuggestionAliases = {
  "大猫": { query: "Big Cat", tags: ["分级阅读", "英语", "学习"] },
  "big cat": { query: "Big Cat", tags: ["分级阅读", "英语", "学习"] },
  "佩奇": { query: "小猪佩奇", tags: ["动画原声", "英语", "路上"] },
  "peiqi": { query: "小猪佩奇", tags: ["动画原声", "英语", "路上"] },
  "儿歌": { query: "儿歌", tags: ["其他儿歌", "英语", "叫早"] },
  "故事": { query: "故事", tags: ["故事", "通识", "哄睡"] },
  "古文": { query: "婷婷唱古文", tags: ["国学经典", "通识", "学习"] },
};

const unlockPattern = ["1", "2", "3", "6"];
const playbackRateOptions = [1, 1.25, 1.5, 1.75, 2, 3];
const petStorageKey = "pet-analytics-state-v1";
const petPoopFeatureEnabled = false;
const petFeedCatalog = [
  { key: "apple", name: "苹果", emoji: "🍎", count: 10, decorStyle: "top-hat" },
  { key: "banana", name: "香蕉", emoji: "🍌", count: 10, decorStyle: "orange" },
  { key: "orange", name: "橙子", emoji: "🍊", count: 10, decorStyle: "sprout" },
  { key: "grape", name: "葡萄", emoji: "🍇", count: 10, decorStyle: "leaf" },
];
const orchardBubbleCatalog = [
  { key: "apple", emoji: "🍎" },
  { key: "banana", emoji: "🍌" },
  { key: "orange", emoji: "🍊" },
  { key: "grape", emoji: "🍇" },
];
const petFaceCatalog = [
  { key: "pet", name: "抚摸", emoji: "🖐" },
  { key: "play", name: "玩耍", emoji: "🎾" },
  { key: "hug", name: "抱抱", emoji: "🤍" },
  { key: "chat", name: "聊天", emoji: "💬" },
];
const petInteractionFeedback = {
  pet: "好温暖～",
  play: "好快乐！",
  hug: "抱抱真好～",
  chat: "想继续陪你～",
};
const petWashCatalog = [
  { key: "bath", name: "洗澡", emoji: "🛁", feedback: "好舒服～" },
  { key: "brush", name: "刷牙", emoji: "🪥", feedback: "亮晶晶～" },
  { key: "wash", name: "梳洗", emoji: "🫧", feedback: "清清爽爽～" },
  { key: "spa", name: "香香", emoji: "🧴", feedback: "香喷喷～" },
];
const petSleepCatalog = [
  { key: "nap", name: "小憩", emoji: "🌙", feedback: "呼～" },
  { key: "sleep", name: "安睡", emoji: "💤", feedback: "ZZZ" },
  { key: "blanket", name: "盖被", emoji: "🛏️", feedback: "暖呼呼～" },
  { key: "story", name: "听故事", emoji: "📖", feedback: "好安心～" },
];
const petSceneConfig = [
  { key: "restaurant", name: "餐厅场景", actionName: "喂食", metricKey: "satietyPoints", metricLabel: "饱食度", operation: "feed" },
  { key: "living", name: "客厅场景", actionName: "互动", metricKey: "affinityPoints", metricLabel: "好感度", operation: "interaction" },
  { key: "bathroom", name: "卫生间场景", actionName: "洗漱", metricKey: "cleanlinessPoints", metricLabel: "清洁值", operation: "wash" },
  { key: "bedroom", name: "卧室场景", actionName: "休息", metricKey: "sleepPoints", metricLabel: "睡眠值", operation: "rest" },
];

function loadPetState() {
  const fallback = {
    englishSeconds: 0,
    generalSeconds: 0,
    interactionCount: 0,
    feedBonus: 0,
    satietyPoints: 0,
    affinityPoints: 0,
    cleanlinessPoints: 60,
    sleepPoints: 60,
    generalRewardProgress: 0,
    orchardRewardProgress: 0,
    lastStatDecayAt: Date.now(),
    fruitInventory: Object.fromEntries(petFeedCatalog.map((item) => [item.key, item.count])),
    orchardAvailable: Object.fromEntries(petFeedCatalog.map((item) => [item.key, 0])),
    orchardHarvestedAt: {},
    poop: {
      active: false,
      selected: false,
      createdAt: 0,
      overdueApplied: false,
      left: 50,
      top: 334,
    },
    selectedHead: "",
    selectedFace: "",
    selectedClothes: "",
  };

  try {
    const saved = JSON.parse(window.localStorage.getItem(petStorageKey) || "null");
    if (!saved || typeof saved !== "object") {
      return fallback;
    }

    return {
      englishSeconds: Number(saved.englishSeconds) || 0,
      generalSeconds: Number(saved.generalSeconds) || 0,
      interactionCount: Number(saved.interactionCount) || 0,
      feedBonus: Number(saved.feedBonus) || 0,
      satietyPoints: Math.max(
        0,
        Math.min(
          100,
          Number.isFinite(Number(saved.satietyPoints))
            ? Number(saved.satietyPoints)
            : Math.floor((Number(saved.generalSeconds) || 0) / 600) + (Number(saved.feedBonus) || 0),
        ),
      ),
      affinityPoints: Math.max(
        0,
        Math.min(
          100,
          Number.isFinite(Number(saved.affinityPoints))
            ? Number(saved.affinityPoints)
            : (Number(saved.interactionCount) || 0) * 5,
        ),
      ),
      cleanlinessPoints: Math.max(0, Math.min(100, Number(saved.cleanlinessPoints) || 60)),
      sleepPoints: Math.max(0, Math.min(100, Number(saved.sleepPoints) || 60)),
      generalRewardProgress: Number(saved.generalRewardProgress) || ((Number(saved.generalSeconds) || 0) % 600),
      orchardRewardProgress: Number(saved.orchardRewardProgress) || 0,
      lastStatDecayAt: Number(saved.lastStatDecayAt) || Date.now(),
      fruitInventory: Object.fromEntries(
        petFeedCatalog.map((item) => [
          item.key,
          Math.max(item.count, Number(saved.fruitInventory?.[item.key]) || 0),
        ]),
      ),
      orchardAvailable: {
        ...fallback.orchardAvailable,
        ...(saved.orchardAvailable || {}),
      },
      orchardHarvestedAt: {
        ...fallback.orchardHarvestedAt,
        ...(saved.orchardHarvestedAt || {}),
      },
      poop: {
        ...fallback.poop,
        ...(saved.poop || {}),
      },
      // Reset old decoration selections so the egg starts clean.
      selectedHead: "",
      selectedFace: "",
      selectedClothes: "",
    };
  } catch {
    return fallback;
  }
}

const petState = loadPetState();
if (!petPoopFeatureEnabled) {
  petState.poop = {
    active: false,
    selected: false,
    createdAt: 0,
    overdueApplied: false,
    left: 50,
    top: 334,
  };
}
savePetState();

function savePetState() {
  try {
    window.localStorage.setItem(petStorageKey, JSON.stringify(petState));
  } catch {
    // ignore localStorage failures
  }
}

function prepareTransparentSprite(fileName, callback) {
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      callback(`./${fileName}`);
      return;
    }
    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data } = imageData;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const brightness = (r + g + b) / 3;
      const chroma = Math.max(r, g, b) - Math.min(r, g, b);
      if (brightness > 205 && chroma < 34) {
        data[i + 3] = 0;
      }
    }
    ctx.putImageData(imageData, 0, 0);
    callback(canvas.toDataURL("image/png"));
  };
  image.onerror = () => callback(`./${fileName}`);
  image.src = `./${fileName}`;
}

function initPetCleanupAssets() {
  prepareTransparentSprite("9fuYKxFRz3.jpg", (url) => {
    petPoopMarker?.style.setProperty("--pet-poop-image", `url("${url}")`);
  });
  prepareTransparentSprite("F1ITziXrIS.jpg", (url) => {
    petBroomMarker?.style.setProperty("--pet-broom-image", `url("${url}")`);
  });
}

function createPoopSpawnPosition() {
  return {
    left: 42 + Math.random() * 18,
    top: 314 + Math.random() * 36,
  };
}

const filterGroups = [
  { key: "duration", label: "时长", options: ["1-3min", "3-10min", "10-20min", "20+min"] },
  { key: "category", label: "类别", options: ["SSS系列", "故事", "情景对话", "动画原声", "其他儿歌", "启蒙绘本", "分级阅读"] },
  { key: "scene", label: "场景", options: ["叫早", "路上", "哄睡", "学习"] },
  { key: "domain", label: "领域", options: ["生活常识", "自然百科", "行为习惯", "社会情感", "历史人文", "认知培养", "古生物", "幼儿启蒙", "童话传说", "少儿文学", "国学经典", "文学素养", "天文地理"] },
  { key: "style", label: "风格", options: ["幽默搞笑", "情节舒缓", "节奏欢快", "奇幻冒险", "励志成长"] },
];

const createEmptyFilters = () => ({
  duration: new Set(),
  category: new Set(),
  scene: new Set(),
  domain: new Set(),
  style: new Set(),
});

let selectedFilters = createEmptyFilters();
let appliedFilters = createEmptyFilters();
let petOrchardOffset = 0;
let isDraggingPetOrchard = false;
let petOrchardStartY = 0;
let petOrchardStartOffset = 0;
let petOrchardDragMoved = false;
let orchardRefreshTimer = null;
let petSpeechTimer = null;
let petFeedReactionTimer = null;
let petPoopSweepTimer = null;
let currentPetSceneIndex = 0;
let petSceneSwipeStartX = 0;
let isDraggingPetScene = false;

const ageOptionsByTab = {
  general: ["0-3岁", "3-6岁", "6-9岁", "9-12岁", "12岁以上"],
  english: ["L1入门", "L2初级", "L3中级", "L4高级"],
};

const catalogResourceCollections = window.catalogResourceCollections || { english: {}, general: {} };
const localCoverManifest = window.localCoverManifest || {};
const localAudioManifest = window.localAudioManifest || {};
const appAudio = new Audio();
appAudio.preload = "metadata";
appAudio.volume = volume / 100;

let currentAudioSource = "";

function cleanLessonTitle(title) {
  return String(title || "")
    .replace(/^\d+[.、\s_-]*/, "")
    .replace(/请加微信.*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeLesson(lesson, lang, index, fallbackCoverUrl, localAudioKey) {
  return {
    title: cleanLessonTitle(lesson.title || `第${index + 1}节`),
    lang,
    duration: Number(lesson.duration) > 0 ? Number(lesson.duration) : 180 + index * 24,
    progress: 0,
    coverUrl: lesson.coverUrl || fallbackCoverUrl || "",
    localAudioUrl: localAudioManifest[localAudioKey] || "",
    audioUrl: lesson.audioUrl || "",
  };
}

function normalizeCollectionItems(items = [], tabKey, groupKey) {
  const lang = tabKey === "english" ? "英语" : "通识";
  return items.map((item, index) => {
    const localCoverUrl = localCoverManifest[`${tabKey}::${groupKey}::${index}`] || "";
    const lessons = (item.lessons || [])
      .slice(0, 3)
      .map((lesson, lessonIndex) =>
        normalizeLesson(
          lesson,
          lang,
          lessonIndex,
          localCoverUrl || item.coverUrl,
          `${tabKey}::${groupKey}::${index}::${lessonIndex}`,
        ));

    return {
      ...item,
      type: "cover",
      id: `${tabKey}-${groupKey}-${index}`,
      meta: item.meta || (item.tags || []).slice(0, 3).join(" · "),
      desc: item.desc || `${item.title}，适合熏听机资源浏览与连续播放。`,
      tags: item.tags || [],
      coverUrl: localCoverUrl || item.coverUrl || lessons[0]?.coverUrl || "",
      lessons,
    };
  });
}

const resourceCollections = {
  english: {},
  general: {},
};

function getCatalogLevelKey(tabKey, levelTitle) {
  if (tabKey === "general" && levelTitle === "12岁以上") {
    return "12岁+";
  }

  return levelTitle;
}

ageOptionsByTab.general.forEach((levelTitle) => {
  resourceCollections.general[levelTitle] = normalizeCollectionItems(
    catalogResourceCollections.general?.[getCatalogLevelKey("general", levelTitle)] || [],
    "general",
    levelTitle,
  );
});

ageOptionsByTab.english.forEach((levelTitle) => {
  resourceCollections.english[levelTitle] = normalizeCollectionItems(
    catalogResourceCollections.english?.[getCatalogLevelKey("english", levelTitle)] || [],
    "english",
    levelTitle,
  );
});

const defaultDemoAlbum = resourceCollections.english["L2初级"]?.find(
  (album) => album.title === "Disney Children's Favorites Songs Vol. 1",
) || resourceCollections.english["L1入门"]?.[0];

if (defaultDemoAlbum?.lessons?.length) {
  tracks.splice(
    0,
    tracks.length,
    ...defaultDemoAlbum.lessons.map((lesson) => ({ ...lesson })),
  );
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function formatPlaybackRate(rate) {
  return rate === 1 ? "1.0x" : `${rate}x`;
}

function applyPetStatDecay() {
  const now = Date.now();
  const lastAt = Number(petState.lastStatDecayAt) || now;
  const elapsedMinutes = Math.floor((now - lastAt) / 60000);

  if (elapsedMinutes <= 0) {
    return false;
  }

  const satietyDecaySteps = Math.floor(elapsedMinutes / 30);
  petState.satietyPoints = Math.max(0, (petState.satietyPoints || 0) - satietyDecaySteps * 5);
  petState.affinityPoints = Math.max(0, (petState.affinityPoints || 0) - elapsedMinutes);
  petState.cleanlinessPoints = Math.max(0, (petState.cleanlinessPoints || 0) - elapsedMinutes);
  petState.sleepPoints = Math.max(0, (petState.sleepPoints || 0) - elapsedMinutes);
  if (petPoopFeatureEnabled && petState.poop?.active && !petState.poop.overdueApplied) {
    const poopAge = now - (Number(petState.poop.createdAt) || now);
    if (poopAge >= 3600000) {
      petState.cleanlinessPoints = Math.max(0, (petState.cleanlinessPoints || 0) - 45);
      petState.poop.overdueApplied = true;
    }
  }
  petState.lastStatDecayAt = lastAt + elapsedMinutes * 60000;
  savePetState();
  return true;
}

function getPetDerivedStats() {
  applyPetStatDecay();
  const exp = Math.floor(petState.englishSeconds / 600);
  const satiety = Math.max(0, Math.min(100, Number(petState.satietyPoints) || 0));
  const affinity = Math.max(0, Math.min(100, Number(petState.affinityPoints) || 0));
  const cleanliness = Math.max(0, Math.min(100, Number(petState.cleanlinessPoints) || 0));
  const sleep = Math.max(0, Math.min(100, Number(petState.sleepPoints) || 0));
  const level = Math.floor(exp / 10) + 1;
  const expProgress = (exp % 10) / 10 * 100;

  let status = "健康";
  if (satiety < 8) {
    status = "生病";
  } else if (satiety < 20) {
    status = "有点饿";
  } else if (affinity < 20) {
    status = "不开心";
  } else if (cleanliness < 20) {
    status = "脏兮兮";
  } else if (sleep < 20) {
    status = "困困的";
  }
  if (petState.poop?.active && petState.poop.overdueApplied) {
    status = "生病";
  }

  return {
    exp,
    satiety,
    affinity,
    cleanliness,
    sleep,
    level,
    expProgress,
    status,
  };
}

function getPetOrchardMaxOffset() {
  const handleHeight = 38;
  const bottomGap = 6;
  return Math.max(0, petRoom.clientHeight - handleHeight - bottomGap);
}

function setPetOrchardOffset(nextOffset) {
  petOrchardOffset = Math.max(0, Math.min(nextOffset, getPetOrchardMaxOffset()));
  petRoom.style.setProperty("--pet-orchard-offset", `${petOrchardOffset}px`);
  petOrchardPull.setAttribute("aria-expanded", petOrchardOffset >= getPetOrchardMaxOffset() - 2 ? "true" : "false");
}

function isFruitBubbleReady(fruitKey) {
  return Number(petState.orchardAvailable?.[fruitKey] || 0) > 0;
}

function renderPetOrchard() {
  [...petOrchardBubbles.querySelectorAll("[data-fruit-bubble]")].forEach((button) => {
    button.hidden = !isFruitBubbleReady(button.dataset.fruitBubble);
  });
}

function showPetHarvestModal(fruitKey) {
  const fruit = petFeedCatalog.find((item) => item.key === fruitKey);
  if (!fruit) {
    return;
  }

  petHarvestFruitEmoji.textContent = fruit.emoji;
  petHarvestText.textContent = `${fruit.name}已存放至物品栏`;
  petHarvestModal.hidden = false;
}

function hidePetHarvestModal() {
  petHarvestModal.hidden = true;
}

function showPetSpeech(text) {
  if (!text) {
    return;
  }

  if (petSpeechTimer) {
    window.clearTimeout(petSpeechTimer);
  }

  petSpeechText.textContent = text;
  updatePetSpeechPosition();
  petSpeechBubble.hidden = false;
  petSpeechTimer = window.setTimeout(() => {
    petSpeechBubble.hidden = true;
  }, 3000);
}

function updatePetSpeechPosition() {
  if (!petSpeechBubble || !petEggStage || !petSceneCarousel) {
    return;
  }

  const sceneRect = petSceneCarousel.getBoundingClientRect();
  const eggRect = petEggStage.getBoundingClientRect();
  const centerX = eggRect.left - sceneRect.left + eggRect.width / 2;
  const centerY = eggRect.top - sceneRect.top + eggRect.height / 2;
  const oneCm = 38;

  petSpeechBubble.style.setProperty("--pet-speech-left", `${centerX}px`);
  petSpeechBubble.style.setProperty("--pet-speech-top", `${centerY - oneCm}px`);
}

function triggerPetFeedReaction() {
  petFeedReactionTimer = null;
  petEgg.classList.remove("is-feed-react");
  void petEgg.offsetWidth;
  petEgg.classList.add("is-feed-react");
  showPetSpeech("好吃！");
}

function harvestOrchardFruit(fruitKey) {
  const fruit = petFeedCatalog.find((item) => item.key === fruitKey);
  if (!fruit || !isFruitBubbleReady(fruitKey)) {
    return;
  }

  petState.orchardAvailable[fruitKey] = Math.max(0, (petState.orchardAvailable?.[fruitKey] || 0) - 1);
  petState.fruitInventory[fruitKey] = (petState.fruitInventory[fruitKey] ?? 0) + 1;
  petState.orchardHarvestedAt[fruitKey] = Date.now();
  savePetState();
  renderPetPage();
  renderPetOrchard();
  showPetHarvestModal(fruitKey);
}

function applyPetAccessories() {
  petAccessoryHead.dataset.style = "";
  petAccessoryFace.dataset.style = "";
  petAccessoryClothes.dataset.style = "";
  petEgg.dataset.mood = "";
}

function getCurrentPetScene() {
  return petSceneConfig[currentPetSceneIndex] || petSceneConfig[0];
}

function renderPetItemGrid() {
  const currentScene = getCurrentPetScene();
  let cards = [];

  if (currentScene.operation === "feed") {
    cards = petFeedCatalog.map((item) => `
      <button class="pet-item-card" data-pet-feed="${item.key}">
        <span class="pet-item-emoji">${item.emoji}</span>
        <span class="pet-item-name">${item.name}</span>
        <span class="pet-item-count">${petState.fruitInventory[item.key] ?? 0}</span>
      </button>
    `);
  } else if (currentScene.operation === "interaction") {
    cards = petFaceCatalog.map((item) => `
      <button class="pet-item-card" data-pet-interaction="${item.key}">
        <span class="pet-item-emoji">${item.emoji}</span>
        <span class="pet-item-name">${item.name}</span>
      </button>
    `);
  } else if (currentScene.operation === "wash") {
    cards = petWashCatalog.map((item) => `
      <button class="pet-item-card" data-pet-wash="${item.key}">
        <span class="pet-item-emoji">${item.emoji}</span>
        <span class="pet-item-name">${item.name}</span>
      </button>
    `);
  } else if (currentScene.operation === "rest") {
    cards = petSleepCatalog.map((item) => `
      <button class="pet-item-card" data-pet-rest="${item.key}">
        <span class="pet-item-emoji">${item.emoji}</span>
        <span class="pet-item-name">${item.name}</span>
      </button>
    `);
  }

  petItemGrid.innerHTML = cards.join("");
}

function renderPetSceneCarousel() {
  const currentScene = getCurrentPetScene();
  petRoom.dataset.scene = currentScene.key;
  petSceneTrack.style.transform = `translateX(-${currentPetSceneIndex * 25}%)`;
  [...petSceneTrack.querySelectorAll(".pet-scene-slide")].forEach((slide, index) => {
    slide.classList.toggle("is-active", index === currentPetSceneIndex);
  });
  [...petScenePager.querySelectorAll("[data-pet-scene-target]")].forEach((button, index) => {
    button.classList.toggle("is-active", index === currentPetSceneIndex);
  });
  const activeScene = petSceneTrack.querySelector(`.pet-scene-slide[data-pet-scene="${currentScene.key}"] .pet-scene`);
  if (activeScene && petEggStage && petEggStage.parentElement !== activeScene) {
    activeScene.appendChild(petEggStage);
  }
  const showOrchard = currentScene.key === "restaurant";
  petOrchardLayer.hidden = !showOrchard;
  petOrchardPull.hidden = !showOrchard;
  if (!showOrchard) {
    setPetOrchardOffset(0);
  }
  updatePetSpeechPosition();
}

function renderPetPage() {
  const stats = getPetDerivedStats();
  const currentScene = getCurrentPetScene();
  const currentMetric = Math.max(0, Math.min(100, Number(stats[currentScene.metricKey.replace("Points", "")] ?? petState[currentScene.metricKey]) || Number(petState[currentScene.metricKey]) || 0));
  petSceneMetricLabel.textContent = currentScene.metricLabel;
  petSceneMetricValue.textContent = `${currentMetric}`;
  petSceneMetricFill.style.width = `${currentMetric}%`;
  petExpFill.style.width = `${stats.expProgress}%`;
  petExpText.textContent = `LV ${stats.level} · EXP ${stats.exp}`;
  petStatusText.textContent = `状态：${stats.status}`;
  petSceneName.textContent = currentScene.name;
  petActionName.textContent = currentScene.actionName;
  renderPetSceneCarousel();
  renderPetItemGrid();
  applyPetAccessories();
  updatePetSpeechPosition();
  petPoopMarker.hidden = true;
  petPoopMarker.classList.remove("is-sweeping");
  petBroomMarker.hidden = true;
  petBroomMarker.classList.remove("is-sweeping");
  petCleanupBtn.hidden = true;
}

function addPetPlaybackProgress(deltaSeconds) {
  if (!Number.isFinite(deltaSeconds) || deltaSeconds <= 0) {
    return;
  }

  const track = currentQueue[currentTrack];
  if (!track) {
    return;
  }

  if (track.lang === "英语") {
    petState.englishSeconds += deltaSeconds;
  } else {
    petState.generalSeconds += deltaSeconds;
    petState.generalRewardProgress = (petState.generalRewardProgress || 0) + deltaSeconds;
    while (petState.generalRewardProgress >= 600) {
      petState.satietyPoints = Math.min(100, (petState.satietyPoints || 0) + 1);
      petState.generalRewardProgress -= 600;
    }
  }

  petState.orchardRewardProgress = (petState.orchardRewardProgress || 0) + deltaSeconds;
  while (petState.orchardRewardProgress >= 600) {
    const totalFruitKinds = petFeedCatalog.length;
    const rewardIndex = Math.floor(((petState.englishSeconds || 0) + (petState.generalSeconds || 0)) / 600) % totalFruitKinds;
    const rewardFruit = petFeedCatalog[rewardIndex]?.key || petFeedCatalog[0].key;
    petState.orchardAvailable[rewardFruit] = (petState.orchardAvailable?.[rewardFruit] || 0) + 1;
    petState.orchardRewardProgress -= 600;
  }

  savePetState();
  renderPetPage();
  renderPetOrchard();
}

function usePetFeed(feedKey) {
  const feedItem = petFeedCatalog.find((item) => item.key === feedKey);
  if (!feedItem || (petState.fruitInventory[feedKey] ?? 0) <= 0) {
    return;
  }

  petState.fruitInventory[feedKey] -= 1;
  petState.feedBonus = Math.min(100, petState.feedBonus + 5);
  petState.satietyPoints = Math.min(100, (petState.satietyPoints || 0) + 5);
  petState.selectedHead = "";
  if (petPoopFeatureEnabled && !petState.poop?.active && Math.random() < 0.9) {
    const poopPosition = createPoopSpawnPosition();
    petState.poop = {
      active: true,
      selected: false,
      createdAt: Date.now(),
      overdueApplied: false,
      left: poopPosition.left,
      top: poopPosition.top,
    };
  }
  savePetState();
  renderPetPage();
  if (petFeedReactionTimer) {
    window.clearTimeout(petFeedReactionTimer);
  }
  petFeedReactionTimer = window.setTimeout(triggerPetFeedReaction, 420);
}

function togglePetPoopSelection() {
  if (!petState.poop?.active) {
    return;
  }

  if (petState.poop.selected) {
    return;
  }

  petState.poop.selected = true;
  savePetState();
  renderPetPage();

  if (petPoopSweepTimer) {
    window.clearTimeout(petPoopSweepTimer);
  }
  petPoopSweepTimer = window.setTimeout(() => {
    cleanupPetPoop();
  }, 1080);
}

function cleanupPetPoop() {
  if (!petState.poop?.active) {
    return;
  }

  if (petPoopSweepTimer) {
    window.clearTimeout(petPoopSweepTimer);
    petPoopSweepTimer = null;
  }

  petState.poop = {
    active: false,
    selected: false,
    createdAt: 0,
    overdueApplied: false,
    left: 50,
    top: 334,
  };
  petState.cleanlinessPoints = Math.min(100, (petState.cleanlinessPoints || 0) + 10);
  savePetState();
  renderPetPage();
  showPetSpeech("清理干净啦～");
}

function usePetFaceInteraction(faceKey) {
  const item = petFaceCatalog.find((option) => option.key === faceKey);
  if (!item) {
    return;
  }

  petState.interactionCount += 1;
  petState.affinityPoints = Math.min(100, (petState.affinityPoints || 0) + 5);
  petState.selectedFace = "";
  savePetState();
  renderPetPage();
  showPetSpeech(petInteractionFeedback[faceKey] || "好开心～");
}

function usePetWashAction(washKey) {
  const item = petWashCatalog.find((option) => option.key === washKey);
  if (!item) {
    return;
  }

  petState.cleanlinessPoints = Math.min(100, (petState.cleanlinessPoints || 0) + 5);
  savePetState();
  renderPetPage();
  showPetSpeech(item.feedback);
}

function usePetRestAction(restKey) {
  const item = petSleepCatalog.find((option) => option.key === restKey);
  if (!item) {
    return;
  }

  petState.sleepPoints = Math.min(100, (petState.sleepPoints || 0) + 5);
  savePetState();
  renderPetPage();
  showPetSpeech(item.feedback);
}

function updateAbMarkers(track) {
  const duration = Math.max(1, track?.duration || 1);
  const hasA = Number.isFinite(abLoopStart);
  const hasB = Number.isFinite(abLoopEnd);

  abMarkerA.hidden = !hasA;
  abMarkerB.hidden = !hasB;

  if (hasA) {
    abMarkerA.style.left = `${Math.max(0, Math.min((abLoopStart / duration) * 100, 100))}%`;
  }

  if (hasB) {
    abMarkerB.style.left = `${Math.max(0, Math.min((abLoopEnd / duration) * 100, 100))}%`;
  }

  if (hasA && hasB) {
    abLoopBtn.classList.add("is-active");
    abLoopLabel.textContent = "AB中";
  } else if (hasA) {
    abLoopBtn.classList.add("is-active");
    abLoopLabel.textContent = "设B点";
  } else {
    abLoopBtn.classList.remove("is-active");
    abLoopLabel.textContent = "AB";
  }
}

function resetAbLoop() {
  abLoopStart = null;
  abLoopEnd = null;
  if (abMarkerA) {
    abMarkerA.hidden = true;
  }
  if (abMarkerB) {
    abMarkerB.hidden = true;
  }
  if (abLoopBtn) {
    abLoopBtn.classList.remove("is-active");
  }
  if (abLoopLabel) {
    abLoopLabel.textContent = "AB";
  }
}

function renderSpeedPanel() {
  speedBtnLabel.textContent = formatPlaybackRate(currentPlaybackRate);
  [...speedOptionList.querySelectorAll("[data-speed]")].forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.speed) === currentPlaybackRate);
  });
}

function renderPlaylistPanel() {
  const album = currentAlbumId ? findAlbumById(currentAlbumId) : null;
  playlistPanelTitle.textContent = album?.title || "专辑播放列表";
  playlistList.innerHTML = currentQueue
    .map(
      (lesson, index) => `
        <button class="playlist-item ${index === currentTrack ? "is-current" : ""}" data-playlist-index="${index}">
          <div class="playlist-item-main">
            <strong>${lesson.title}</strong>
            <span>${lesson.lang} · ${formatTime(lesson.duration)}</span>
          </div>
          <span class="playlist-item-status">${index === currentTrack ? "播放中" : "播放"}</span>
        </button>
      `,
    )
    .join("");
}

function renderTrack() {
  const track = currentQueue[currentTrack];
  const progressRatio = Math.max(0, Math.min(track.progress / track.duration, 1));

  titleEl.textContent = track.title;
  langEl.textContent = track.lang;
  currentTimeEl.textContent = formatTime(track.progress);
  totalTimeEl.textContent = formatTime(track.duration);
  progressFill.style.width = `${progressRatio * 100}%`;
  progressThumb.style.left = `${progressRatio * 100}%`;
  playBtn.dataset.state = isPlaying ? "playing" : "paused";
  playBtn.setAttribute("aria-label", isPlaying ? "暂停播放" : "开始播放");
  renderSpeedPanel();
  updateAbMarkers(track);
  renderPlaylistPanel();

  const coverUrl = track.albumCoverUrl || track.coverUrl || "";
  playAlbumArt.innerHTML = coverUrl
    ? `<div class="album-art-image" style="background-image: url('${coverUrl}')"></div>`
    : '<span class="album-accent"></span>';

  const resourceNav = navItems.find((item) => item.dataset.nav === "resource");
  if (resourceNav?.classList.contains("is-active")) {
    showToast(`已切换到: ${track.title}`);
  }

  updateLockScreenInfo();
  requestAnimationFrame(updateTitleMarquee);
}

function updateLockScreenInfo() {
  const today = new Date();
  const weekLabels = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  lockClock.textContent = `${hours}:${minutes}`;
  lockDate.textContent = `${month}/${day} ${weekLabels[today.getDay()]}`;
  lockTrackTitle.textContent = currentQueue[currentTrack]?.title || tracks[currentTrack]?.title || "";
}

function getTrackAudioUrl(track) {
  return track?.localAudioUrl || track?.audioUrl || "";
}

function syncAudioTrack({ autoplay = isPlaying } = {}) {
  const track = currentQueue[currentTrack];
  if (!track) {
    return;
  }

  const source = getTrackAudioUrl(track);
  if (!source) {
    currentAudioSource = "";
    appAudio.pause();
    appAudio.removeAttribute("src");
    appAudio.load();
    isPlaying = false;
    renderTrack();
    return;
  }

  if (currentAudioSource !== source) {
    currentAudioSource = source;
    appAudio.src = source;
    appAudio.load();
  }

  appAudio.playbackRate = currentPlaybackRate;

  if (track.progress > 0 && Math.abs(appAudio.currentTime - track.progress) > 1) {
    try {
      appAudio.currentTime = track.progress;
    } catch {
      // ignore seeking errors before metadata is ready
    }
  }

  if (autoplay) {
    isPlaying = true;
    pendingAutoplay = true;
    renderTrack();
    const playPromise = appAudio.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {
        pendingAutoplay = false;
        isPlaying = false;
        renderTrack();
      });
    }
  } else {
    pendingAutoplay = false;
    appAudio.pause();
  }
}

function closePlayOverlays() {
  speedPanel.hidden = true;
  playlistPanel.hidden = true;
}

function setPlaybackRate(rate) {
  currentPlaybackRate = rate;
  appAudio.playbackRate = rate;
  renderSpeedPanel();
}

function toggleSpeedPanel() {
  const opening = speedPanel.hidden;
  closePlayOverlays();
  speedPanel.hidden = !opening;
}

function togglePlaylistPanel() {
  const opening = playlistPanel.hidden;
  closePlayOverlays();
  if (opening) {
    renderPlaylistPanel();
  }
  playlistPanel.hidden = !opening;
}

function toggleAbLoop() {
  const track = currentQueue[currentTrack];
  if (!track) {
    return;
  }

  const currentPoint = Math.max(0, Math.min(Math.round(appAudio.currentTime || track.progress || 0), track.duration));

  if (!Number.isFinite(abLoopStart)) {
    abLoopStart = currentPoint;
    abLoopEnd = null;
  } else if (!Number.isFinite(abLoopEnd) && currentPoint > abLoopStart) {
    abLoopEnd = currentPoint;
  } else {
    abLoopStart = currentPoint;
    abLoopEnd = null;
  }

  renderTrack();
}

function updateTitleMarquee() {
  titleEl.classList.remove("is-scrolling");
  titleEl.style.removeProperty("--marquee-distance");
  titleEl.style.removeProperty("--marquee-duration");
  titleRailEl.style.justifyContent = "center";

  const overflow = Math.ceil(titleEl.scrollWidth - titleRailEl.clientWidth);
  if (overflow <= 0) {
    return;
  }

  titleRailEl.style.justifyContent = "flex-start";
  const duration = Math.max(6, overflow / 32);
  titleEl.style.setProperty("--marquee-distance", `${overflow}px`);
  titleEl.style.setProperty("--marquee-duration", `${duration}s`);
  titleEl.classList.add("is-scrolling");
}

function fitDeviceToViewport() {
  deviceFrame.style.transform = "none";
  deviceStage.style.width = "";
  deviceStage.style.height = "";

  const shellPadding = 64;
  const browserZoomRatio = (window.devicePixelRatio || 1) / baseDevicePixelRatio;
  const availableWidth = Math.max((window.innerWidth - shellPadding) * browserZoomRatio, 320);
  const availableHeight = Math.max((window.innerHeight - shellPadding) * browserZoomRatio, 320);
  const naturalWidth = deviceFrame.offsetWidth;
  const naturalHeight = deviceFrame.offsetHeight;
  const fitScale = Math.min(1, availableWidth / naturalWidth, availableHeight / naturalHeight);
  const scale = fitScale / browserZoomRatio;

  deviceStage.style.width = `${naturalWidth * scale}px`;
  deviceStage.style.height = `${naturalHeight * scale}px`;
  deviceFrame.style.transform = `scale(${scale})`;
}

function buildDistributedLabel(label, className) {
  return `
    <span class="${className}">${label}</span>
  `;
}

function setAgeFilterLabel(label) {
  ageFilterBtn.innerHTML = `
    ${buildDistributedLabel(label, "filter-label")}
    <span class="filter-caret">▼</span>
  `;
}

function renderResourceCard(item) {
  return `
    <article class="resource-tile" data-resource-id="${item.id}">
      <div class="tile-cover ${item.coverUrl ? "has-image" : ""}" ${item.coverUrl ? `style="background-image: url('${item.coverUrl}')"` : ""}>
        ${item.coverUrl ? "" : '<span class="tile-accent"></span>'}
      </div>
      <h3>${item.title}</h3>
      <p>${item.meta}</p>
    </article>
  `;
}

function findAlbumById(resourceId) {
  const collections = [...Object.values(resourceCollections.general), ...Object.values(resourceCollections.english)];
  for (const group of collections) {
    const album = group.find((item) => item.id === resourceId);
    if (album) {
      return album;
    }
  }
  return null;
}

function getCurrentCollection() {
  return currentResourceTab === "general"
    ? resourceCollections.general[currentAgeRange]
    : resourceCollections.english[currentEnglishLevel];
}

function matchesKeyword(item, keyword) {
  const normalizedKeyword = String(keyword || "").trim().toLowerCase();
  if (!normalizedKeyword) {
    return true;
  }

  const searchFields = [
    item.title,
    item.meta,
    item.desc,
    item.searchPinyin,
    ...(item.tags || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return searchFields.includes(normalizedKeyword);
}

function getSearchBaseCollection() {
  const collectionByTab = currentResourceTab === "general"
    ? resourceCollections.general
    : resourceCollections.english;

  return Object.values(collectionByTab).flat();
}

function getFilteredCollection() {
  const baseCollection = getSearchBaseCollection();
  const activeGroups = filterGroups.filter((group) => appliedFilters[group.key].size > 0);

  const tagFilteredCollection = activeGroups.length === 0
    ? baseCollection
    : baseCollection.filter((item) => {
      if (!item.tags) {
        return false;
      }

      return activeGroups.every((group) => {
        const options = [...appliedFilters[group.key]];
        return options.some((label) => item.tags.includes(label));
      });
    });

  return tagFilteredCollection;
}

function cloneFilters(source) {
  return Object.fromEntries(
    Object.entries(source).map(([key, value]) => [key, new Set(value)]),
  );
}

function renderFilterGroups() {
  filterGroupTabs.innerHTML = filterGroups
    .map(
      (group) => `
        <button class="filter-group-tab ${group.key === currentFilterGroup ? "is-active" : ""}" data-filter-group="${group.key}">
          ${group.label}
        </button>
      `,
    )
    .join("");
}

function renderFilterOptions() {
  const group = filterGroups.find((item) => item.key === currentFilterGroup);
  filterGroupTitle.textContent = group.label;
  filterOptionList.innerHTML = group.options
    .map(
      (option) => `
        <button class="filter-option-chip ${selectedFilters[group.key].has(option) ? "is-selected" : ""}" data-filter-option="${option}">
          ${option}
        </button>
      `,
    )
    .join("");
}

function openFilterSheet({ preserve = false } = {}) {
  if (!preserve) {
    selectedFilters = createEmptyFilters();
  }
  currentFilterGroup = currentFilterGroup || "duration";
  ageDropdown.classList.remove("is-open");
  renderFilterGroups();
  renderFilterOptions();
  filterSheet.classList.add("is-open");
  filterResultsPage.classList.remove("is-open");
  resourcePage.classList.add("is-filter-open");
  bottomNav.hidden = true;
}

function closeFilterSheet({ reset = true } = {}) {
  if (reset) {
    selectedFilters = createEmptyFilters();
  }
  filterSheet.classList.remove("is-open");
  filterResultsPage.classList.remove("is-open");
  resourcePage.classList.remove("is-filter-open");
  if (pages.find((page) => page.classList.contains("is-active"))?.dataset.page !== "resource-search") {
    bottomNav.hidden = false;
  }
}

function renderResourceTab(tabName) {
  currentResourceTab = tabName;
  resourceTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.resourceTab === tabName);
  });
  const isEnglishTab = tabName === "english";
  ageFilterBtn.parentElement?.classList.toggle("is-english", isEnglishTab);

  const collection = getCurrentCollection();

  resourceGrid.innerHTML = collection
    .map((item) => renderResourceCard(item))
    .join("");

  if (collection.length === 0) {
    resourceGrid.innerHTML = `<div class="resource-empty">没有符合当前筛选条件的资源</div>`;
  }

  ageFilterBtn.style.visibility = "visible";
  setAgeFilterLabel(tabName === "general" ? currentAgeRange : currentEnglishLevel);
  ageOptions.forEach((option, index) => {
    const label = ageOptionsByTab[tabName][index];
    option.innerHTML = label ? buildDistributedLabel(label, "age-option-label") : "";
    option.dataset.ageRange = label ?? "";
    option.hidden = !label;
    option.classList.toggle(
      "is-active",
      tabName === "general" ? label === currentAgeRange : label === currentEnglishLevel,
    );
  });
  ageDropdown.classList.remove("is-open");
  closeFilterSheet();

  if (resourcePage) {
    resourcePage.scrollTo({ top: 0, behavior: "auto" });
  }
}

function renderAlbumCover(album) {
  if (album.coverUrl) {
    return `<div class="album-detail-cover-image" style="background-image: url('${album.coverUrl}')"></div>`;
  }

  return `<span class="tile-accent"></span>`;
}

function renderAlbumDetail(resourceId) {
  const album = findAlbumById(resourceId);
  if (!album) {
    return;
  }

  currentAlbumId = resourceId;
  detailAlbumTitle.textContent = album.title;
  detailAlbumDesc.textContent = album.desc;
  detailAlbumDescFull.textContent = album.desc;
  detailAlbumCover.innerHTML = renderAlbumCover(album);
  detailAlbumTags.innerHTML = (album.tags || [])
    .slice(0, 5)
    .map((tag) => `<span class="album-detail-tag">${tag}</span>`)
    .join("");
  detailLessonCount.textContent = `${album.lessons.length} 节`;
  detailDescModal.hidden = true;
  lessonList.innerHTML = album.lessons
    .map(
      (lesson, index) => `
        <button class="lesson-item" data-lesson-index="${index}">
          <div class="lesson-item-main">
            <strong>${lesson.title}</strong>
            <span>${lesson.lang} · ${formatTime(lesson.duration)}</span>
          </div>
          <span class="lesson-play-chip">播放</span>
        </button>
      `,
    )
    .join("");
}

function openAlbumDetail(resourceId, sourcePage) {
  previousPageBeforeDetail = sourcePage;
  renderAlbumDetail(resourceId);
  setPage("album-detail");
}

function playAlbumLesson(index) {
  const album = findAlbumById(currentAlbumId);
  if (!album) {
    return;
  }

  currentQueue = album.lessons.map((lesson) => ({ ...lesson, albumCoverUrl: album.coverUrl || lesson.coverUrl || "" }));
  currentTrack = index;
  isPlaying = true;
  resetAbLoop();
  previousPageBeforePlay = "album-detail";
  renderTrack();
  syncAudioTrack({ autoplay: true });
  setPage("play");
}

function renderFilterResults() {
  const activeTags = filterGroups.flatMap((group) =>
    [...appliedFilters[group.key]].map((label) => ({ key: group.key, label })),
  );
  const collection = getFilteredCollection();

  filterResultsTags.innerHTML = activeTags
    .map(
      (tag) => `
        <span class="filter-result-tag">
          ${tag.label}
          <button class="filter-result-tag-remove" data-remove-filter-group="${tag.key}" data-remove-filter-label="${tag.label}" aria-label="删除 ${tag.label}">×</button>
        </span>
      `,
    )
    .join("");

  filterResultsGrid.innerHTML = collection.length > 0
    ? collection.map((item) => renderResourceCard(item)).join("")
    : `<div class="resource-empty">没有符合当前筛选条件的资源</div>`;
}

function openFilterResults() {
  renderFilterResults();
  filterSheet.classList.remove("is-open");
  filterResultsPage.classList.add("is-open");
  resourcePage.classList.add("is-filter-open");
  bottomNav.hidden = true;
}

function getSearchPageCollection() {
  const baseCollection = getSearchBaseCollection();
  return baseCollection.filter((item) => matchesKeyword(item, searchCommittedKeyword));
}

function getSearchSuggestionConfig(keyword) {
  const normalized = keyword.trim().toLowerCase();
  if (!normalized) {
    return null;
  }

  const aliasKey = Object.keys(searchSuggestionAliases).find((key) => normalized.includes(key));
  if (aliasKey) {
    return searchSuggestionAliases[aliasKey];
  }

  const fallbackTitle = getSearchBaseCollection().find((item) =>
    matchesKeyword(item, normalized.slice(0, Math.max(1, normalized.length - 1))),
  )?.title;

  return fallbackTitle
    ? { query: fallbackTitle, tags: currentResourceTab === "english" ? ["英语", "学习", "分级阅读"] : ["通识", "故事", "学习"] }
    : null;
}

function renderSearchEmptyState(keyword) {
  const suggestion = getSearchSuggestionConfig(keyword);
  const baseCollection = getSearchBaseCollection();
  const recommendedResources = suggestion
    ? baseCollection
      .filter((item) =>
        matchesKeyword(item, suggestion.query)
        || suggestion.tags.some((tag) => (item.tags || []).includes(tag)),
      )
      .slice(0, 4)
    : baseCollection.slice(0, 4);

  const suggestLine = suggestion
    ? `
      <div class="search-empty-line">
        <span class="search-empty-label">你是不是想找：</span>
        <button class="search-empty-link" data-suggest-search="${suggestion.query}">${suggestion.query}</button>
      </div>
    `
    : "";

  const tagLine = suggestion
    ? `
      <div class="search-empty-line column">
        <span class="search-empty-label">相关标签推荐：</span>
        <div class="search-empty-tags">
          ${suggestion.tags
            .map((tag) => `<button class="search-empty-tag" data-suggest-search="${tag}">${tag}</button>`)
            .join("")}
        </div>
      </div>
    `
    : "";

  const cards = recommendedResources.length > 0
    ? recommendedResources.map((item) => renderResourceCard(item)).join("")
    : `<div class="resource-empty">当前没有更多推荐资源</div>`;

  return `
    <div class="search-empty-state">
      <div class="search-empty-copy">
        <h3>没有找到“${keyword}”</h3>
        <p>换个关键词试试，或者先看看这些更接近的内容。</p>
        ${suggestLine}
        ${tagLine}
      </div>
      <div class="resource-grid search-empty-grid">
        <div class="search-empty-grid-title">根据你的搜索推荐</div>
        ${cards}
      </div>
    </div>
  `;
}

function loadSearchHistory() {
  try {
    const saved = JSON.parse(window.localStorage.getItem("resource-search-history") || "[]");
    searchHistory = Array.isArray(saved) ? saved.filter(Boolean).slice(0, 8) : [];
  } catch {
    searchHistory = [];
  }
}

function saveSearchHistory() {
  try {
    window.localStorage.setItem("resource-search-history", JSON.stringify(searchHistory.slice(0, 8)));
  } catch {
    // ignore storage failures
  }
}

function renderSearchHistory() {
  const hasHistory = searchHistory.length > 0 && !searchCommittedKeyword;
  searchHistoryList.hidden = !hasHistory;
  searchHistoryClearBtn.hidden = searchHistory.length === 0;

  searchHistoryList.innerHTML = hasHistory
    ? searchHistory
      .map((item) => `<button class="search-history-chip" data-history-keyword="${item}">${item}</button>`)
      .join("")
    : "";
}

function pushSearchHistory(keyword) {
  const normalized = keyword.trim();
  if (!normalized) {
    return;
  }

  searchHistory = [normalized, ...searchHistory.filter((item) => item !== normalized)].slice(0, 8);
  saveSearchHistory();
}

function renderSearchResults() {
  const hasKeyword = Boolean(searchCommittedKeyword.trim());
  const collection = hasKeyword ? getSearchPageCollection() : [];

  searchResultsMeta.textContent = hasKeyword
    ? `共找到 ${collection.length} 个相关资源`
    : "请输入资源关键词后点击搜索";

  searchResultsGrid.innerHTML = hasKeyword
    ? (collection.length > 0
      ? collection.map((item) => renderResourceCard(item)).join("")
      : renderSearchEmptyState(searchCommittedKeyword))
    : "";

  renderSearchHistory();
}

function openSearchPage(sourcePage = "resource") {
  previousPageBeforeSearch = sourcePage;
  searchDraftKeyword = "";
  searchCommittedKeyword = "";
  resourceSearchInput.value = "";
  searchKeyboard.hidden = true;
  loadSearchHistory();
  renderSearchResults();
  setPage("resource-search");
}

function closeSearchPage() {
  searchKeyboard.hidden = true;
  setPage(previousPageBeforeSearch);
}

function showSearchKeyboard() {
  searchKeyboard.hidden = false;
  resourceSearchInput.focus();
}

function commitSearch() {
  searchCommittedKeyword = resourceSearchInput.value.trim();
  searchDraftKeyword = searchCommittedKeyword;
  searchKeyboard.hidden = true;
  pushSearchHistory(searchCommittedKeyword);
  renderSearchResults();
}

function toggleAgeDropdown() {
  ageDropdown.classList.toggle("is-open");
}

function selectAgeRange(ageRange) {
  if (currentResourceTab === "general") {
    currentAgeRange = ageRange;
  } else {
    currentEnglishLevel = ageRange;
  }
  ageDropdown.classList.remove("is-open");
  renderResourceTab(currentResourceTab);
}

function showToast(message) {
  return message;
}

function showLockNotice(title, text) {
  lockNoticeTitle.textContent = title;
  lockNoticeText.textContent = text;
  lockNoticeModal.hidden = false;
}

function hideLockNotice() {
  lockNoticeModal.hidden = true;
}

function resetGesturePanel() {
  isDrawingGesture = false;
  gesturePath = [];
  gestureStatus.textContent = "请绘制解锁手势";
  gestureStatus.classList.remove("is-error", "is-success");
  gestureGridWrap.classList.remove("is-error", "is-success");
  gestureDots.forEach((dot) => dot.classList.remove("is-active"));
  gestureLines.innerHTML = "";
}

function getDotCenter(dot) {
  const gridRect = gestureGridWrap.getBoundingClientRect();
  const rect = dot.getBoundingClientRect();
  const x = ((rect.left + rect.width / 2) - gridRect.left) / gridRect.width * 300;
  const y = ((rect.top + rect.height / 2) - gridRect.top) / gridRect.height * 300;
  return `${x},${y}`;
}

function drawGestureLine() {
  if (gesturePath.length === 0) {
    gestureLines.innerHTML = "";
    return;
  }

  const points = gesturePath
    .map((id) => {
      const dot = gestureDots.find((item) => item.dataset.dot === id);
      return getDotCenter(dot);
    })
    .join(" ");

  gestureLines.innerHTML = `<polyline points="${points}"></polyline>`;
}

function addGestureDot(dotId) {
  if (gesturePath.includes(dotId)) {
    return;
  }

  gesturePath.push(dotId);
  const dot = gestureDots.find((item) => item.dataset.dot === dotId);
  dot.classList.add("is-active");
  drawGestureLine();
}

function finishGesture() {
  if (!isDrawingGesture) {
    return;
  }

  isDrawingGesture = false;
  const success = gesturePath.join("-") === unlockPattern.join("-");

  if (!success) {
    gestureStatus.textContent = "错误！";
    gestureStatus.classList.add("is-error");
    gestureGridWrap.classList.add("is-error");
    setTimeout(resetGesturePanel, 900);
    return;
  }

  gestureStatus.textContent = "解锁成功";
  gestureStatus.classList.add("is-success");
  gestureGridWrap.classList.add("is-success");

  setTimeout(() => {
    gesturePanel.hidden = true;
    exitChildLockMode();
    setPage("play");
    resetGesturePanel();
  }, 550);
}

function showGesturePanel() {
  unlockGuideModal.hidden = true;
  lockHome.hidden = true;
  emergencyPage.hidden = true;
  settingsPage.hidden = true;
  babyInfoPage.hidden = true;
  gesturePanel.hidden = false;
  resetGesturePanel();
}

function showUnlockGuide() {
  gesturePanel.hidden = true;
  unlockGuideModal.hidden = false;
}

function enterChildLockMode() {
  if (isChildLockActive) {
    return;
  }

  isChildLockActive = true;
  updateLockScreenInfo();
  lockLayer.hidden = false;
  lockHome.hidden = false;
  gesturePanel.hidden = true;
  emergencyPage.hidden = true;
  settingsPage.hidden = true;
  babyInfoPage.hidden = true;
  unlockGuideModal.hidden = true;
  hideLockNotice();
  if (lockState) {
    lockState.setAttribute("aria-label", "童锁已开启");
    lockState.setAttribute("title", "童锁已开启");
  }
}

function exitChildLockMode() {
  isChildLockActive = false;
  lockLayer.hidden = true;
  lockHome.hidden = false;
  unlockGuideModal.hidden = true;
  gesturePanel.hidden = true;
  emergencyPage.hidden = true;
  settingsPage.hidden = true;
  babyInfoPage.hidden = true;
  hideLockNotice();
  if (lockState) {
    lockState.setAttribute("aria-label", "童锁已关闭");
    lockState.setAttribute("title", "童锁已关闭");
  }
}

function showServicePage(pageName) {
  lockHome.hidden = true;
  gesturePanel.hidden = true;
  unlockGuideModal.hidden = true;
  hideLockNotice();
  emergencyPage.hidden = pageName !== "emergency";
  settingsPage.hidden = pageName !== "settings";
  babyInfoPage.hidden = pageName !== "baby";
}

function handleServiceBack(target) {
  if (target === "home") {
    emergencyPage.hidden = true;
    settingsPage.hidden = true;
    babyInfoPage.hidden = true;
    lockHome.hidden = false;
    return;
  }

  if (target === "emergency") {
    babyInfoPage.hidden = true;
    emergencyPage.hidden = false;
  }
}

function startLongPress(buttonType) {
  clearTimeout(longPressTimer);
  longPressTriggered = false;
  longPressTimer = setTimeout(() => {
    longPressTriggered = true;
    if (buttonType === "emergency") {
      showServicePage("emergency");
      return;
    }
    showServicePage("settings");
  }, 2000);
}

function cancelLongPress() {
  clearTimeout(longPressTimer);
  longPressTimer = null;
}

function setPage(pageName) {
  navItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.nav === pageName);
  });

  pages.forEach((page) => {
    page.classList.toggle("is-active", page.dataset.page === pageName);
  });

  if (pageName === "album-detail" || pageName === "resource-search") {
    navItems.forEach((item) => {
      item.classList.toggle("is-active", item.dataset.nav === "resource");
    });
  }

  if (pageName === "play") {
    playBackBtn.hidden = !previousPageBeforePlay;
  } else {
    playBackBtn.hidden = true;
    closePlayOverlays();
  }

  const shouldHideNav = pageName === "resource-search"
    || (pageName === "resource" && (filterSheet.classList.contains("is-open") || filterResultsPage.classList.contains("is-open")));
  bottomNav.hidden = shouldHideNav;

  if (pageName === "resource" && resourcePage) {
    resourcePage.scrollTo({ top: 0, behavior: "auto" });
  }

  if (pageName === "pet") {
    renderPetPage();
  }

  if (pageName !== "resource") {
    closeFilterSheet();
  }
}

function togglePlayback() {
  const track = currentQueue[currentTrack];
  if (!track) {
    return;
  }

  if (appAudio.src && !appAudio.paused) {
    appAudio.pause();
    isPlaying = false;
  } else {
    isPlaying = true;
    syncAudioTrack({ autoplay: true });
  }

  renderTrack();
  showToast(isPlaying ? "正在播放" : "已暂停");
}

function stepTrack(direction) {
  currentTrack = (currentTrack + direction + currentQueue.length) % currentQueue.length;
  currentQueue[currentTrack].progress = 0;
  resetAbLoop();
  renderTrack();
  syncAudioTrack({ autoplay: isPlaying });
}

function updateProgress(clientX) {
  const rect = progressTrack.getBoundingClientRect();
  const ratio = Math.max(0, Math.min((clientX - rect.left) / rect.width, 1));
  currentQueue[currentTrack].progress = Math.round(currentQueue[currentTrack].duration * ratio);
  if (currentAudioSource) {
    try {
      appAudio.currentTime = currentQueue[currentTrack].progress;
    } catch {
      // ignore invalid seek
    }
  }
  renderTrack();
  showToast(`播放进度 ${Math.round(ratio * 100)}%`);
}

function adjustVolume(delta) {
  volume = Math.max(0, Math.min(volume + delta, 100));
  appAudio.volume = volume / 100;
  if (volumeState) {
    volumeState.setAttribute("aria-label", `音量 ${volume}%`);
    volumeState.setAttribute("title", `音量 ${volume}%`);
  }
  showToast(`音量调整至 ${volume}%`);
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    previousPageBeforePlay = null;
    if (item.dataset.nav === "play") {
      resetAbLoop();
    }
    setPage(item.dataset.nav);
  });
});

resourceTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderResourceTab(tab.dataset.resourceTab));
});

resourceGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-resource-id]");
  if (!card) {
    return;
  }
  openAlbumDetail(card.dataset.resourceId, "resource");
});

searchResultsGrid.addEventListener("click", (event) => {
  const suggestBtn = event.target.closest("[data-suggest-search]");
  if (suggestBtn) {
    searchDraftKeyword = suggestBtn.dataset.suggestSearch;
    resourceSearchInput.value = searchDraftKeyword;
    commitSearch();
    return;
  }

  const card = event.target.closest("[data-resource-id]");
  if (!card) {
    return;
  }
  openAlbumDetail(card.dataset.resourceId, "resource-search");
});

appAudio.addEventListener("loadedmetadata", () => {
  const track = currentQueue[currentTrack];
  if (!track || !Number.isFinite(appAudio.duration)) {
    return;
  }

  track.duration = Math.max(1, Math.round(appAudio.duration));
  renderTrack();
});

appAudio.addEventListener("timeupdate", () => {
  const track = currentQueue[currentTrack];
  if (!track) {
    return;
  }

  if (Number.isFinite(abLoopStart) && Number.isFinite(abLoopEnd) && appAudio.currentTime >= abLoopEnd) {
    try {
      appAudio.currentTime = abLoopStart;
      track.progress = Math.round(abLoopStart);
    } catch {
      // ignore seek errors during loop jump
    }
  }

  track.progress = Math.max(0, Math.round(appAudio.currentTime || 0));
  if (Number.isFinite(appAudio.duration) && appAudio.duration > 0) {
    track.duration = Math.max(1, Math.round(appAudio.duration));
  }
  if (typeof lastAnalyticsUpdateAt === "number") {
    const delta = Math.max(0, (appAudio.currentTime || 0) - lastAnalyticsUpdateAt);
    if (delta > 0 && delta < 5) {
      addPetPlaybackProgress(delta);
    }
  }
  lastAnalyticsUpdateAt = appAudio.currentTime || 0;
  renderTrack();
});

appAudio.addEventListener("ended", () => {
  stepTrack(1);
});

appAudio.addEventListener("play", () => {
  pendingAutoplay = false;
  isPlaying = true;
  lastAnalyticsUpdateAt = appAudio.currentTime || 0;
  renderTrack();
});

appAudio.addEventListener("pause", () => {
  if (pendingAutoplay) {
    return;
  }
  lastAnalyticsUpdateAt = null;
  if (!appAudio.ended) {
    isPlaying = false;
    renderTrack();
  }
});

filterResultsGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-resource-id]");
  if (!card) {
    return;
  }
  openAlbumDetail(card.dataset.resourceId, "album-detail-results");
});

detailBackBtn.addEventListener("click", () => {
  detailDescModal.hidden = true;
  previousPageBeforePlay = null;
  if (previousPageBeforeDetail === "album-detail-results") {
    setPage("resource");
    resourcePage.classList.add("is-filter-open");
    filterResultsPage.classList.add("is-open");
    return;
  }
  if (previousPageBeforeDetail === "resource-search") {
    setPage("resource-search");
    return;
  }
  setPage(previousPageBeforeDetail);
});

lessonList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson-index]");
  if (!button) {
    return;
  }
  playAlbumLesson(Number(button.dataset.lessonIndex));
});

playBackBtn.addEventListener("click", () => {
  if (!previousPageBeforePlay) {
    return;
  }

  setPage(previousPageBeforePlay);
});

detailDescExpandBtn.addEventListener("click", () => {
  detailDescModal.hidden = false;
});

detailDescCollapseBtn.addEventListener("click", () => {
  detailDescModal.hidden = true;
});

detailDescModal.addEventListener("click", (event) => {
  if (event.target === detailDescModal) {
    detailDescModal.hidden = true;
  }
});

ageFilterPicker?.addEventListener("click", (event) => {
  const option = event.target.closest("[data-age-range]");
  if (option || ageDropdown.contains(event.target)) {
    return;
  }
  toggleAgeDropdown();
});
discoverFilterBtn.addEventListener("click", openFilterSheet);
filterBackBtn.addEventListener("click", () => closeFilterSheet());
filterConfirmBtn.addEventListener("click", () => {
  appliedFilters = cloneFilters(selectedFilters);
  openFilterResults();
});
filterResultsBackBtn.addEventListener("click", () => {
  selectedFilters = cloneFilters(appliedFilters);
  openFilterSheet({ preserve: true });
});

ageOptions.forEach((option) => {
  option.addEventListener("click", () => selectAgeRange(option.dataset.ageRange));
});

resourceSearchTrigger.addEventListener("click", () => {
  openSearchPage("resource");
});

searchPageBackBtn.addEventListener("click", () => {
  closeSearchPage();
});

searchFieldBtn.addEventListener("click", () => {
  showSearchKeyboard();
});

resourceSearchInput.addEventListener("focus", () => {
  showSearchKeyboard();
});

resourceSearchInput.addEventListener("input", (event) => {
  searchDraftKeyword = event.target.value;
});

resourceSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    commitSearch();
  }
});

searchKeyboard.addEventListener("click", (event) => {
  const key = event.target.closest("[data-key]");
  if (!key) {
    return;
  }

  const { key: keyValue } = key.dataset;

  if (keyValue === "backspace") {
    searchDraftKeyword = searchDraftKeyword.slice(0, -1);
  } else if (keyValue === "space") {
    searchDraftKeyword += " ";
  } else {
    searchDraftKeyword += keyValue;
  }

  resourceSearchInput.value = searchDraftKeyword;
  resourceSearchInput.focus();
});

searchSubmitBtn.addEventListener("click", () => {
  commitSearch();
});

searchHistoryList.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-history-keyword]");
  if (!chip) {
    return;
  }

  searchDraftKeyword = chip.dataset.historyKeyword;
  resourceSearchInput.value = searchDraftKeyword;
  commitSearch();
});

searchHistoryClearBtn.addEventListener("click", () => {
  searchHistory = [];
  saveSearchHistory();
  renderSearchHistory();
});

filterGroupTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter-group]");
  if (!button) {
    return;
  }
  currentFilterGroup = button.dataset.filterGroup;
  renderFilterGroups();
  renderFilterOptions();
});

filterOptionList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter-option]");
  if (!button) {
    return;
  }
  const option = button.dataset.filterOption;
  const set = selectedFilters[currentFilterGroup];
  if (set.has(option)) {
    set.delete(option);
  } else {
    set.add(option);
  }
  renderFilterOptions();
});

filterResultsTags.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-filter-group]");
  if (!button) {
    return;
  }

  const { removeFilterGroup, removeFilterLabel } = button.dataset;
  appliedFilters[removeFilterGroup].delete(removeFilterLabel);
  selectedFilters = cloneFilters(appliedFilters);
  renderFilterResults();
});

document.addEventListener("click", (event) => {
  if (!ageFilterPicker?.contains(event.target) && !ageDropdown.contains(event.target)) {
    ageDropdown.classList.remove("is-open");
  }
});

playBtn.addEventListener("click", togglePlayback);
prevBtn.addEventListener("click", () => stepTrack(-1));
nextBtn.addEventListener("click", () => stepTrack(1));
speedBtn.addEventListener("click", toggleSpeedPanel);
abLoopBtn.addEventListener("click", toggleAbLoop);
playlistBtn.addEventListener("click", togglePlaylistPanel);
speedPanelCloseBtn.addEventListener("click", closePlayOverlays);
playlistPanelCloseBtn.addEventListener("click", closePlayOverlays);

speedPanel.addEventListener("click", (event) => {
  if (event.target === speedPanel) {
    closePlayOverlays();
  }
});

playlistPanel.addEventListener("click", (event) => {
  if (event.target === playlistPanel) {
    closePlayOverlays();
  }
});

speedOptionList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-speed]");
  if (!button) {
    return;
  }

  setPlaybackRate(Number(button.dataset.speed));
  closePlayOverlays();
});

playlistList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-playlist-index]");
  if (!button) {
    return;
  }

  currentTrack = Number(button.dataset.playlistIndex);
  currentQueue[currentTrack].progress = 0;
  resetAbLoop();
  isPlaying = true;
  renderTrack();
  syncAudioTrack({ autoplay: true });
  closePlayOverlays();
});

petScenePager.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pet-scene-target]");
  if (!button) {
    return;
  }

  currentPetSceneIndex = Math.max(0, petSceneConfig.findIndex((item) => item.key === button.dataset.petSceneTarget));
  renderPetPage();
});

petItemGrid.addEventListener("click", (event) => {
  const feedButton = event.target.closest("[data-pet-feed]");
  if (feedButton) {
    usePetFeed(feedButton.dataset.petFeed);
    return;
  }

  const interactionButton = event.target.closest("[data-pet-interaction]");
  if (interactionButton) {
    usePetFaceInteraction(interactionButton.dataset.petInteraction);
    return;
  }

  const washButton = event.target.closest("[data-pet-wash]");
  if (washButton) {
    usePetWashAction(washButton.dataset.petWash);
    return;
  }

  const restButton = event.target.closest("[data-pet-rest]");
  if (restButton) {
    usePetRestAction(restButton.dataset.petRest);
  }
});

petSceneCarousel.addEventListener("pointerdown", (event) => {
  isDraggingPetScene = true;
  petSceneSwipeStartX = event.clientX;
});

petSceneCarousel.addEventListener("pointerup", (event) => {
  if (!isDraggingPetScene) {
    return;
  }

  const deltaX = event.clientX - petSceneSwipeStartX;
  isDraggingPetScene = false;
  if (Math.abs(deltaX) < 40) {
    return;
  }

  if (deltaX < 0 && currentPetSceneIndex < petSceneConfig.length - 1) {
    currentPetSceneIndex += 1;
  } else if (deltaX > 0 && currentPetSceneIndex > 0) {
    currentPetSceneIndex -= 1;
  }
  renderPetPage();
});

petSceneCarousel.addEventListener("pointerleave", () => {
  isDraggingPetScene = false;
});

petOrchardPull.addEventListener("pointerdown", (event) => {
  isDraggingPetOrchard = true;
  petOrchardDragMoved = false;
  petOrchardStartY = event.clientY;
  petOrchardStartOffset = petOrchardOffset;
  petOrchardPull.setPointerCapture?.(event.pointerId);
});

petOrchardPull.addEventListener("click", () => {
  if (petOrchardDragMoved) {
    petOrchardDragMoved = false;
    return;
  }
  setPetOrchardOffset(petOrchardOffset > 40 ? 0 : getPetOrchardMaxOffset());
});

petOrchardBubbles.addEventListener("click", (event) => {
  const button = event.target.closest("[data-fruit-bubble]");
  if (!button) {
    return;
  }

  harvestOrchardFruit(button.dataset.fruitBubble);
});

petPoopMarker?.addEventListener("click", () => {
  return;
});

petCleanupBtn?.addEventListener("click", () => {
  return;
});

petEgg?.addEventListener("click", () => {
  showPetSpeech("主人，今天的故事好听吗？");
});

petHarvestConfirmBtn.addEventListener("click", hidePetHarvestModal);
petHarvestModal.addEventListener("click", (event) => {
  if (event.target === petHarvestModal) {
    hidePetHarvestModal();
  }
});

lockKnob.addEventListener("click", enterChildLockMode);

lockSwipeZone.addEventListener("pointerdown", (event) => {
  swipeStartY = event.clientY;
});

lockSwipeZone.addEventListener("pointerup", (event) => {
  if (swipeStartY === null) {
    return;
  }

  const deltaY = swipeStartY - event.clientY;
  swipeStartY = null;
  if (deltaY > 70) {
    showUnlockGuide();
  }
});

emergencyLockBtn.addEventListener("click", () => {
  if (longPressTriggered) {
    longPressTriggered = false;
    return;
  }
  showLockNotice("提示", "为了避免误触，请长按紧急呼叫按钮进入。");
});

settingsLockBtn.addEventListener("click", () => {
  if (longPressTriggered) {
    longPressTriggered = false;
    return;
  }
  showLockNotice("提示", "为了避免误触，请长按系统设置按钮进入。");
});

[
  [emergencyLockBtn, "emergency"],
  [settingsLockBtn, "settings"],
].forEach(([button, type]) => {
  button.addEventListener("pointerdown", () => startLongPress(type));
  button.addEventListener("pointerup", cancelLongPress);
  button.addEventListener("pointerleave", cancelLongPress);
  button.addEventListener("pointercancel", cancelLongPress);
});

lockNoticeConfirmBtn.addEventListener("click", hideLockNotice);
unlockGuideConfirmBtn.addEventListener("click", showGesturePanel);
babyInfoEntry.addEventListener("click", () => showServicePage("baby"));
serviceBackButtons.forEach((button) => {
  button.addEventListener("click", () => handleServiceBack(button.dataset.serviceBack));
});

gestureDots.forEach((dot) => {
  dot.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    resetGesturePanel();
    isDrawingGesture = true;
    addGestureDot(dot.dataset.dot);
  });

  dot.addEventListener("pointerenter", () => {
    if (!isDrawingGesture) {
      return;
    }
    addGestureDot(dot.dataset.dot);
  });
});

gestureGrid.addEventListener("pointerup", finishGesture);
gestureGrid.addEventListener("pointerleave", finishGesture);
window.addEventListener("pointerup", finishGesture);

progressTrack.addEventListener("click", (event) => updateProgress(event.clientX));

scrollWheel.addEventListener("click", () => {
  if (isChildLockActive) {
    return;
  }
  stepTrack(1);
  adjustVolume(4);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    stepTrack(-1);
  }

  if (event.key === "ArrowRight") {
    stepTrack(1);
  }

  if (event.key === "ArrowUp") {
    adjustVolume(4);
  }

  if (event.key === "ArrowDown") {
    adjustVolume(-4);
  }

  if (event.code === "Space") {
    event.preventDefault();
    togglePlayback();
  }
});

window.addEventListener("pointermove", (event) => {
  if (!isDraggingPetOrchard) {
    return;
  }

  if (Math.abs(event.clientY - petOrchardStartY) > 6) {
    petOrchardDragMoved = true;
  }
  setPetOrchardOffset(petOrchardStartOffset + (event.clientY - petOrchardStartY));
});

window.addEventListener("pointerup", () => {
  if (!isDraggingPetOrchard) {
    return;
  }

  isDraggingPetOrchard = false;
  setPetOrchardOffset(petOrchardOffset > getPetOrchardMaxOffset() * 0.42 ? getPetOrchardMaxOffset() : 0);
});

window.addEventListener("resize", () => {
  fitDeviceToViewport();
  updateLockScreenInfo();
  requestAnimationFrame(updateTitleMarquee);
  requestAnimationFrame(updatePetSpeechPosition);
});

isPlaying = false;
renderTrack();
syncAudioTrack({ autoplay: false });
renderResourceTab(currentResourceTab);
initPetCleanupAssets();
renderPetPage();
setPetOrchardOffset(0);
fitDeviceToViewport();
updateLockScreenInfo();
setInterval(updateLockScreenInfo, 60000);
orchardRefreshTimer = window.setInterval(renderPetOrchard, 15000);
window.setInterval(() => {
  if (currentPage === "pet") {
    renderPetPage();
  }
}, 15000);
