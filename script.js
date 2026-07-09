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
