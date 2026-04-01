const lockClock = document.getElementById("lockClock");
const lockDate = document.getElementById("lockDate");
const lockTrackTitle = document.getElementById("lockTrackTitle");
const lockTrackMeta = document.getElementById("lockTrackMeta");
const lockSwipeZone = document.getElementById("lockSwipeZone");
const lockState = document.getElementById("lockState");
const enterLockBtn = document.getElementById("enterLockBtn");

const emergencyLockBtn = document.getElementById("emergencyLockBtn");
const settingsLockBtn = document.getElementById("settingsLockBtn");
const babyInfoEntry = document.getElementById("babyInfoEntry");

const lockNoticeModal = document.getElementById("lockNoticeModal");
const lockNoticeTitle = document.getElementById("lockNoticeTitle");
const lockNoticeText = document.getElementById("lockNoticeText");
const lockNoticeConfirmBtn = document.getElementById("lockNoticeConfirmBtn");
const unlockGuideModal = document.getElementById("unlockGuideModal");
const unlockGuideConfirmBtn = document.getElementById("unlockGuideConfirmBtn");

const lockHome = document.getElementById("lockHome");
const gesturePanel = document.getElementById("gesturePanel");
const gestureBackBtn = document.getElementById("gestureBackBtn");
const gestureStatus = document.getElementById("gestureStatus");
const gestureGridWrap = document.getElementById("gestureGridWrap");
const gestureGrid = document.getElementById("gestureGrid");
const gestureLines = document.getElementById("gestureLines");
const gestureDots = [...document.querySelectorAll(".gesture-dot")];

const emergencyPage = document.getElementById("emergencyPage");
const settingsPage = document.getElementById("settingsPage");
const babyInfoPage = document.getElementById("babyInfoPage");
const serviceBackButtons = [...document.querySelectorAll("[data-service-back]")];

const trackInfo = {
  title: "Disney Children's Favorites Songs Vol. 1",
  lang: "英语",
  lesson: "第 1 节",
  duration: "03:45",
};

const unlockPattern = ["1", "2", "3", "6"];
let swipeStartY = null;
let isDrawingGesture = false;
let gesturePath = [];
let longPressTimer = null;
let longPressTriggered = false;

function updateLockScreenInfo() {
  const now = new Date();
  const weekLabels = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  lockClock.textContent = `${hour}:${minute}`;
  lockDate.textContent = `${month}/${day} ${weekLabels[now.getDay()]}`;
  lockTrackTitle.textContent = trackInfo.title;
  lockTrackMeta.textContent = `${trackInfo.lang} · ${trackInfo.lesson} · ${trackInfo.duration}`;
}

function showLockNotice(title, text) {
  lockNoticeTitle.textContent = title;
  lockNoticeText.textContent = text;
  lockNoticeModal.hidden = false;
}

function hideLockNotice() {
  lockNoticeModal.hidden = true;
}

function showSection(name) {
  lockHome.hidden = name !== "home";
  gesturePanel.hidden = name !== "gesture";
  emergencyPage.hidden = name !== "emergency";
  settingsPage.hidden = name !== "settings";
  babyInfoPage.hidden = name !== "baby";
  unlockGuideModal.hidden = true;
  hideLockNotice();
}

function resetGesturePanel() {
  isDrawingGesture = false;
  gesturePath = [];
  gestureStatus.textContent = "默认手势为 1 → 2 → 3 → 6";
  gestureStatus.classList.remove("is-error", "is-success");
  gestureGridWrap.classList.remove("is-error", "is-success");
  gestureDots.forEach((dot) => dot.classList.remove("is-active"));
  gestureLines.innerHTML = "";
}

function getDotCenter(dot) {
  const gridRect = gestureGridWrap.getBoundingClientRect();
  const rect = dot.getBoundingClientRect();
  const x = (((rect.left + rect.width / 2) - gridRect.left) / gridRect.width) * 300;
  const y = (((rect.top + rect.height / 2) - gridRect.top) / gridRect.height) * 300;
  return `${x},${y}`;
}

function drawGestureLine() {
  if (gesturePath.length === 0) {
    gestureLines.innerHTML = "";
    return;
  }

  const points = gesturePath
    .map((id) => getDotCenter(gestureDots.find((item) => item.dataset.dot === id)))
    .join(" ");

  gestureLines.innerHTML = `<polyline points="${points}"></polyline>`;
}

function addGestureDot(dotId) {
  if (gesturePath.includes(dotId)) {
    return;
  }

  gesturePath.push(dotId);
  gestureDots.find((dot) => dot.dataset.dot === dotId).classList.add("is-active");
  drawGestureLine();
}

function finishGesture() {
  if (!isDrawingGesture) {
    return;
  }

  isDrawingGesture = false;
  const isSuccess = gesturePath.join("-") === unlockPattern.join("-");

  if (!isSuccess) {
    gestureStatus.textContent = "手势错误，请重试";
    gestureStatus.classList.add("is-error");
    gestureGridWrap.classList.add("is-error");
    window.setTimeout(resetGesturePanel, 900);
    return;
  }

  gestureStatus.textContent = "解锁成功，已返回播放主流程";
  gestureStatus.classList.add("is-success");
  gestureGridWrap.classList.add("is-success");
  lockState.setAttribute("aria-label", "童锁已临时解锁");
  lockState.setAttribute("title", "童锁已临时解锁");

  window.setTimeout(() => {
    showSection("home");
    resetGesturePanel();
  }, 650);
}

function startLongPress(type) {
  clearTimeout(longPressTimer);
  longPressTriggered = false;
  longPressTimer = window.setTimeout(() => {
    longPressTriggered = true;
    showSection(type);
  }, 2000);
}

function cancelLongPress() {
  clearTimeout(longPressTimer);
  longPressTimer = null;
}

function bindLongPress(button, type, text) {
  button.addEventListener("click", () => {
    if (longPressTriggered) {
      longPressTriggered = false;
      return;
    }
    showLockNotice("提示", text);
  });

  ["pointerup", "pointerleave", "pointercancel"].forEach((eventName) => {
    button.addEventListener(eventName, cancelLongPress);
  });

  button.addEventListener("pointerdown", () => startLongPress(type));
}

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
    unlockGuideModal.hidden = false;
  }
});

enterLockBtn.addEventListener("click", () => {
  lockState.setAttribute("aria-label", "童锁已开启");
  lockState.setAttribute("title", "童锁已开启");
  showSection("home");
});

lockNoticeConfirmBtn.addEventListener("click", hideLockNotice);
unlockGuideConfirmBtn.addEventListener("click", () => {
  resetGesturePanel();
  showSection("gesture");
});
gestureBackBtn.addEventListener("click", () => showSection("home"));

bindLongPress(emergencyLockBtn, "emergency", "为了避免误触，请长按紧急服务按钮进入。");
bindLongPress(settingsLockBtn, "settings", "为了避免误触，请长按设置服务按钮进入。");

babyInfoEntry.addEventListener("click", () => showSection("baby"));
serviceBackButtons.forEach((button) => {
  button.addEventListener("click", () => showSection(button.dataset.serviceBack));
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

updateLockScreenInfo();
showSection("home");
lockState.setAttribute("aria-label", "童锁已开启");
lockState.setAttribute("title", "童锁已开启");
window.setInterval(updateLockScreenInfo, 60000);
