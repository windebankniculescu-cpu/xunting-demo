const talkBtn = document.getElementById('talk-btn');
const micSvg = document.getElementById('mic-svg');
const soundwaves = document.getElementById('soundwave-bars');
let panghu = document.getElementById('panghu-video') || document.getElementById('panghu-img');
const waves = document.getElementById('waves');
const micIcon = document.getElementById('mic-icon');
const loading = document.getElementById('loading');
const bubble = document.getElementById('response-bubble');
const cardsPanel = document.getElementById('cards-panel');
const roleTrigger = document.getElementById('role-trigger');
const roleTriggerAvatar = document.getElementById('role-trigger-avatar');
const textToggleBtn = document.getElementById('text-toggle-btn');
const rolePage = document.getElementById('role-page');
const roleTrack = document.getElementById('role-track');
const roleDots = document.getElementById('role-dots');
const roleApplyBtn = document.getElementById('role-apply-btn');
const debugTranscript = document.getElementById('debug-transcript');
const debugFlowStatus = document.getElementById('debug-flow-status');
const debugFlowLog = document.getElementById('debug-flow-log');
const debugAction = document.getElementById('debug-action');
const textInputPanel = document.getElementById('text-input-panel');
const chatFileBtn = document.getElementById('chat-file-btn');
const chatFileInput = document.getElementById('chat-file-input');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');
const chatCloseBtn = document.getElementById('chat-close-btn');
const debugActionDetail = document.getElementById('debug-action-detail');
const debugCards = document.getElementById('debug-cards');
const debugCardsDetail = document.getElementById('debug-cards-detail');
const debugState = document.getElementById('debug-state');
const debugStateDetail = document.getElementById('debug-state-detail');
const screenEl = document.querySelector('.screen');
const fileDropHint = document.getElementById('file-drop-hint');
const historyRole = document.getElementById('history-role');
const historyList = document.getElementById('history-list');
const featureGateway = document.getElementById('feature-gateway');
const qaHomeBackBtn = document.getElementById('qa-home-back-btn');
const enterQaBtn = document.getElementById('enter-qa-btn');
const enterPetBtn = document.getElementById('enter-pet-btn');
const qaEntryAvatarImg = document.getElementById('qa-entry-avatar-img');
const uiScaleDownBtn = document.getElementById('ui-scale-down');
const uiScaleResetBtn = document.getElementById('ui-scale-reset');
const uiScaleUpBtn = document.getElementById('ui-scale-up');
const libaiPage = document.getElementById('libai-page');
const libaiCurrentTitle = document.getElementById('libai-current-title');
const libaiProgressText = document.getElementById('libai-progress-text');
const libaiProgressBar = document.getElementById('libai-progress-bar');
const libaiPoems = document.getElementById('libai-poems');
const libaiRefreshBtn = document.getElementById('libai-refresh-btn');
const libaiEntryBtn = document.getElementById('libai-entry-btn');
const libaiBackBtn = document.getElementById('libai-back-btn');
const libaiPoemModal = document.getElementById('libai-poem-modal');
const libaiModalBody = document.getElementById('libai-modal-body');
const libaiModalClose = document.getElementById('libai-modal-close');
const libaiModalAskBtn = document.getElementById('libai-modal-ask-btn');
const libaiExplainBtn = document.getElementById('libai-explain-btn');
const libaiReciteBtn = document.getElementById('libai-recite-btn');
const libaiExplainPanel = document.getElementById('libai-explain-panel');
const libaiLineExplain = document.getElementById('libai-line-explain');
const petPage = document.getElementById('pet-page');
const petPageBackBtn = document.getElementById('pet-page-back-btn');
const petLevelText = document.getElementById('pet-level-text');
const petLevelBar = document.getElementById('pet-level-bar');
const petEnergyText = document.getElementById('pet-energy-text');
const petEnergyBar = document.getElementById('pet-energy-bar');
const petAffectionText = document.getElementById('pet-affection-text');
const petAffectionBar = document.getElementById('pet-affection-bar');
const petCharacterBtn = document.getElementById('pet-character-btn');
const petReactionBubble = document.getElementById('pet-reaction-bubble');
const petActionsDefault = document.getElementById('pet-actions-default');
const petActionsPlay = document.getElementById('pet-actions-play');
const petPlayBtn = document.getElementById('pet-play-btn');
const petFeedBtn = document.getElementById('pet-feed-btn');
const petPlayBackBtn = document.getElementById('pet-play-back-btn');
const petPlayMicBtn = document.getElementById('pet-play-mic-btn');
const petPlayMicText = document.getElementById('pet-play-mic-text');
const petBackpack = document.getElementById('pet-backpack');
const petBackpackHandle = document.getElementById('pet-backpack-handle');
const petFoodList = document.getElementById('pet-food-list');

let mediaStream = null;
let mediaRecorder = null;
let audioChunks = [];
let recordingStartPromise = null;
let activeMimeType = '';
let lastReplyAudioSrc = '';
let pendingTtsRequestId = 0;

const speaker = new Audio();
const audioUnlocker = new Audio();
audioUnlocker.src = 'data:audio/wav;base64,UklGRiwAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQgAAAAA';
const roles = [
  { id: 'panghu', name: '胖虎', avatar: 'assets/胖虎形象.jpg', center: 'assets/打招呼.mp4', isVideo: true, color: '#fffdfc', greeting: '呼哈！找我有什么好玩的？' },
  { id: 'libai', name: '李白', avatar: 'assets/李白形象.jpg', center: 'assets/李白形象.jpg', isVideo: false, color: '#fffdfc', greeting: '清风送爽，在此候教。' },
  { id: 'zhixia', name: '知夏', avatar: 'assets/知夏形象.jpg', center: 'assets/知夏形象.jpg', isVideo: false, color: '#fffdfc', greeting: '你好呀，我一直在这里陪你。' },
  { id: 'einstein', name: '爱因斯坦', avatar: 'assets/爱因斯坦形象.jpg', center: 'assets/爱因斯坦形象.jpg', isVideo: false, color: '#fffdfc', greeting: '朋友！你想要和我探讨宇宙还是科学？' }
];

const STATE = {
  IDLE: 'IDLE',
  LISTENING: 'LISTENING',
  THINKING: 'THINKING',
  RESPONDING: 'RESPONDING'
};

let currentState = STATE.IDLE;
let previewRoleIndex = 0;
let appliedRoleIndex = 0;
let roleTouchStartX = 0;
let isRolePanelOpen = false;
let flowEntries = [];
let _typewriterQueue = '';
let _typewriterRendered = '';
let _typewriterTimer = null;
let dragCounter = 0;
let libaiLoadSeq = 0;
let reciteRecording = false;
let reciteBusy = false;
let libaiAskBusy = false;
let libaiAskRecording = false;
let libaiAskStartPromise = null;
let currentPoemSentences = [];
let currentPoemLineExplanations = [];
let currentSelectedLineIndex = -1;
let libaiEntryDocked = false;
let libaiEntryTouchStartX = null;
const UI_DENSITY_SCALE = 0.6667;
const UI_MANUAL_SCALE_DEFAULT = 1;
const UI_MANUAL_SCALE_MIN = 0.75;
const UI_MANUAL_SCALE_MAX = 1.5;
let uiManualScale = UI_MANUAL_SCALE_DEFAULT;
let qaBootstrapped = false;
let petReactionTimer = null;
let petTalkTimer = null;
let petNeedStageHinted = 0;

const PET_MAX_LEVEL = 5;
const PET_EXP_PER_LEVEL = 100;
const PET_STATE = {
  exp: 0,
  affection: 20,
  energy: 20,
  inPlayMode: false,
  backpackOpen: false,
  isTalking: false,
  talkSecondsTotal: 0,
  talkSecondsForEnergy: 0,
  talkSecondsForAffection: 0,
  foods: [
    { id: 'apple', name: '苹果', icon: '🍎', qty: 6, affectionGain: 0, energyGain: 5, expGain: 0 },
    { id: 'cookie', name: '小饼干', icon: '🍪', qty: 4, affectionGain: 1, energyGain: 2, expGain: 0 },
    { id: 'milk', name: '牛奶', icon: '🥛', qty: 3, affectionGain: 0, energyGain: 3, expGain: 0 },
    { id: 'fish', name: '小鱼干', icon: '🐟', qty: 5, affectionGain: 1, energyGain: 5, expGain: 0 }
  ]
};
const PET_REACTIONS = {
  pokeIdle: ['呀，你来啦！', '嘿嘿，摸摸我～', '我在等你带我玩！'],
  pokePlay: ['哇！再来一次！', '咕噜咕噜，开心！', '我跳起来啦！'],
  chatStart: ['我在听你说话呢～', '我们开始聊天吧！'],
  chatStop: ['收到，我先休息一会儿。', '好的，等你继续和我聊天～'],
  playStart: ['出发！我们来玩耍吧！'],
  feedOpen: ['肚子咕咕叫，想吃点心！'],
  hungry: ['我有点饿了，想吃点东西。'],
  tired: ['我有点累了，想休息一下。'],
  hungryAndTired: ['我有点饿了，也有点累了，能先喂我吗？']
};

const urlParams = new URLSearchParams(window.location.search);
const isEmbedMode = urlParams.get('embed') === '1' || window.self !== window.top;

if (isEmbedMode) {
  document.body.classList.add('embed-mode');
}

function fitEmbedScreen() {
  if (!isEmbedMode || !screenEl) return;
  const baseWidth = 480;
  const baseHeight = 800;
  const availableWidth = window.innerWidth || baseWidth;
  const availableHeight = window.innerHeight || baseHeight;
  const scale = Math.min(availableWidth / baseWidth, availableHeight / baseHeight);
  screenEl.style.setProperty('--embed-screen-scale', String(scale));
}

const LIBAI_MODE_ROLE_ID = 'libai';
const LIBAI_STATE = {
  overview: null,
  poems: [],
  selectedPoemId: '',
  detail: null
};

function getActiveRole() {
  return roles[appliedRoleIndex] || roles[0];
}

function renderQaEntryAvatar() {
  if (!qaEntryAvatarImg) return;
  const role = getActiveRole();
  qaEntryAvatarImg.src = role?.avatar || 'assets/胖虎形象.jpg';
  qaEntryAvatarImg.alt = `${role?.name || '当前角色'}形象`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, Number(value) || 0));
}

function pickRandom(list = []) {
  if (!Array.isArray(list) || list.length === 0) return '';
  return list[Math.floor(Math.random() * list.length)] || '';
}

function formatPetTalkTime(totalSeconds) {
  const sec = Math.max(0, Math.floor(totalSeconds || 0));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function getPetNeedStage() {
  if (PET_STATE.energy <= 20) return 2;
  if (PET_STATE.energy <= 35) return 1;
  return 0;
}

function getPetNeedReactionByStage(stage) {
  if (stage >= 2) return pickRandom(PET_REACTIONS.hungryAndTired);
  if (stage === 1) return pickRandom(PET_REACTIONS.hungry);
  return '';
}

function maybeSpeakPetNeeds(force = false) {
  const stage = getPetNeedStage();
  if (stage === 0) {
    petNeedStageHinted = 0;
    return false;
  }
  if (!force && stage <= petNeedStageHinted) {
    return false;
  }
  petNeedStageHinted = stage;
  const text = getPetNeedReactionByStage(stage);
  if (text) {
    showPetReaction(text, 2200);
    return true;
  }
  return false;
}

function updatePetMicButton() {
  if (!petPlayMicBtn) return;
  petPlayMicBtn.classList.toggle('is-chatting', !!PET_STATE.isTalking);
  if (petPlayMicText) {
    if (PET_STATE.isTalking) {
      petPlayMicText.textContent = `聊天中 ${formatPetTalkTime(PET_STATE.talkSecondsTotal)}（点我结束）`;
    } else {
      petPlayMicText.textContent = '和宠物聊天';
    }
  }
}

function stopPetTalking() {
  PET_STATE.isTalking = false;
  if (petTalkTimer) {
    clearInterval(petTalkTimer);
    petTalkTimer = null;
  }
  updatePetMicButton();
}

function startPetTalking() {
  if (PET_STATE.isTalking) return;
  PET_STATE.isTalking = true;
  updatePetMicButton();
  if (petTalkTimer) {
    clearInterval(petTalkTimer);
  }
  petTalkTimer = setInterval(() => {
    if (!PET_STATE.isTalking) return;
    PET_STATE.talkSecondsTotal += 1;
    PET_STATE.talkSecondsForEnergy += 1;
    PET_STATE.talkSecondsForAffection += 1;

    let energyDelta = 0;
    let affectionDelta = 0;

    if (PET_STATE.talkSecondsForEnergy >= 300) {
      const cost = Math.floor(PET_STATE.talkSecondsForEnergy / 300);
      PET_STATE.talkSecondsForEnergy -= cost * 300;
      energyDelta -= cost;
    }
    if (PET_STATE.talkSecondsForAffection >= 600) {
      const gain = Math.floor(PET_STATE.talkSecondsForAffection / 600);
      PET_STATE.talkSecondsForAffection -= gain * 600;
      affectionDelta += gain;
    }

    if (energyDelta !== 0 || affectionDelta !== 0) {
      applyPetStatDelta({ energy: energyDelta, affection: affectionDelta });
      renderPetPanel();
      maybeSpeakPetNeeds();
    } else {
      updatePetMicButton();
    }
  }, 1000);
}

function getPetLevelInfo() {
  const exp = Math.max(0, Number(PET_STATE.exp) || 0);
  const rawLevel = Math.floor(exp / PET_EXP_PER_LEVEL) + 1;
  const level = Math.min(PET_MAX_LEVEL, Math.max(1, rawLevel));
  if (level >= PET_MAX_LEVEL) {
    return { level, progress: 1 };
  }
  const currentBase = (level - 1) * PET_EXP_PER_LEVEL;
  const progress = clamp((exp - currentBase) / PET_EXP_PER_LEVEL, 0, 1);
  return { level, progress };
}

function syncPetModeView() {
  if (!petActionsDefault || !petActionsPlay || !petBackpack) return;
  petActionsDefault.classList.toggle('hidden', PET_STATE.inPlayMode);
  petActionsPlay.classList.toggle('hidden', !PET_STATE.inPlayMode);
  petBackpack.classList.toggle('is-open', PET_STATE.backpackOpen);
  updatePetMicButton();
}

function setPetPlayMode(playMode) {
  PET_STATE.inPlayMode = !!playMode;
  if (PET_STATE.inPlayMode) {
    PET_STATE.backpackOpen = false;
  } else {
    stopPetTalking();
  }
  syncPetModeView();
}

function setPetBackpackOpen(open) {
  PET_STATE.backpackOpen = !!open;
  if (PET_STATE.backpackOpen) {
    PET_STATE.inPlayMode = false;
    stopPetTalking();
  }
  syncPetModeView();
}

function showPetReaction(text, duration = 1500) {
  if (!petReactionBubble) return;
  petReactionBubble.textContent = text;
  petReactionBubble.classList.remove('hidden');
  if (petReactionTimer) {
    clearTimeout(petReactionTimer);
    petReactionTimer = null;
  }
  petReactionTimer = setTimeout(() => {
    petReactionBubble.classList.add('hidden');
  }, duration);
}

function bumpPetCharacter() {
  if (!petCharacterBtn) return;
  petCharacterBtn.classList.remove('is-reacting');
  petCharacterBtn.offsetHeight;
  petCharacterBtn.classList.add('is-reacting');
}

function applyPetStatDelta({ affection = 0, energy = 0, exp = 0 } = {}) {
  PET_STATE.affection = clamp((PET_STATE.affection || 0) + affection, 0, 100);
  PET_STATE.energy = clamp((PET_STATE.energy || 0) + energy, 0, 100);
  PET_STATE.exp = Math.max(0, (PET_STATE.exp || 0) + exp);
}

function consumePetFood(foodId) {
  const food = PET_STATE.foods.find((item) => item.id === foodId);
  if (!food) return;
  if (food.qty <= 0) {
    showPetReaction(`${food.name}吃完啦，去补货吧～`);
    return;
  }
  food.qty -= 1;
  applyPetStatDelta({
    affection: food.affectionGain,
    energy: food.energyGain,
    exp: food.expGain
  });
  renderPetPanel();
  bumpPetCharacter();
  showPetReaction(`咔嚓咔嚓，${food.name}真好吃！`);
}

function renderPetFoods() {
  if (!petFoodList) return;
  petFoodList.innerHTML = PET_STATE.foods.map((food) => (
    `<button class="pet-food-item"${food.qty <= 0 ? ' disabled' : ''} type="button" data-food-id="${food.id}">` +
      `<div class="pet-food-icon">${food.icon}</div>` +
      `<div class="pet-food-name">${food.name}</div>` +
      `<div class="pet-food-qty">x ${food.qty}</div>` +
    `</button>`
  )).join('');

  petFoodList.querySelectorAll('.pet-food-item').forEach((btn) => {
    btn.addEventListener('click', () => consumePetFood(btn.dataset.foodId || ''));
  });
}

function renderPetPanel() {
  if (!petPage) return;
  const levelInfo = getPetLevelInfo();
  if (petLevelText) {
    petLevelText.textContent = `AI宠物 Lv.${levelInfo.level}/${PET_MAX_LEVEL}`;
  }
  if (petLevelBar) {
    petLevelBar.style.width = `${Math.round(levelInfo.progress * 100)}%`;
  }
  if (petEnergyText) {
    petEnergyText.textContent = `精力 ${Math.round(PET_STATE.energy)}%`;
  }
  if (petEnergyBar) {
    petEnergyBar.style.width = `${Math.round(PET_STATE.energy)}%`;
  }
  if (petAffectionText) {
    petAffectionText.textContent = `${Math.round(PET_STATE.affection)}%`;
  }
  if (petAffectionBar) {
    petAffectionBar.style.height = `${Math.round(PET_STATE.affection)}%`;
  }
  renderPetFoods();
  syncPetModeView();
  updatePetMicButton();
}

function setPetPageOpen(open) {
  if (!petPage) return;
  petPage.classList.toggle('hidden', !open);
  if (screenEl) {
    screenEl.classList.toggle('pet-page-open', !!open);
  }
  if (open) {
    stopAllAiSpeech();
    setRolePanelOpen(false);
    setLibaiPanelOpen(false);
    setPetPlayMode(false);
    setPetBackpackOpen(false);
    renderPetPanel();
    maybeSpeakPetNeeds(true);
  } else {
    stopPetTalking();
    setPetPlayMode(false);
    setPetBackpackOpen(false);
  }
  syncQaHomeBackBtnVisibility();
}

function syncQaHomeBackBtnVisibility() {
  if (!qaHomeBackBtn) return;
  const gatewayVisible = !!featureGateway && !featureGateway.classList.contains('hidden');
  const libaiOpen = !!libaiPage && !libaiPage.classList.contains('hidden');
  const petOpen = !!petPage && !petPage.classList.contains('hidden');
  const shouldShow = !gatewayVisible && !libaiOpen && !petOpen;
  qaHomeBackBtn.classList.toggle('hidden', !shouldShow);
}

function setFeatureGatewayVisible(visible) {
  if (!featureGateway) return;
  featureGateway.classList.toggle('hidden', !visible);
  if (visible) {
    stopAllAiSpeech();
    setRolePanelOpen(false);
    setLibaiPanelOpen(false);
    setPetPageOpen(false);
  }
  syncQaHomeBackBtnVisibility();
}

function bootstrapQaIfNeeded() {
  if (qaBootstrapped) return;
  setState(STATE.IDLE);
  updateDebugPanel({});
  renderRoleCarousel();
  clearMediaCacheOnPageLoad();
  applyRole();
  loadConversationHistory();
  qaBootstrapped = true;
}

function unlockAudioPlayback() {
  audioUnlocker.currentTime = 0;
  const unlockPromise = audioUnlocker.play();
  if (unlockPromise && typeof unlockPromise.then === 'function') {
    unlockPromise
      .then(() => {
        audioUnlocker.pause();
        audioUnlocker.currentTime = 0;
      })
      .catch(() => {});
  }
}

function stringifyDebugValue(value) {
  if (value === undefined || value === null || value === '') return '-';
  if (typeof value === 'string') return value;
  try {
    return JSON.stringify(value, null, 2);
  } catch (_) {
    return String(value);
  }
}

function setTextIfExists(el, value) {
  if (!el) return;
  el.textContent = value;
}

function applyUiScale(value) {
  const next = clamp(value, UI_MANUAL_SCALE_MIN, UI_MANUAL_SCALE_MAX) || UI_MANUAL_SCALE_DEFAULT;
  uiManualScale = Number(next.toFixed(2));
  const displayScale = (UI_DENSITY_SCALE * uiManualScale).toFixed(4);
  document.documentElement.style.setProperty('--ui-display-scale', displayScale);
  if (uiScaleResetBtn) {
    uiScaleResetBtn.textContent = `${Math.round(uiManualScale * 100)}%`;
  }
  try {
    localStorage.setItem('ui_manual_scale', String(uiManualScale));
  } catch (_) {}
}

function initUiScaleControls() {
  let initial = UI_MANUAL_SCALE_DEFAULT;
  try {
    initial = Number(localStorage.getItem('ui_manual_scale') || UI_MANUAL_SCALE_DEFAULT);
  } catch (_) {
    initial = UI_MANUAL_SCALE_DEFAULT;
  }
  applyUiScale(initial);

  if (uiScaleDownBtn) {
    uiScaleDownBtn.addEventListener('click', () => applyUiScale(uiManualScale - 0.05));
  }
  if (uiScaleUpBtn) {
    uiScaleUpBtn.addEventListener('click', () => applyUiScale(uiManualScale + 0.05));
  }
  if (uiScaleResetBtn) {
    uiScaleResetBtn.addEventListener('click', () => applyUiScale(UI_MANUAL_SCALE_DEFAULT));
  }
}

function escapeHtml(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function isPoemPunctuation(ch) {
  return '，。！？、；：,.!?;:"\'“”‘’（）《》—…·'.includes(ch);
}

async function loadConversationHistory() {
  if (!historyList && !historyRole) return;
  try {
    const role = getActiveRole();
    setTextIfExists(historyRole, `当前角色：${role.name}`);
    const res = await fetch(`/api/history?role_id=${encodeURIComponent(role.id)}`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || 'history_fetch_failed');
    }

    const items = Array.isArray(data.history) ? data.history : [];
    if (!historyList) return;
    if (items.length === 0) {
      historyList.innerHTML = '<div class="history-empty">暂无对话记录</div>';
      return;
    }

    historyList.innerHTML = items.map((item) => {
      const isUser = item?.role === 'user';
      const cls = isUser ? 'user' : 'assistant';
      const roleLabel = isUser ? '孩子' : role.name;
      const content = escapeHtml(item?.content || '');
      return (
        `<div class="history-item ${cls}">` +
          `<div class="history-item-role">${roleLabel}</div>` +
          `<div class="history-item-text">${content}</div>` +
        `</div>`
      );
    }).join('');
    historyList.scrollTop = historyList.scrollHeight;
  } catch (err) {
    console.error("Failed to load history:", err);
    if (historyList) {
      historyList.innerHTML = '<div class="history-empty">历史记录加载失败</div>';
    }
  }
}

function formatFlowTime() {
  const now = new Date();
  return now.toLocaleTimeString('zh-CN', { hour12: false });
}

function renderFlowLog() {
  if (!debugFlowStatus || !debugFlowLog) return;
  if (!flowEntries.length) {
    debugFlowStatus.textContent = '待机中';
    debugFlowLog.innerHTML = `
      <div class="debug-flow-item is-idle">
        <span class="debug-flow-dot"></span>
        <div class="debug-flow-content">
          <div class="debug-flow-title">等待操作</div>
          <div class="debug-flow-meta">还没有开始新的请求</div>
        </div>
      </div>
    `;
    return;
  }

  const latest = flowEntries[flowEntries.length - 1];
  debugFlowStatus.textContent = latest.title;
  debugFlowLog.innerHTML = flowEntries.map((entry) => `
    <div class="debug-flow-item ${entry.kind}">
      <span class="debug-flow-dot"></span>
      <div class="debug-flow-content">
        <div class="debug-flow-title">${entry.title}</div>
        <div class="debug-flow-meta">${entry.time}${entry.detail ? ` · ${entry.detail}` : ''}</div>
      </div>
    </div>
  `).join('');
}

function resetFlowLog(title, detail = '') {
  flowEntries = [{ kind: 'is-active', title, detail, time: formatFlowTime() }];
  renderFlowLog();
}

function pushFlowStep(title, detail = '', kind = 'is-active') {
  flowEntries.push({ kind, title, detail, time: formatFlowTime() });
  if (flowEntries.length > 10) {
    flowEntries = flowEntries.slice(-10);
  }
  renderFlowLog();
}

function updateDebugPanel(payload, transcriptOverride = null) {
  setTextIfExists(debugTranscript, stringifyDebugValue(transcriptOverride || payload?.transcript || '等待输入'));
  setTextIfExists(debugAction, payload?.action?.type
    ? `${payload.action.type} · ${payload.action.status || 'pending'}`
    : '-');
  setTextIfExists(debugActionDetail, stringifyDebugValue(payload?.action));
  setTextIfExists(debugCards, payload?.cards?.length ? `共 ${payload.cards.length} 张卡片` : '无');
  setTextIfExists(debugCardsDetail, stringifyDebugValue(payload?.cards || []));
  setTextIfExists(debugState, payload?.state
    ? `${payload.state.role_name || getActiveRole().name} · 积分 ${payload.state.points || 0} · 待完成任务 ${payload.state.pending_tasks || 0} · 待审批 ${payload.state.pending_approvals || 0}`
    : '-');
  setTextIfExists(debugStateDetail, stringifyDebugValue(payload?.state));
}

function syncLibaiDebug(actionType, status = 'active', transcript = '李白诗集交互', extras = {}) {
  const detail = LIBAI_STATE.detail || {};
  const fallbackState = {
    role_name: '李白',
    points: '-',
    pending_tasks: '-',
    pending_approvals: '-',
    poem_title: detail.title || '',
    poem_id: detail.poem_id || LIBAI_STATE.selectedPoemId || ''
  };
  updateDebugPanel({
    transcript,
    intent: 'libai_poetry',
    action: { type: actionType, status },
    cards: [],
    policy_result: null,
    state: fallbackState,
    ...extras
  }, transcript);
}

async function requestReplyAudio(replyText) {
  const requestId = ++pendingTtsRequestId;
  pushFlowStep('请求语音合成', `${getActiveRole().name} · ${replyText.slice(0, 24)}`, 'is-active');

  try {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply: replyText, role_id: getActiveRole().id })
    });
    const data = await res.json();

    if (!res.ok || requestId !== pendingTtsRequestId || !data.audio) {
      pushFlowStep('语音合成失败', data?.error || '没有返回音频数据', 'is-error');
      return;
    }

    const type = data.audio_type || "mp3";
    lastReplyAudioSrc = `data:audio/${type};base64,${data.audio}`;
    pushFlowStep('语音合成完成', `格式 ${type}`, 'is-success');
    stopAllAiSpeech();
    speaker.src = lastReplyAudioSrc;
    speaker.play()
      .then(() => pushFlowStep('开始播放语音', getActiveRole().name, 'is-success'))
      .catch((err) => {
        console.error("Audio playback restricted:", err);
        pushFlowStep('语音播放失败', err?.message || '浏览器拦截了播放', 'is-error');
      });
  } catch (err) {
    console.error("TTS backend error:", err);
    pushFlowStep('语音合成报错', err?.message || 'TTS 请求失败', 'is-error');
  }
}

function releaseMediaStream() {
  if (!mediaStream) return;
  mediaStream.getTracks().forEach((track) => track.stop());
  mediaStream = null;
  mediaRecorder = null;
}

function wrapRoleIndex(index) {
  const total = roles.length;
  return (index + total) % total;
}

function isLibaiMode() {
  return getActiveRole().id === LIBAI_MODE_ROLE_ID;
}

function setLibaiEntryVisible(visible) {
  if (!libaiEntryBtn) return;
  libaiEntryBtn.classList.toggle('hidden', !visible);
  if (!visible) {
    setLibaiEntryDocked(false);
  }
}

function setLibaiPanelOpen(open) {
  if (!libaiPage) return;
  if (!open) {
    closePoemModal();
  }
  libaiPage.classList.toggle('hidden', !open);
  if (screenEl) {
    screenEl.classList.toggle('libai-page-open', !!open);
  }
  if (open) {
    setLibaiEntryDocked(false);
  } else {
    syncLibaiEntryDockState();
  }
  syncQaHomeBackBtnVisibility();
}

function setLibaiEntryDocked(docked) {
  if (!libaiEntryBtn) return;
  libaiEntryDocked = !!docked;
  libaiEntryBtn.classList.toggle('is-docked', libaiEntryDocked);
}

function syncLibaiEntryDockState() {
  if (!libaiEntryBtn || !isLibaiMode()) return;
  if (!libaiPage.classList.contains('hidden')) {
    setLibaiEntryDocked(false);
    return;
  }
  const shouldDock = currentState !== STATE.IDLE;
  setLibaiEntryDocked(shouldDock);
}

/* ── 星级渲染 ────────────────────── */
function renderStars(difficulty, maxStars = 5) {
  let html = '';
  for (let i = 1; i <= maxStars; i++) {
    html += i <= difficulty
      ? '<span>★</span>'
      : '<span class="star-empty">☆</span>';
  }
  return html;
}

/* ── TTS 标题朗读 ────────────────── */
let _titleTtsAudio = null;
let _titleTtsPlayingBtn = null;
let _lineExplainAudio = null;
let _titleTtsReqId = 0;
let _lineTtsReqId = 0;

function stopAllAiSpeech() {
  _titleTtsReqId += 1;
  _lineTtsReqId += 1;

  if (speaker) {
    speaker.pause();
    speaker.currentTime = 0;
  }
  if (_titleTtsAudio) {
    _titleTtsAudio.pause();
    _titleTtsAudio = null;
  }
  if (_titleTtsPlayingBtn) {
    _titleTtsPlayingBtn.classList.remove('is-playing');
    _titleTtsPlayingBtn = null;
  }
  if (_lineExplainAudio) {
    _lineExplainAudio.pause();
    _lineExplainAudio = null;
  }
}

async function fetchLibaiTTSAudio(text) {
  const res = await fetch('/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reply: text, text, role_id: 'libai' })
  });
  const data = await res.json();
  if (!res.ok || !data.audio) {
    throw new Error(data?.error || 'libai_tts_failed');
  }
  return new Audio(`data:audio/${data.audio_type || 'mp3'};base64,${data.audio}`);
}

async function playLibaiTTS(text, source = 'poem_tts') {
  if (!text) return;
  syncLibaiDebug(source, 'active', `朗读：${String(text).slice(0, 28)}`);
  try {
    stopAllAiSpeech();
    const reqId = _lineTtsReqId;
    const audio = await fetchLibaiTTSAudio(text);
    if (reqId !== _lineTtsReqId) return;
    _lineExplainAudio = audio;
    audio.addEventListener('ended', () => {
      if (_lineExplainAudio === audio) {
        _lineExplainAudio = null;
      }
    });
    audio.play();
  } catch (e) {
    console.error('Libai TTS failed:', e);
    syncLibaiDebug(source, 'error', e?.message || '朗读失败');
  }
}

async function playTitleTTS(title, speakerBtn, source = 'poem_title_tts') {
  // 如果正在播同一个，停止
  if (_titleTtsAudio && _titleTtsPlayingBtn === speakerBtn) {
    stopAllAiSpeech();
    syncLibaiDebug(source, 'success', '已停止朗读');
    return;
  }
  syncLibaiDebug(source, 'active', `朗读：${String(title || '').slice(0, 28)}`);
  stopAllAiSpeech();
  const reqId = _titleTtsReqId;
  speakerBtn.classList.add('is-playing');
  _titleTtsPlayingBtn = speakerBtn;
  try {
    const audio = await fetchLibaiTTSAudio(title);
    if (reqId !== _titleTtsReqId || _titleTtsPlayingBtn !== speakerBtn) return;
    _titleTtsAudio = audio;
    audio.addEventListener('ended', () => {
      if (_titleTtsPlayingBtn === speakerBtn) {
        speakerBtn.classList.remove('is-playing');
        _titleTtsPlayingBtn = null;
      }
      if (_titleTtsAudio === audio) {
        _titleTtsAudio = null;
      }
    });
    audio.play();
  } catch (e) {
    console.error('Title TTS failed:', e);
    syncLibaiDebug(source, 'error', e?.message || '标题朗读失败');
    if (_titleTtsPlayingBtn === speakerBtn) {
      speakerBtn.classList.remove('is-playing');
      _titleTtsPlayingBtn = null;
    }
    if (_titleTtsAudio) {
      _titleTtsAudio = null;
    }
  }
}

/* ── 拼音 HTML 渲染 ──────────────── */
function renderPinyinHtml(pinyinData, autoLineBreak = true) {
  if (!Array.isArray(pinyinData) || pinyinData.length === 0) return '';
  let html = '';
  for (const item of pinyinData) {
    const ch = item?.char || '';
    if (!ch) continue;

    if (ch === '\n' || ch === '\r') {
      html += '<br>';
      continue;
    }

    const isPunct = isPoemPunctuation(ch);
    const py = String(item?.pinyin || '');
    const safePy = py ? escapeHtml(py) : '&nbsp;';
    html += `<span class="poem-cell${isPunct ? ' is-punct' : ''}"><span class="poem-cell-py">${safePy}</span><span class="poem-cell-ch">${escapeHtml(ch)}</span></span>`;

    if (autoLineBreak && (ch === '，' || ch === '。' || ch === ',' || ch === '.')) {
      html += '<br>';
    }
  }
  return autoLineBreak ? html.replace(/<br>$/, '') : html;
}

function formatPoemTwoSentencesPerLine(text) {
  const raw = String(text || '').trim();
  if (!raw) return '';

  const segments = [];
  const regex = /([^，。！？；,.!?;]+)([，。！？；,.!?;]?)/g;
  let match;
  while ((match = regex.exec(raw)) !== null) {
    const sentence = (match[1] || '').trim();
    if (!sentence) continue;
    const punctuation = match[2] || '';
    segments.push(`${sentence}${punctuation}`);
  }

  if (segments.length === 0) return raw;

  return segments.join('\n');
}

function splitPinyinBySentence(pinyinData) {
  if (!Array.isArray(pinyinData) || pinyinData.length === 0) return [];
  const sentences = [];
  let current = [];
  for (const token of pinyinData) {
    current.push(token);
    const ch = token?.char || '';
    if (ch && '，。！？；,.!?;'.includes(ch)) {
      sentences.push(current);
      current = [];
    }
  }
  if (current.length) sentences.push(current);
  return sentences;
}

function getSentenceTextFromPinyinChunk(chunk) {
  if (!Array.isArray(chunk)) return '';
  return chunk.map((item) => item?.char || '').join('');
}

function normalizeToFirstPerson(text) {
  const raw = String(text || '').trim();
  if (!raw) return '';
  return raw
    .replaceAll('李白', '我')
    .replaceAll('诗人', '我')
    .replaceAll('他', '我')
    .replaceAll('其', '我');
}

function buildNarratorExplain(detail) {
  const title = detail?.title || '';
  const narrator = String(detail?.narrator_explain || '').trim();
  if (narrator) return narrator;

  const cb = detail?.content_blocks || {};
  if (!title && !cb.background && !cb.meaning) return '';
  const background = normalizeToFirstPerson(cb.background) || '那时我在路上，看着眼前景象，心里涌起很多感受。';
  const meaning = normalizeToFirstPerson(cb.meaning) || '我想把看到的画面和心里的起伏都写进诗里。';
  return `写下《${title}》的时候，${background}我真正想说的是：${meaning}我常借比喻、夸张和想象，把眼前景与心中情连在一起，让你一读就能看见画面，也能听见我的心声。`;
}

function buildPoemFullReadText(detail) {
  const title = String(detail?.title || '').trim();
  const poemText = String(detail?.target_text || '').replace(/[\r\n]+/g, '').trim();
  const titlePart = title ? `《${title}》` : '';
  if (!titlePart) return poemText;
  if (!poemText) return titlePart;
  return `${titlePart}。${poemText}`;
}

function renderSentenceChunkHtml(chunk) {
  if (!Array.isArray(chunk) || chunk.length === 0) return '';
  return chunk.map((token) => {
    const ch = token?.char || '';
    if (!ch) return '';
    const isPunct = isPoemPunctuation(ch);
    const py = String(token?.pinyin || '');
    const safePy = py ? escapeHtml(py) : '&nbsp;';
    return `<span class="poem-cell${isPunct ? ' is-punct' : ''}"><span class="poem-cell-py">${safePy}</span><span class="poem-cell-ch">${escapeHtml(ch)}</span></span>`;
  }).join('');
}

function showLineExplainCard(title, text, mode = 'line') {
  if (!libaiLineExplain) return;
  const isLineMode = mode === 'line';
  const readText = String(text || '').trim();
  libaiLineExplain.classList.remove('hidden');
  libaiLineExplain.classList.toggle('is-recite', mode === 'recite');
  libaiLineExplain.classList.toggle('is-tap-speak', isLineMode && !!readText);
  libaiLineExplain.dataset.readText = isLineMode && readText ? readText : '';
  libaiLineExplain.innerHTML = `
    <div class="libai-line-explain-title">${escapeHtml(title || '')}</div>
    <div class="libai-line-explain-text">${escapeHtml(text || '')}</div>
  `;
}

function hideLineExplainCard() {
  if (!libaiLineExplain) return;
  libaiLineExplain.classList.add('hidden');
  libaiLineExplain.classList.remove('is-recite');
  libaiLineExplain.classList.remove('is-tap-speak');
  libaiLineExplain.dataset.readText = '';
  libaiLineExplain.innerHTML = '';
}

function setReciteButtonState(opts = {}) {
  if (!libaiReciteBtn) return;
  const recording = !!opts.recording;
  const disabled = !!opts.disabled;
  libaiReciteBtn.disabled = disabled;
  libaiReciteBtn.classList.toggle('is-recording', recording);
  if (disabled) {
    libaiReciteBtn.textContent = '提交中...';
    return;
  }
  libaiReciteBtn.textContent = recording ? '结束背诵' : '开始背诵';
}

function setLibaiAskButtonState(opts = {}) {
  if (!libaiModalAskBtn) return;
  const recording = !!opts.recording;
  const disabled = !!opts.disabled;
  libaiModalAskBtn.disabled = disabled;
  libaiModalAskBtn.classList.toggle('is-recording', recording);
  if (disabled) {
    libaiModalAskBtn.textContent = '李白思考中...';
    return;
  }
  libaiModalAskBtn.textContent = recording ? '松开发送' : '按住提问';
}

function buildReciteSummary(result) {
  const passed = !!result?.passed_this_time;
  const progress = result?.progress || {};
  const successCount = Number(progress.success_count || 0);
  const required = Number(progress.required_success || 2);
  const similarity = Math.round(Number(result?.similarity || 0) * 100);
  const titleProgress = result?.title_progress || {};
  const upgraded = titleProgress.upgraded_now && titleProgress.current_title;
  const missingChars = Array.isArray(result?.mistakes?.missing_chars) ? result.mistakes.missing_chars : [];
  const extraChars = Array.isArray(result?.mistakes?.extra_chars) ? result.mistakes.extra_chars : [];
  const wrongChars = Array.isArray(result?.mistakes?.wrong_chars) ? result.mistakes.wrong_chars : [];
  const sentenceCoverages = Array.isArray(result?.sentence_coverages) ? result.sentence_coverages : [];

  const lowCoverageLines = sentenceCoverages
    .filter((item) => item && item.ok === false)
    .map((item) => `第${item.index}句（覆盖${Math.round(Number(item.coverage || 0) * 100)}%）：${item.line || ''}`);

  const detailParts = [];
  if (missingChars.length) detailParts.push(`漏字：${missingChars.join('、')}`);
  if (extraChars.length) detailParts.push(`多字：${extraChars.join('、')}`);
  if (wrongChars.length) {
    const wrongText = wrongChars
      .map((item) => `${item.target || '∅'}→${item.actual || '∅'}`)
      .join('；');
    detailParts.push(`错字：${wrongText}`);
  }
  if (lowCoverageLines.length) detailParts.push(`重点重背：${lowCoverageLines.join('；')}`);
  const allMistakeDetail = detailParts.length ? detailParts.join('。') : '';

  if (passed) {
    const collectHint = progress.collected_now ? '这首诗已经收集成功。' : `再成功 ${Math.max(required - successCount, 0)} 次就能收集。`;
    const titleHint = upgraded ? `你刚升级到${titleProgress.current_title}。` : '';
    return {
      panelTitle: '背诵通过',
      panelText: `相似度 ${similarity}% · 进度 ${successCount}/${required}。${collectHint}${titleHint}`,
      ttsText: `背得很好，这次通过了。当前进度是${successCount}次。${progress.collected_now ? '这一首已经完成收集。' : '再背一遍就更稳了。'}`
    };
  }

  const missHint = allMistakeDetail || '有几处句子顺序或字词还不够准确。';
  return {
    panelTitle: '再来一遍',
    panelText: `相似度 ${similarity}% · 进度 ${successCount}/${required}。${missHint}`,
    ttsText: `这次还差一点点，我已经把所有错漏位置写在下面了，我们对着它再来一遍。`
  };
}

/* ── Overview 渲染 ───────────────── */
function renderLibaiOverview() {
  const overview = LIBAI_STATE.overview;
  if (!overview) {
    if (libaiCurrentTitle) libaiCurrentTitle.textContent = '称号加载中...';
    if (libaiProgressText) libaiProgressText.textContent = '0 / 20';
    if (libaiProgressBar) libaiProgressBar.style.width = '0%';
    return;
  }
  const total = Number(overview.total_poems || 0);
  const collected = Number(overview.collected_count || 0);
  const nextTitleName = String(overview.next_title || '').trim();
  const phaseTargetByTitle = {
    '青铜诗人【李白】': 5,
    '白银诗人【李白】': 10,
    '黄金诗人【李白】': 15,
    '翰林诗人【李白】': 20
  };
  const mappedTarget = Number(phaseTargetByTitle[nextTitleName] || 0);
  const rawNextRequired = Number(overview.next_required || 0);
  const stageTarget = mappedTarget > 0 ? mappedTarget : (rawNextRequired > 0 ? rawNextRequired : total);
  const stageCurrent = stageTarget > 0 ? Math.min(collected, stageTarget) : 0;
  const percent = stageTarget > 0 ? Math.min(100, Math.round((stageCurrent / stageTarget) * 100)) : 0;
  const title = overview.current_title || `下一称号：${overview.next_title || '待解锁'}`;
  if (libaiCurrentTitle) libaiCurrentTitle.textContent = title;
  if (libaiProgressText) libaiProgressText.textContent = `${stageCurrent} / ${stageTarget || 0}`;
  if (libaiProgressBar) libaiProgressBar.style.width = `${percent}%`;
}

/* ── 卡片列表渲染 ────────────────── */
function renderLibaiPoems() {
  if (!libaiPoems) return;
  libaiPoems.innerHTML = '';
  if (!Array.isArray(LIBAI_STATE.poems) || LIBAI_STATE.poems.length === 0) {
    libaiPoems.innerHTML = '<div class="libai-detail-empty">诗集还没有加载出来。</div>';
    return;
  }
  LIBAI_STATE.poems.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'libai-poem-card' + (item.status === 'collected' ? ' status-collected' : '');
    card.innerHTML = `
      <div class="libai-card-title-row">
        <span class="libai-card-name">${escapeHtml(item.title || '')}</span>
      </div>
      <div class="libai-card-actions">
        <div class="libai-card-stars">${renderStars(item.difficulty || 1)}</div>
        <button class="libai-card-speaker" type="button" data-title="${escapeHtml(item.title || '')}" aria-label="朗读标题">🔊</button>
      </div>
    `;
    // 喇叭按钮 — TTS
    const speakerBtn = card.querySelector('.libai-card-speaker');
    speakerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playTitleTTS(item.title || '', speakerBtn, 'poem_title_tts');
    });
    // 整卡点击 — 打开弹窗
    card.addEventListener('click', () => openPoemModal(item.poem_id));
    libaiPoems.appendChild(card);
  });
}

/* ── 弹窗：打开 ─────────────────── */
async function openPoemModal(poemId) {
  if (!libaiPoemModal || !libaiModalBody) return;
  syncLibaiDebug('poem_detail_open', 'active', `打开诗详情：${poemId || ''}`);
  LIBAI_STATE.selectedPoemId = poemId;
  LIBAI_STATE.detail = null;
  currentPoemSentences = [];
  currentPoemLineExplanations = [];
  currentSelectedLineIndex = -1;
  reciteRecording = false;
  libaiAskRecording = false;
  libaiAskBusy = false;
  libaiAskStartPromise = null;
  setReciteButtonState({ recording: false, disabled: false });
  setLibaiAskButtonState({ recording: false, disabled: false });
  hideLineExplainCard();
  libaiModalBody.innerHTML = '<div class="libai-detail-empty">正在加载…</div>';
  if (libaiExplainPanel) { libaiExplainPanel.classList.add('hidden'); libaiExplainPanel.innerHTML = ''; }
  libaiPoemModal.classList.remove('hidden');

  try {
    const res = await fetch(`/api/poems/${encodeURIComponent(poemId)}?user_id=demo_child_001`);
    const data = await res.json();
    if (!res.ok) throw new Error(data?.error || 'poem_detail_failed');
    LIBAI_STATE.detail = data;
    syncLibaiDebug('poem_detail_open', 'success', `诗详情已加载：${data.title || poemId}`);

    const sentenceChunks = splitPinyinBySentence(data.pinyin_data);
    currentPoemSentences = sentenceChunks.map((chunk) => getSentenceTextFromPinyinChunk(chunk));

    const rawLineExplanations = Array.isArray(data.line_explanations) ? data.line_explanations : [];
    currentPoemLineExplanations = currentPoemSentences.map((line, idx) => {
      const item = rawLineExplanations[idx] || {};
      return item.meaning || `我写“${line}”这句，是想把当时眼前的画面和心里的感觉讲给你听。`;
    });

    let poemInnerHtml = '';
    if (sentenceChunks.length > 0) {
      const sentenceButtons = sentenceChunks.map((chunk, idx) => {
        const sentenceHtml = renderSentenceChunkHtml(chunk);
        const needBreak = idx < sentenceChunks.length - 1;
        return `<span class="libai-poem-sentence-inline" data-line-index="${idx}">${sentenceHtml}</span>${needBreak ? '<br>' : ''}`;
      });
      poemInnerHtml = sentenceButtons.join('');
    } else {
      const pinyinHtml = renderPinyinHtml(data.pinyin_data);
      const formattedPoem = formatPoemTwoSentencesPerLine(data.target_text || '');
      poemInnerHtml = pinyinHtml || escapeHtml(formattedPoem).replace(/\n/g, '<br>');
    }

    libaiModalBody.innerHTML = `
      <div class="libai-modal-head">
        <div class="libai-modal-title-wrap">
          <div class="libai-modal-title">${escapeHtml(data.title || '')}</div>
          <button class="libai-card-speaker libai-modal-speaker" type="button" aria-label="朗读整首诗">🔊</button>
        </div>
        <div class="libai-modal-meta-right">${escapeHtml(`${data.author || '李白'} · ${data.dynasty || '唐'}`)}</div>
      </div>
      <div class="libai-modal-poem">${poemInnerHtml}</div>
    `;

    const modalSpeakerBtn = libaiModalBody.querySelector('.libai-modal-speaker');
    if (modalSpeakerBtn) {
      modalSpeakerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playTitleTTS(buildPoemFullReadText(data), modalSpeakerBtn, 'poem_full_read_tts');
      });
    }

    const sentenceBtns = libaiModalBody.querySelectorAll('.libai-poem-sentence-inline');
    sentenceBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lineIndex = Number(btn.dataset.lineIndex || -1);
        if (Number.isNaN(lineIndex) || lineIndex < 0) return;
        currentSelectedLineIndex = lineIndex;

        sentenceBtns.forEach((node) => node.classList.remove('is-active'));
        btn.classList.add('is-active');

        const lineText = currentPoemSentences[lineIndex] || `第${lineIndex + 1}句`;
        const explainText = currentPoemLineExplanations[lineIndex] || '我来给你讲讲这句诗里的意思。';
        showLineExplainCard(`第${lineIndex + 1}句：${lineText}`, explainText, 'line');
        syncLibaiDebug('poem_line_select', 'active', `第${lineIndex + 1}句：${lineText}`);
        playLibaiTTS(lineText, 'poem_line_tts');
      });
    });

    // 讲解面板：只保留一段李白口吻叙述
    const narratorText = buildNarratorExplain(data);
    if (libaiExplainPanel) {
      libaiExplainPanel.innerHTML = `
        <p class="libai-narration-text">${escapeHtml(narratorText || '我来给你讲讲这首诗写下时的情景与心意。')}</p>
      `;
    }
  } catch (err) {
    console.error('Failed to load poem detail:', err);
    libaiModalBody.innerHTML = '<div class="libai-detail-empty">加载失败，请关闭重试。</div>';
    syncLibaiDebug('poem_detail_open', 'error', err?.message || '诗详情加载失败');
  }
}

/* ── 弹窗：关闭 ─────────────────── */
function closePoemModal() {
  syncLibaiDebug('poem_detail_close', 'success', '关闭诗详情');
  if (reciteRecording) {
    stopRecording().catch(() => {});
  }
  if (libaiAskRecording) {
    stopRecording().catch(() => {});
  }
  stopAllAiSpeech();
  reciteRecording = false;
  libaiAskRecording = false;
  libaiAskBusy = false;
  libaiAskStartPromise = null;
  currentSelectedLineIndex = -1;
  setReciteButtonState({ recording: false, disabled: false });
  setLibaiAskButtonState({ recording: false, disabled: false });
  hideLineExplainCard();
  if (libaiPoemModal) libaiPoemModal.classList.add('hidden');
  if (libaiExplainPanel) libaiExplainPanel.classList.add('hidden');
}

/* ── 加载诗集总览 ────────────────── */
async function loadLibaiDashboard(forceReload = false) {
  if (!isLibaiMode()) return;
  const seq = ++libaiLoadSeq;
  syncLibaiDebug('poem_dashboard_load', 'active', forceReload ? '刷新诗集数据中' : '加载诗集数据中');
  renderLibaiOverview();
  renderLibaiPoems();

  try {
    const [overviewRes, poemsRes] = await Promise.all([
      fetch('/api/poets/libai/overview?user_id=demo_child_001'),
      fetch('/api/poets/libai/poems?user_id=demo_child_001')
    ]);
    const overview = await overviewRes.json();
    const poemsPayload = await poemsRes.json();
    if (!overviewRes.ok) throw new Error(overview?.error || 'libai_overview_failed');
    if (!poemsRes.ok) throw new Error(poemsPayload?.error || 'libai_poems_failed');
    if (!isLibaiMode() || seq !== libaiLoadSeq) return;

    LIBAI_STATE.overview = overview;
    LIBAI_STATE.poems = Array.isArray(poemsPayload.items) ? poemsPayload.items : [];
    renderLibaiOverview();
    renderLibaiPoems();
    pushFlowStep('诗集加载完成', `共 ${LIBAI_STATE.poems.length} 首`, 'is-success');
    syncLibaiDebug('poem_dashboard_load', 'success', `诗集加载完成（${LIBAI_STATE.poems.length}首）`);
  } catch (err) {
    console.error('Failed to load libai dashboard:', err);
    if (!isLibaiMode() || seq !== libaiLoadSeq) return;
    pushFlowStep('诗集加载失败', err?.message || 'libai_load_failed', 'is-error');
    syncLibaiDebug('poem_dashboard_load', 'error', err?.message || '诗集加载失败');
  }
}

async function submitReciteAttempt(poemId, audioBlob) {
  const mimeType = audioBlob.type || activeMimeType || 'audio/webm';
  const extension = getAudioExtension(mimeType);
  const formData = new FormData();
  formData.append('audio', audioBlob, `recite.${extension}`);
  formData.append('user_id', 'demo_child_001');

  const res = await fetch(`/api/poems/${encodeURIComponent(poemId)}/recite-attempt`, {
    method: 'POST',
    body: formData
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error || 'recite_attempt_failed');
  }
  return data;
}

async function handleLibaiReciteClick() {
  const poemId = LIBAI_STATE.selectedPoemId;
  if (!poemId || reciteBusy) return;

  if (!reciteRecording) {
    reciteBusy = true;
    try {
      await startRecording();
      reciteRecording = true;
      setReciteButtonState({ recording: true, disabled: false });
      showLineExplainCard('背诵开始', '请完整背诵这首诗，背完后点“结束背诵”。', 'recite');
      pushFlowStep('进入背诵中', '请孩子开始背诵', 'is-active');
      syncLibaiDebug('poem_recite', 'active', '开始背诵录音');
    } catch (err) {
      console.error('Failed to start recite recording:', err);
      reciteRecording = false;
      setReciteButtonState({ recording: false, disabled: false });
      showLineExplainCard('无法开始背诵', err?.message || '录音启动失败，请再试一次。', 'recite');
      pushFlowStep('背诵启动失败', err?.message || 'recite_record_start_failed', 'is-error');
      syncLibaiDebug('poem_recite', 'error', err?.message || '背诵录音启动失败');
    } finally {
      reciteBusy = false;
    }
    return;
  }

  reciteBusy = true;
  setReciteButtonState({ recording: false, disabled: true });
  try {
    const audioBlob = await stopRecording();
    reciteRecording = false;

    if (!audioBlob || audioBlob.size === 0) {
      setReciteButtonState({ recording: false, disabled: false });
      showLineExplainCard('没有听清', '这次没有录到有效声音，我们再来一遍。', 'recite');
      pushFlowStep('背诵录音为空', '请重新背诵', 'is-error');
      syncLibaiDebug('poem_recite', 'error', '背诵录音为空');
      return;
    }

    pushFlowStep('提交背诵识别', `音频 ${audioBlob.size} bytes`, 'is-active');
    syncLibaiDebug('poem_recite_submit', 'active', `提交背诵音频（${audioBlob.size} bytes）`);
    const result = await submitReciteAttempt(poemId, audioBlob);
    const summary = buildReciteSummary(result);

    showLineExplainCard(summary.panelTitle, summary.panelText, 'recite');
    playLibaiTTS(summary.ttsText, 'poem_recite_feedback_tts');
    pushFlowStep('背诵识别完成', summary.panelText, result.passed_this_time ? 'is-success' : 'is-error');
    syncLibaiDebug('poem_recite_submit', result.passed_this_time ? 'success' : 'error', summary.panelText);

    if (LIBAI_STATE.detail && LIBAI_STATE.detail.poem_id === poemId) {
      LIBAI_STATE.detail.progress = result.progress || LIBAI_STATE.detail.progress;
    }
    await loadLibaiDashboard(true);
  } catch (err) {
    console.error('Recite attempt failed:', err);
    showLineExplainCard('背诵提交失败', err?.message || '背诵识别失败，请重试。', 'recite');
    pushFlowStep('背诵识别失败', err?.message || 'recite_attempt_failed', 'is-error');
    syncLibaiDebug('poem_recite_submit', 'error', err?.message || '背诵识别失败');
  } finally {
    reciteRecording = false;
    setReciteButtonState({ recording: false, disabled: false });
    reciteBusy = false;
  }
}

async function submitLibaiPoemAskAudio(poemId, audioBlob, selectedLineText, selectedLineExplain) {
  const mimeType = audioBlob.type || activeMimeType || 'audio/webm';
  const extension = getAudioExtension(mimeType);
  const formData = new FormData();
  formData.append('audio', audioBlob, `poem_ask.${extension}`);
  formData.append('user_id', 'demo_child_001');
  formData.append('selected_line_text', selectedLineText || '');
  formData.append('selected_line_explain', selectedLineExplain || '');

  const res = await fetch(`/api/poems/${encodeURIComponent(poemId)}/ask`, {
    method: 'POST',
    body: formData
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error || 'poem_ask_failed');
  }
  return data;
}

async function handleLibaiAskPressStart(e) {
  if (e) e.preventDefault();
  if (libaiAskBusy || libaiAskRecording || reciteRecording || reciteBusy) return;
  const detail = LIBAI_STATE.detail || {};
  const poemId = detail.poem_id || LIBAI_STATE.selectedPoemId;
  if (!poemId) return;

  libaiAskBusy = true;
  try {
    libaiAskStartPromise = startRecording();
    await libaiAskStartPromise;
    libaiAskRecording = true;
    setLibaiAskButtonState({ recording: true, disabled: false });
    pushFlowStep('开始诗内语音提问', '按住说话，松开发送', 'is-active');
    syncLibaiDebug('poem_ask_record', 'active', '开始诗内语音提问录音');
  } catch (err) {
    console.error('Poem ask recording start failed:', err);
    setLibaiAskButtonState({ recording: false, disabled: false });
    showLineExplainCard('无法开始提问', err?.message || '录音启动失败，请再试一次。', 'qa');
    pushFlowStep('诗内提问录音失败', err?.message || 'poem_ask_record_start_failed', 'is-error');
    syncLibaiDebug('poem_ask_record', 'error', err?.message || '提问录音启动失败');
  } finally {
    libaiAskStartPromise = null;
    libaiAskBusy = false;
  }
}

async function handleLibaiAskPressEnd(e) {
  if (e) e.preventDefault();
  if (libaiAskStartPromise) {
    try {
      await libaiAskStartPromise;
    } catch (_) {
      return;
    }
  }
  if (!libaiAskRecording || libaiAskBusy) return;

  const detail = LIBAI_STATE.detail || {};
  const poemId = detail.poem_id || LIBAI_STATE.selectedPoemId;
  if (!poemId) return;
  const selectedLineText = currentSelectedLineIndex >= 0 ? (currentPoemSentences[currentSelectedLineIndex] || '') : '';
  const selectedLineExplain = currentSelectedLineIndex >= 0 ? (currentPoemLineExplanations[currentSelectedLineIndex] || '') : '';

  libaiAskBusy = true;
  libaiAskRecording = false;
  setLibaiAskButtonState({ recording: false, disabled: true });

  try {
    const audioBlob = await stopRecording();
    if (!audioBlob || audioBlob.size === 0) {
      setLibaiAskButtonState({ recording: false, disabled: false });
      showLineExplainCard('没有听清问题', '我没有听到你的提问，我们再试一次。', 'qa');
      pushFlowStep('诗内提问录音为空', '请重新长按提问', 'is-error');
      syncLibaiDebug('poem_ask_submit', 'error', '提问录音为空');
      return;
    }

    pushFlowStep('提交诗内语音提问', `音频 ${audioBlob.size} bytes`, 'is-active');
    syncLibaiDebug('poem_ask_submit', 'active', `提交提问音频（${audioBlob.size} bytes）`);
    const data = await submitLibaiPoemAskAudio(poemId, audioBlob, selectedLineText, selectedLineExplain);

    const reply = String(data.reply || '').trim();
    const question = String(data.question || '').trim();
    const title = question ? `李白回答（你问：${question}）` : '李白回答';
    showLineExplainCard(title, reply || '我再想想，你可以换个问法。', 'qa');
    if (reply) {
      playLibaiTTS(reply, 'poem_ask_reply_tts');
    }
    pushFlowStep('诗内提问完成', reply.slice(0, 24) || '已返回回答', 'is-success');
    syncLibaiDebug('poem_ask_submit', 'success', reply.slice(0, 40) || '提问已完成');
  } catch (err) {
    console.error('Poem ask failed:', err);
    showLineExplainCard('提问失败', err?.message || '暂时没回答出来，请再试一次。', 'qa');
    pushFlowStep('诗内提问失败', err?.message || 'poem_ask_failed', 'is-error');
    syncLibaiDebug('poem_ask_submit', 'error', err?.message || '提问失败');
  } finally {
    libaiAskBusy = false;
    setLibaiAskButtonState({ recording: false, disabled: false });
  }
}

function initRolesCardUI() {
  roleTrack.innerHTML = '';
  roles.forEach((role, i) => {
    const card = document.createElement('div');
    card.className = 'role-card';
    
    const avatar = document.createElement('img');
    avatar.className = 'role-avatar';
    avatar.style.background = role.color;
    avatar.src = role.avatar;

    const name = document.createElement('div');
    name.className = 'role-name';
    name.textContent = role.name;

    card.appendChild(avatar);
    card.appendChild(name);
    
    card.style.opacity = '0';
    card.style.pointerEvents = 'none';
    roleTrack.appendChild(card);
  });
}

function renderRoleCarousel() {
  if (roleTrack.children.length === 0) {
    initRolesCardUI();
  }

  const cards = roleTrack.children;
  Array.from(cards).forEach((card, i) => {
    let dist = i - previewRoleIndex;
    const len = roles.length;
    if (dist > Math.floor(len / 2)) dist -= len;
    if (dist < -Math.floor(len / 2)) dist += len;

    const isActive = dist === 0;
    card.className = `role-card${isActive ? ' is-active' : ''}`;
    
    const offset = dist * 135;  
    const scale = isActive ? 1.08 : (Math.abs(dist) === 1 ? 0.78 : 0.5);
    const opacity = isActive ? 1 : (Math.abs(dist) === 1 ? 0.45 : 0);
    const zIndex = isActive ? 3 : (Math.abs(dist) === 1 ? 2 : 1);
    
    card.style.transform = `translate(calc(-50% + ${offset}px), -50%) scale(${scale})`;
    card.style.opacity = opacity;
    card.style.zIndex = zIndex;
    card.style.pointerEvents = isActive ? 'auto' : 'none';
  });

  roleDots.innerHTML = '';
  roles.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `role-dot${i === previewRoleIndex ? ' is-active' : ''}`;
    roleDots.appendChild(dot);
  });

  const previewRole = roles[previewRoleIndex];
  roleApplyBtn.textContent = appliedRoleIndex === previewRoleIndex
    ? `✓ 当前已是 ${previewRole.name}`
    : `✓ 切换到 ${previewRole.name}`;
}

function shiftRole(direction) {
  previewRoleIndex = wrapRoleIndex(previewRoleIndex + direction);
  renderRoleCarousel();
}

function setRolePanelOpen(open) {
  isRolePanelOpen = open;
  rolePage.classList.toggle('hidden', !open);
}

function applyRole() {
  unlockAudioPlayback();
  appliedRoleIndex = previewRoleIndex;
  const role = roles[appliedRoleIndex];
  const greeting = role.greeting || '你好，有什么能帮你的？';
  const isLibai = role.id === LIBAI_MODE_ROLE_ID;
  roleTriggerAvatar.innerHTML = `<img src="${role.avatar}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" />`;
  roleTriggerAvatar.style.background = role.color;
  
  const videoEl = document.getElementById('panghu-video');
  const imgEl = document.getElementById('panghu-img');
  
  if (role.isVideo) {
    if (videoEl) {
      videoEl.src = role.center;
      videoEl.classList.remove('hidden');
    }
    if (imgEl) imgEl.classList.add('hidden');
    panghu = videoEl;
  } else {
    if (imgEl) {
      imgEl.src = role.center;
      imgEl.classList.remove('hidden');
    }
    if (videoEl) videoEl.classList.add('hidden');
    panghu = imgEl;
  }

  setLibaiEntryVisible(isLibai);
  setLibaiPanelOpen(false);
  
  // Re-apply current state CSS to the new panghu element
  setState(STATE.IDLE);
  setState(STATE.RESPONDING, greeting);
  resetFlowLog('切换角色', role.name);
  pushFlowStep('展示欢迎语', greeting, 'is-success');
  speaker.pause();
  speaker.currentTime = 0;
  requestReplyAudio(greeting);

  loadConversationHistory();
  renderQaEntryAvatar();

  renderRoleCarousel();
  setRolePanelOpen(false);
}

function setState(newState, textContent = "") {
  const previousState = currentState;
  currentState = newState;

  if (newState !== previousState) {
    panghu.className = 'character-video';
    waves.classList.add('hidden');
    micIcon.classList.add('hidden');
    loading.classList.add('hidden');
    talkBtn.classList.remove('active');
    micSvg.classList.remove('hidden');
    soundwaves.classList.add('hidden');
  }

  if (newState === STATE.IDLE || newState === STATE.LISTENING) {
    if (newState !== previousState) {
      cardsPanel.classList.add('hidden');
      cardsPanel.innerHTML = '';
      bubble.classList.add('hidden');
    }
  } else if (newState === STATE.THINKING) {
    if (newState !== previousState) {
      cardsPanel.classList.add('hidden');
      cardsPanel.innerHTML = '';
    }
  }

  switch(newState) {
    case STATE.IDLE:
      break;

    case STATE.LISTENING:
      talkBtn.classList.add('active');
      micSvg.classList.add('hidden');
      soundwaves.classList.remove('hidden');
      waves.classList.remove('hidden');
      micIcon.classList.remove('hidden');
      break;

    case STATE.THINKING:
      panghu.classList.add('thinking');
      bubble.classList.remove('hidden');
      bubble.innerHTML = '<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>';
      if (previousState !== STATE.THINKING && previousState !== STATE.RESPONDING) {
        bubble.style.animation = 'none';
        bubble.offsetHeight;
        bubble.style.animation = 'bubble-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
      }
      break;

    case STATE.RESPONDING:
      if (textContent) {
        bubble.classList.remove('hidden');
        bubble.innerText = textContent;
        if (previousState !== STATE.THINKING && previousState !== STATE.RESPONDING) {
          bubble.style.animation = 'none';
          bubble.offsetHeight;
          bubble.style.animation = 'bubble-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
        }
      } else if (previousState !== STATE.THINKING) {
        bubble.classList.add('hidden');
      }
      break;
  }

  if (isLibaiMode()) {
    syncLibaiEntryDockState();
  }
}

function renderCards(cards = []) {
  cardsPanel.innerHTML = '';

  if (!cards.length) {
    cardsPanel.classList.add('hidden');
    return;
  }

  cards.forEach((card) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'action-card';

    const titleEl = document.createElement('div');
    titleEl.className = 'action-card-title';
    titleEl.textContent = card.title || '';
    cardEl.appendChild(titleEl);

    if (card.subtitle) {
      const subtitleEl = document.createElement('div');
      subtitleEl.className = 'action-card-subtitle';
      subtitleEl.textContent = card.subtitle;
      cardEl.appendChild(subtitleEl);
    }

    if (card.meta) {
      const metaEl = document.createElement('div');
      metaEl.className = 'action-card-meta';
      metaEl.textContent = card.meta;
      cardEl.appendChild(metaEl);
    }

    if (card.button_label && card.action) {
      const buttonEl = document.createElement('button');
      buttonEl.className = 'action-card-btn';
      buttonEl.type = 'button';
      buttonEl.textContent = card.button_label;
      buttonEl.addEventListener('click', () => {
        runAction(card.action);
      });
      cardEl.appendChild(buttonEl);
    }

    cardsPanel.appendChild(cardEl);
  });

  cardsPanel.classList.remove('hidden');
}

function createChatPayload(text) {
  return {
    transcript: text,
    reply: '',
    intent: 'chat',
    action: { type: 'chat', status: 'streaming' },
    cards: [],
    policy_result: null,
    state: null
  };
}

function applyStreamingText(replyText) {
  setState(STATE.RESPONDING, replyText);
}

function startTypewriter() {
  stopTypewriter();
  _typewriterQueue = '';
  _typewriterRendered = '';
  _typewriterTimer = setInterval(() => {
    if (_typewriterQueue.length === 0) return;
    _typewriterRendered += _typewriterQueue[0];
    _typewriterQueue = _typewriterQueue.slice(1);
    applyStreamingText(_typewriterRendered);
  }, 30);
}

function feedTypewriter(delta) {
  _typewriterQueue += delta;
}

function flushTypewriter() {
  if (_typewriterTimer) {
    clearInterval(_typewriterTimer);
    _typewriterTimer = null;
  }
  if (_typewriterQueue.length > 0) {
    _typewriterRendered += _typewriterQueue;
    _typewriterQueue = '';
    applyStreamingText(_typewriterRendered);
  }
}

function stopTypewriter() {
  if (_typewriterTimer) {
    clearInterval(_typewriterTimer);
    _typewriterTimer = null;
  }
  _typewriterQueue = '';
  _typewriterRendered = '';
}

function applyResponsePayload(data) {
  const replyText = data.reply || "我不知道该说些什么了...";
  const isFileUnderstand = data?.intent === 'file_understand' || data?.action?.type === 'file_understand';
  const transcriptText = (typeof data?.transcript === 'string' && data.transcript.trim())
    ? data.transcript.trim()
    : (isFileUnderstand ? '（未返回转写文本）' : (data?.transcript || '等待输入'));
  pushFlowStep('收到模型回复', replyText.slice(0, 36), 'is-success');
  setState(STATE.RESPONDING, replyText);
  renderCards(data.cards || []);
  updateDebugPanel({ ...data, transcript: transcriptText }, transcriptText);

  if (data.audio) {
    const type = data.audio_type || "mp3";
    lastReplyAudioSrc = `data:audio/${type};base64,${data.audio}`;
    stopAllAiSpeech();
    speaker.src = lastReplyAudioSrc;
    speaker.play()
      .then(() => pushFlowStep('开始播放语音', getActiveRole().name, 'is-success'))
      .catch((err) => {
        console.error("Audio playback restricted:", err);
        pushFlowStep('语音播放失败', err?.message || '浏览器拦截了播放', 'is-error');
      });
  } else {
    lastReplyAudioSrc = '';
    if (replyText) {
      requestReplyAudio(replyText);
    }
  }
  loadConversationHistory();
}

async function runAction(action) {
  setState(STATE.THINKING);
  resetFlowLog('执行动作', action?.type || 'unknown');
  updateDebugPanel({
    transcript: '点击卡片触发',
    intent: 'action_click',
    policy_result: null,
    action,
    cards: [],
    state: null
  });
  try {
    const res = await fetch('/api/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, role_id: getActiveRole().id })
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'action_failed');
    }

    pushFlowStep('动作执行完成', data?.action?.type || action?.type || 'unknown', 'is-success');
    applyResponsePayload(data);
  } catch (err) {
    console.error("Action backend error:", err);
    pushFlowStep('动作执行失败', err?.message || 'action_failed', 'is-error');
    setState(STATE.RESPONDING, "这个操作暂时没成功，你再试一次吧。");
  }
}

function getSupportedAudioMimeType() {
  const candidates = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/mp4',
    'audio/ogg;codecs=opus'
  ];

  if (!window.MediaRecorder) return '';
  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) || '';
}

async function ensureMediaRecorder() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error('browser_unsupported');
  }

  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    return mediaRecorder;
  }

  if (!mediaStream) {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: 1,
        noiseSuppression: true,
        echoCancellation: true
      }
    });
  }

  activeMimeType = getSupportedAudioMimeType();
  mediaRecorder = activeMimeType
    ? new MediaRecorder(mediaStream, { mimeType: activeMimeType })
    : new MediaRecorder(mediaStream);

  audioChunks = [];
  mediaRecorder.addEventListener('dataavailable', (event) => {
    if (event.data && event.data.size > 0) {
      audioChunks.push(event.data);
    }
  });

  mediaRecorder.addEventListener('start', () => {
    audioChunks = [];
  });

  return mediaRecorder;
}

async function startRecording() {
  const recorder = await ensureMediaRecorder();
  if (recorder.state === 'recording') return;
  audioChunks = [];
  recorder.start();
  pushFlowStep('开始录音', getActiveRole().name, 'is-active');
}

async function stopRecording() {
  if (!mediaRecorder || mediaRecorder.state !== 'recording') {
    releaseMediaStream();
    return null;
  }

  return new Promise((resolve, reject) => {
    const mimeType = activeMimeType || mediaRecorder.mimeType || 'audio/webm';

    const handleStop = () => {
      mediaRecorder.removeEventListener('error', handleError);
      const blob = audioChunks.length > 0 ? new Blob(audioChunks, { type: mimeType }) : null;
      audioChunks = [];
      releaseMediaStream();
      pushFlowStep('录音结束', blob ? `大小 ${blob.size} bytes` : '没有采集到音频', blob ? 'is-success' : 'is-error');
      resolve(blob);
    };

    const handleError = (event) => {
      mediaRecorder.removeEventListener('stop', handleStop);
      releaseMediaStream();
      pushFlowStep('录音报错', event?.error?.message || 'recording_failed', 'is-error');
      reject(event.error || new Error('recording_failed'));
    };

    mediaRecorder.addEventListener('stop', handleStop, { once: true });
    mediaRecorder.addEventListener('error', handleError, { once: true });
    mediaRecorder.stop();
  });
}

function getAudioExtension(mimeType) {
  if (mimeType.includes('mp4')) return 'm4a';
  if (mimeType.includes('ogg')) return 'ogg';
  return 'webm';
}

async function processVoiceAndFetch(audioBlob) {
  if (currentState !== STATE.THINKING) return;

  if (!audioBlob || audioBlob.size === 0) {
    pushFlowStep('录音内容为空', '没有听到有效语音', 'is-error');
    setState(STATE.RESPONDING, "抱歉，我没有听清，长按话筒再说一遍吧~");
    return;
  }

  const mimeType = audioBlob.type || activeMimeType || 'audio/webm';
  const extension = getAudioExtension(mimeType);
  const formData = new FormData();
  formData.append('file', audioBlob, `speech.${extension}`);
  formData.append('role_id', getActiveRole().id);
  formData.append('message', '');

  try {
    pushFlowStep('上传录音文件', `${extension} · ${audioBlob.size} bytes`, 'is-active');
    updateDebugPanel({
      transcript: '录音已上传，按文件理解流程处理',
      intent: 'processing',
      policy_result: null,
      action: { type: 'file_understand' },
      cards: [],
      state: null
    });

    const res = await fetch('/api/file-understand', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'file_understand_failed');
    }

    const transcriptText = (typeof data?.transcript === 'string' && data.transcript.trim())
      ? data.transcript.trim()
      : '（未返回转写文本）';
    pushFlowStep('文件转写完成', transcriptText, 'is-success');
    updateDebugPanel({ ...data, transcript: transcriptText }, transcriptText);
    applyResponsePayload(data);
  } catch (err) {
    console.error("Voice backend error:", err);
    pushFlowStep('文件理解链路失败', err?.message || 'file_understand_failed', 'is-error');
    setState(STATE.RESPONDING, "录音文件处理出了点问题，你再试一次吧。");
  }
}

async function onTouchStart(e) {
  if (e) e.preventDefault();

  unlockAudioPlayback();

  if (currentState !== STATE.IDLE && currentState !== STATE.RESPONDING) {
    return;
  }

  setState(STATE.LISTENING);
  resetFlowLog('准备录音', getActiveRole().name);

  try {
    recordingStartPromise = startRecording();
    await recordingStartPromise;
  } catch (err) {
    console.error("Failed to start recording:", err);
    releaseMediaStream();
    const message = err && err.name === 'NotAllowedError'
      ? "需要先允许麦克风权限，我才能听见你哦。"
      : "当前浏览器不支持录音，建议换 Chrome 再试。";
    pushFlowStep('录音启动失败', err?.message || message, 'is-error');
    setState(STATE.RESPONDING, message);
  } finally {
    recordingStartPromise = null;
  }
}

async function onTouchEnd(e) {
  if (e) e.preventDefault();

  if (recordingStartPromise) {
    try {
      await recordingStartPromise;
    } catch (_) {
      return;
    }
  }

  if (currentState !== STATE.LISTENING) {
    return;
  }

  setState(STATE.THINKING);
  pushFlowStep('开始处理语音', '等待后端返回', 'is-active');

  try {
    const audioBlob = await stopRecording();
    await processVoiceAndFetch(audioBlob);
  } catch (err) {
    console.error("Failed to stop recording:", err);
    releaseMediaStream();
    pushFlowStep('结束录音失败', err?.message || 'stop_recording_failed', 'is-error');
    setState(STATE.RESPONDING, "录音结束时出了点问题，请再试一次吧。");
  }
}

talkBtn.addEventListener('touchstart', onTouchStart, { passive: false });
talkBtn.addEventListener('touchend', onTouchEnd);

talkBtn.addEventListener('mousedown', onTouchStart);
window.addEventListener('mouseup', onTouchEnd);
talkBtn.addEventListener('mouseleave', (e) => {
  if (e.buttons === 1 && currentState === STATE.LISTENING) {
    onTouchEnd(e);
  }
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !e.repeat && (currentState === STATE.IDLE || currentState === STATE.RESPONDING)) {
    onTouchStart(e);
  }
});

window.addEventListener('keyup', (e) => {
  if (e.code === 'Space' && currentState === STATE.LISTENING) {
    onTouchEnd(e);
  }
});

bubble.addEventListener('click', () => {
  if (!lastReplyAudioSrc) return;
  stopAllAiSpeech();
  if (speaker.src !== lastReplyAudioSrc) {
    speaker.src = lastReplyAudioSrc;
  }
  speaker.play().catch((err) => console.error("Replay failed:", err));
});

let roleWheelTimeout = null;

rolePage.addEventListener('wheel', (event) => {
  event.preventDefault();
  if (roleWheelTimeout) return;
  const delta = event.deltaY !== 0 ? event.deltaY : event.deltaX;
  if (Math.abs(delta) > 10) {
    shiftRole(delta > 0 ? 1 : -1);
    roleWheelTimeout = setTimeout(() => { roleWheelTimeout = null; }, 350);
  }
}, { passive: false });

rolePage.addEventListener('touchstart', (event) => {
  roleTouchStartX = event.touches[0].clientX;
}, { passive: true });

rolePage.addEventListener('touchend', (event) => {
  const deltaX = event.changedTouches[0].clientX - roleTouchStartX;
  if (Math.abs(deltaX) < 30) return;
  shiftRole(deltaX < 0 ? 1 : -1);
});

rolePage.addEventListener('mousedown', (event) => {
  roleTouchStartX = event.clientX;
});

rolePage.addEventListener('mouseup', (event) => {
  const deltaX = event.clientX - roleTouchStartX;
  if (Math.abs(deltaX) < 30) return;
  shiftRole(deltaX < 0 ? 1 : -1);
});

roleApplyBtn.addEventListener('click', applyRole);
roleTrigger.addEventListener('click', () => {
  previewRoleIndex = appliedRoleIndex;
  renderRoleCarousel();
  setRolePanelOpen(!isRolePanelOpen);
});
if (enterQaBtn) {
  enterQaBtn.addEventListener('click', () => {
    setFeatureGatewayVisible(false);
    bootstrapQaIfNeeded();
  });
}
if (enterPetBtn) {
  enterPetBtn.addEventListener('click', () => {
    setFeatureGatewayVisible(false);
    setPetPageOpen(true);
  });
}
if (qaHomeBackBtn) {
  qaHomeBackBtn.addEventListener('click', () => {
    setFeatureGatewayVisible(true);
  });
}
if (petPageBackBtn) {
  petPageBackBtn.addEventListener('click', () => {
    setFeatureGatewayVisible(true);
  });
}
if (petPlayBtn) {
  petPlayBtn.addEventListener('click', () => {
    setPetPlayMode(true);
    showPetReaction(pickRandom(PET_REACTIONS.playStart));
  });
}
if (petFeedBtn) {
  petFeedBtn.addEventListener('click', () => {
    setPetBackpackOpen(!PET_STATE.backpackOpen);
    if (PET_STATE.backpackOpen) {
      showPetReaction(pickRandom(PET_REACTIONS.feedOpen));
    }
  });
}
if (petPlayBackBtn) {
  petPlayBackBtn.addEventListener('click', () => {
    setPetPlayMode(false);
    showPetReaction('先休息一下，待会再玩！');
  });
}
if (petPlayMicBtn) {
  petPlayMicBtn.addEventListener('click', () => {
    if (PET_STATE.isTalking) {
      stopPetTalking();
      showPetReaction(pickRandom(PET_REACTIONS.chatStop));
      return;
    }
    startPetTalking();
    bumpPetCharacter();
    showPetReaction(pickRandom(PET_REACTIONS.chatStart));
  });
}
if (petCharacterBtn) {
  petCharacterBtn.addEventListener('click', () => {
    bumpPetCharacter();
    if (PET_STATE.inPlayMode) {
      showPetReaction(pickRandom(PET_REACTIONS.pokePlay));
    } else {
      showPetReaction(pickRandom(PET_REACTIONS.pokeIdle));
    }
  });
}
if (petBackpackHandle) {
  petBackpackHandle.addEventListener('click', () => {
    setPetBackpackOpen(false);
  });
}

if (libaiEntryBtn) {
  libaiEntryBtn.addEventListener('pointerdown', (e) => {
    libaiEntryTouchStartX = e.clientX;
  });
  libaiEntryBtn.addEventListener('pointerup', (e) => {
    if (libaiEntryTouchStartX == null) return;
    const deltaX = e.clientX - libaiEntryTouchStartX;
    libaiEntryTouchStartX = null;
    if (!libaiEntryDocked && deltaX > 22) {
      setLibaiEntryDocked(true);
      return;
    }
  });
  libaiEntryBtn.addEventListener('pointercancel', () => {
    libaiEntryTouchStartX = null;
  });
  libaiEntryBtn.addEventListener('click', () => {
    if (!isLibaiMode()) return;
    if (libaiEntryDocked) {
      setLibaiEntryDocked(false);
      syncLibaiDebug('poem_entry_docked_expand', 'success', '展开诗集入口');
      return;
    }
    setLibaiPanelOpen(true);
    resetFlowLog('打开李白诗集', '开始拉取诗集数据');
    syncLibaiDebug('poem_panel_open', 'active', '打开李白诗集页面');
    loadLibaiDashboard(true);
  });
}
if (libaiBackBtn) {
  libaiBackBtn.addEventListener('click', () => {
    setLibaiPanelOpen(false);
    pushFlowStep('关闭李白诗集', '回到李白主页', 'is-success');
    syncLibaiDebug('poem_panel_close', 'success', '关闭李白诗集页面');
  });
}
if (libaiRefreshBtn) {
  libaiRefreshBtn.addEventListener('click', () => {
    if (!isLibaiMode()) return;
    pushFlowStep('手动刷新诗集', '重新拉取李白数据', 'is-active');
    syncLibaiDebug('poem_dashboard_refresh', 'active', '手动刷新诗集');
    loadLibaiDashboard(true);
  });
}
if (libaiModalClose) {
  libaiModalClose.addEventListener('click', () => {
    syncLibaiDebug('poem_detail_close', 'success', '点击关闭诗详情');
    closePoemModal();
  });
}
if (libaiPoemModal) {
  libaiPoemModal.addEventListener('click', (e) => {
    if (e.target === libaiPoemModal) {
      syncLibaiDebug('poem_detail_close', 'success', '点击遮罩关闭诗详情');
      closePoemModal();
    }
  });
}
if (libaiModalAskBtn) {
  libaiModalAskBtn.addEventListener('pointerdown', (e) => {
    if (typeof libaiModalAskBtn.setPointerCapture === 'function') {
      try { libaiModalAskBtn.setPointerCapture(e.pointerId); } catch (_) {}
    }
    handleLibaiAskPressStart(e);
  });
  libaiModalAskBtn.addEventListener('pointerup', handleLibaiAskPressEnd);
  libaiModalAskBtn.addEventListener('pointercancel', handleLibaiAskPressEnd);
}
if (libaiLineExplain) {
  libaiLineExplain.addEventListener('click', () => {
    const readText = String(libaiLineExplain.dataset.readText || '').trim();
    if (!readText) return;
    syncLibaiDebug('poem_line_explain_tts', 'active', `朗读单句讲解：${readText.slice(0, 28)}`);
    playLibaiTTS(readText, 'poem_line_explain_tts');
  });
}
if (libaiExplainBtn) {
  libaiExplainBtn.addEventListener('click', () => {
    if (!libaiExplainPanel) return;
    const willShow = libaiExplainPanel.classList.contains('hidden');
    libaiExplainPanel.classList.toggle('hidden');
    syncLibaiDebug('poem_narration_toggle', 'active', willShow ? '展开整首讲解' : '收起整首讲解');
    if (willShow) {
      const narration = buildNarratorExplain(LIBAI_STATE.detail || {});
      if (narration) {
        playLibaiTTS(narration, 'poem_narration_tts');
      }
    }
  });
}
if (libaiReciteBtn) {
  libaiReciteBtn.addEventListener('click', handleLibaiReciteClick);
}
textToggleBtn.addEventListener('click', () => {
  textInputPanel.classList.add('is-active');
  setTimeout(() => chatInput.focus({ preventScroll: true }), 50);
});

chatCloseBtn.addEventListener('click', () => {
  textInputPanel.classList.remove('is-active');
  chatInput.value = '';
});

async function sendTextMessage(text) {
  if (!text) return;
  
  textInputPanel.classList.remove('is-active');
  chatInput.value = '';
  
  setState(STATE.THINKING);
  resetFlowLog('发送文字消息', `${getActiveRole().name} · ${text.slice(0, 24)}`);
  updateDebugPanel(createChatPayload(text), text);

  try {
    pushFlowStep('建立流式连接', '等待第一段文字', 'is-active');
    const res = await fetch('/api/chat-stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text, role_id: getActiveRole().id })
    });

    if (!res.ok || !res.body) {
      throw new Error('chat_stream_failed');
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';
    let streamingReply = '';
    let finalPayload = null;

    setState(STATE.RESPONDING, '');
    startTypewriter();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const events = buffer.split('\n\n');
      buffer = events.pop() || '';

      for (const rawEvent of events) {
        const lines = rawEvent.split('\n');
        let eventName = 'message';
        let dataText = '';

        for (const line of lines) {
          if (line.startsWith('event:')) {
            eventName = line.slice(6).trim();
          } else if (line.startsWith('data:')) {
            dataText += line.slice(5).trim();
          }
        }

        if (!dataText) continue;
        const payload = JSON.parse(dataText);

        if (eventName === 'start') {
          pushFlowStep('开始流式输出', getActiveRole().name, 'is-success');
          updateDebugPanel({ ...createChatPayload(text), ...payload }, text);
          continue;
        }

        if (eventName === 'delta') {
          streamingReply += payload.delta || '';
          feedTypewriter(payload.delta || '');
          continue;
        }

        if (eventName === 'done') {
          flushTypewriter();
          finalPayload = {
            transcript: text,
            ...payload
          };
          pushFlowStep('文字流式完成', '整段回复已生成', 'is-success');
          break;
        }

        if (eventName === 'error') {
          throw new Error(payload.error || 'chat_stream_failed');
        }
      }
    }

    if (!finalPayload) {
      throw new Error('chat_stream_incomplete');
    }

    finalPayload.reply = finalPayload.reply || streamingReply;
    applyResponsePayload(finalPayload);
  } catch (err) {
    console.error("Text chat backend error:", err);
    pushFlowStep('文字请求失败', err?.message || 'chat_failed', 'is-error');
    setState(STATE.RESPONDING, "对话出了点问题，再试一次吧。");
  }
}

async function sendMediaFile(file) {
  if (!file) return;

  const mimeType = file.type || '';
  if (!isSupportedMediaFile(file)) {
    pushFlowStep('文件类型不支持', '仅支持音频/视频', 'is-error');
    setState(STATE.RESPONDING, "我现在只支持上传音频或视频文件。");
    return;
  }

  setState(STATE.THINKING);
  resetFlowLog('上传文件理解', `${file.name} · ${(file.size / 1024 / 1024).toFixed(2)}MB`);
  updateDebugPanel({
    transcript: `上传文件：${file.name}`,
    action: { type: 'file_understand', status: 'processing' },
    cards: [],
    state: null
  });

  try {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('role_id', getActiveRole().id);
    formData.append('message', chatInput.value.trim());

    pushFlowStep('发送文件到后端', mimeType || 'unknown', 'is-active');
    const res = await fetch('/api/file-understand', {
      method: 'POST',
      body: formData
    });
    let data = null;
    try {
      data = await res.json();
    } catch (_) {
      data = null;
    }

    if (!res.ok) {
      const message = data?.error || `file_understand_failed_${res.status}`;
      throw new Error(message);
    }

    const transcriptText = (typeof data?.transcript === 'string' && data.transcript.trim())
      ? data.transcript.trim()
      : '（未返回转写文本）';
    pushFlowStep('文件理解完成', file.name, 'is-success');
    updateDebugPanel({ ...data, transcript: transcriptText }, transcriptText);
    applyResponsePayload(data);
  } catch (err) {
    console.error("File understand backend error:", err);
    const reason = err?.message || 'file_understand_failed';
    pushFlowStep('文件理解失败', reason, 'is-error');
    if (String(reason).includes('too large')) {
      setState(STATE.RESPONDING, "文件太大了，超过后端上传上限。你可以先压缩后再试。");
    } else {
      setState(STATE.RESPONDING, `文件处理失败：${reason}`);
    }
  } finally {
    chatFileInput.value = '';
  }
}

function isSupportedMediaFile(file) {
  if (!file) return false;
  const mimeType = (file.type || '').toLowerCase();
  if (mimeType.startsWith('audio/') || mimeType.startsWith('video/')) return true;

  const name = (file.name || '').toLowerCase();
  return (
    name.endsWith('.wav') || name.endsWith('.mp3') || name.endsWith('.m4a') ||
    name.endsWith('.aac') || name.endsWith('.ogg') || name.endsWith('.flac') ||
    name.endsWith('.webm') || name.endsWith('.mp4') || name.endsWith('.mov') ||
    name.endsWith('.mkv') || name.endsWith('.avi')
  );
}

function setDragHintVisible(visible) {
  if (!fileDropHint) return;
  fileDropHint.classList.toggle('hidden', !visible);
}

function isFileDragEvent(event) {
  const types = event?.dataTransfer?.types;
  if (!types) return false;
  return Array.from(types).includes('Files');
}

async function clearMediaCacheOnPageLoad() {
  try {
    await fetch('/api/session/clear-media', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clear_all: true })
    });
    pushFlowStep('已清空文件转写缓存', '页面刷新后自动执行', 'is-success');
  } catch (err) {
    console.error("Failed to clear media cache:", err);
    pushFlowStep('清理文件缓存失败', err?.message || 'clear_media_cache_failed', 'is-error');
  }
}

chatSendBtn.addEventListener('click', () => {
  sendTextMessage(chatInput.value.trim());
});

chatFileBtn.addEventListener('click', () => {
  chatFileInput.click();
});

chatFileInput.addEventListener('change', () => {
  const file = chatFileInput.files && chatFileInput.files[0];
  if (!file) return;
  sendMediaFile(file);
});

document.addEventListener('dragover', (event) => {
  if (!isFileDragEvent(event)) return;
  event.preventDefault();
});

document.addEventListener('drop', (event) => {
  if (!isFileDragEvent(event)) return;
  event.preventDefault();
});

if (screenEl) {
  screenEl.addEventListener('dragenter', (event) => {
    if (!isFileDragEvent(event)) return;
    event.preventDefault();
    dragCounter += 1;
    setDragHintVisible(true);
  });

  screenEl.addEventListener('dragover', (event) => {
    if (!isFileDragEvent(event)) return;
    event.preventDefault();
  });

  screenEl.addEventListener('dragleave', (event) => {
    if (!isFileDragEvent(event)) return;
    event.preventDefault();
    dragCounter = Math.max(0, dragCounter - 1);
    if (dragCounter === 0) {
      setDragHintVisible(false);
    }
  });

  screenEl.addEventListener('drop', (event) => {
    if (!isFileDragEvent(event)) return;
    event.preventDefault();
    dragCounter = 0;
    setDragHintVisible(false);
    const files = event.dataTransfer?.files;
    if (!files || files.length === 0) return;
    sendMediaFile(files[0]);
  });
}

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendTextMessage(chatInput.value.trim());
  }
});

window.addEventListener('pagehide', releaseMediaStream);
document.addEventListener('visibilitychange', () => {
  if (document.hidden && (!mediaRecorder || mediaRecorder.state !== 'recording')) {
    releaseMediaStream();
  }
});

initUiScaleControls();
renderQaEntryAvatar();
renderPetPanel();
if (isEmbedMode) {
  setFeatureGatewayVisible(true);
  fitEmbedScreen();
} else {
  setFeatureGatewayVisible(true);
}

window.addEventListener('resize', fitEmbedScreen);
