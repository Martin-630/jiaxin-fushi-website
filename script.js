const amapDialog = document.querySelector("[data-amap-dialog]");
const amapConfirmYes = document.querySelector("[data-amap-confirm-yes]");
const amapConfirmNo = document.querySelector("[data-amap-confirm-no]");
let pendingAmapUrl = "";
let activeAmapCard = null;

function closeAmapDialog() {
  if (!amapDialog) return;

  amapDialog.hidden = true;
  pendingAmapUrl = "";
  document.querySelector("#contact")?.scrollIntoView({ block: "start" });
  activeAmapCard?.focus();
}

document.addEventListener("click", (event) => {
  const card = event.target instanceof Element ? event.target.closest("[data-amap-card]") : null;
  if (!card || !amapDialog) return;

  event.preventDefault();
  pendingAmapUrl = card.href;
  activeAmapCard = card;
  amapDialog.hidden = false;
  amapConfirmYes?.focus();
});

amapConfirmYes?.addEventListener("click", () => {
  if (pendingAmapUrl) {
    window.location.href = pendingAmapUrl;
  }
});

amapConfirmNo?.addEventListener("click", closeAmapDialog);

amapDialog?.addEventListener("click", (event) => {
  if (event.target === amapDialog) {
    closeAmapDialog();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && amapDialog && !amapDialog.hidden) {
    closeAmapDialog();
  }
});

const imageViewer = document.querySelector("[data-image-viewer]");
const imageViewerImage = document.querySelector("[data-viewer-image]");
const imageViewerTitle = document.querySelector("[data-viewer-title]");
const imageViewerStage = document.querySelector(".image-viewer-stage");
let imageViewerZoom = 1;
let activeViewerTrigger = null;
let pinchStartDistance = 0;
let pinchStartZoom = 1;
let imageViewerPanX = 0;
let imageViewerPanY = 0;
let panStartX = 0;
let panStartY = 0;
let panBaseX = 0;
let panBaseY = 0;
const activeImagePointers = new Map();

function setImageViewerZoom(value) {
  if (!imageViewerImage) return;

  imageViewerZoom = Math.min(2.5, Math.max(0.8, value));
  imageViewerImage.style.setProperty("--viewer-zoom", imageViewerZoom.toFixed(2));
}

function setImageViewerPan(x, y) {
  if (!imageViewerImage) return;

  imageViewerPanX = x;
  imageViewerPanY = y;
  imageViewerImage.style.setProperty("--viewer-pan-x", `${Math.round(imageViewerPanX)}px`);
  imageViewerImage.style.setProperty("--viewer-pan-y", `${Math.round(imageViewerPanY)}px`);
}

function getPinchDistance() {
  const points = Array.from(activeImagePointers.values());
  if (points.length < 2) return 0;

  const [first, second] = points;
  return Math.hypot(first.x - second.x, first.y - second.y);
}

function closeImageViewer() {
  if (!imageViewer) return;

  imageViewer.hidden = true;
  document.body.classList.remove("has-image-viewer");
  imageViewerImage?.removeAttribute("src");
  activeImagePointers.clear();
  activeViewerTrigger?.focus();
}

function openImageViewer(trigger) {
  if (!imageViewer || !imageViewerImage || !imageViewerTitle) return;

  activeViewerTrigger = trigger;
  imageViewerImage.src = trigger.currentSrc || trigger.src;
  imageViewerImage.alt = trigger.alt;
  imageViewerTitle.textContent = trigger.dataset.viewerCaption || trigger.alt || "产品图片";
  setImageViewerZoom(1);
  setImageViewerPan(0, 0);
  document.body.classList.add("has-image-viewer");
  imageViewer.hidden = false;
  imageViewer.querySelector("[data-viewer-close]")?.focus();
}

document.addEventListener("click", (event) => {
  const trigger = event.target instanceof Element ? event.target.closest(".image-viewer-trigger") : null;
  if (!trigger) return;

  openImageViewer(trigger);
});

document.addEventListener("keydown", (event) => {
  if (event.target instanceof Element && event.target.matches(".image-viewer-trigger") && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openImageViewer(event.target);
    return;
  }

  if (!imageViewer || imageViewer.hidden) return;

  if (event.key === "Escape") {
    closeImageViewer();
  }
});

document.querySelectorAll("[data-viewer-close]").forEach((button) => {
  button.addEventListener("click", closeImageViewer);
});

imageViewerStage?.addEventListener("pointerdown", (event) => {
  if (!imageViewer || imageViewer.hidden) return;
  if (event.pointerType === "mouse" && event.button !== 0) return;

  event.preventDefault();
  imageViewerStage.setPointerCapture(event.pointerId);
  imageViewerStage.classList.add("is-dragging");
  activeImagePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (activeImagePointers.size === 1) {
    panStartX = event.clientX;
    panStartY = event.clientY;
    panBaseX = imageViewerPanX;
    panBaseY = imageViewerPanY;
  }

  if (activeImagePointers.size === 2) {
    pinchStartDistance = getPinchDistance();
    pinchStartZoom = imageViewerZoom;
  }
});

imageViewerStage?.addEventListener("pointermove", (event) => {
  if (!activeImagePointers.has(event.pointerId)) return;

  activeImagePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (activeImagePointers.size === 2 && pinchStartDistance > 0) {
    event.preventDefault();
    setImageViewerZoom(pinchStartZoom * (getPinchDistance() / pinchStartDistance));
    return;
  }

  if (activeImagePointers.size === 1) {
    event.preventDefault();
    setImageViewerPan(panBaseX + event.clientX - panStartX, panBaseY + event.clientY - panStartY);
  }
});

function removeImagePointer(event) {
  activeImagePointers.delete(event.pointerId);
  if (activeImagePointers.size === 0) {
    imageViewerStage?.classList.remove("is-dragging");
  }

  if (activeImagePointers.size < 2) {
    pinchStartDistance = 0;
  }

  if (activeImagePointers.size === 1) {
    const [point] = Array.from(activeImagePointers.values());
    panStartX = point.x;
    panStartY = point.y;
    panBaseX = imageViewerPanX;
    panBaseY = imageViewerPanY;
  }
}

imageViewerStage?.addEventListener("pointerup", removeImagePointer);
imageViewerStage?.addEventListener("pointercancel", removeImagePointer);
imageViewerStage?.addEventListener("wheel", (event) => {
  if (!imageViewer || imageViewer.hidden) return;

  event.preventDefault();
  setImageViewerZoom(imageViewerZoom + (event.deltaY < 0 ? 0.12 : -0.12));
}, { passive: false });
