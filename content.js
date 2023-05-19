
function injectHTML() {
  console.log("injecting...")
  const overlay = document.createElement("div");
  const button = document.createElement("button");
  overlay.id = "shortify-overlay";
  button.id = "save-button";
  button.innerHTML = "Save Short"
  overlay.appendChild(button);
  overlay.style.position = "fixed";
  overlay.style.bottom = 0;
  overlay.style.right = 0;
  overlay.style.backgroundColor = "red";
  overlay.style.color = "white";
  overlay.style.zIndex = "9999";

  document.body.appendChild(overlay);

  document.addEventListener('DOMContentLoaded', injectOverlay);
}

injectOverlay();