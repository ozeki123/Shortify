

console.log("injecting...")
const overlay = document.createElement("div");
const button = document.createElement("button");
overlay.id = "shortify-overlay";
button.id = "save-button";
button.innerHTML = "Save";
button.style.border = "none";
button.style.height = "56px";
button.style.width = "56px";
button.style.borderRadius = "50%";
overlay.appendChild(button);
overlay.style.position = "fixed";
overlay.style.bottom = "10px";
overlay.style.right = "90px";
overlay.style.color = "white";
overlay.style.zIndex = "9999";

document.body.appendChild(overlay);

button.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    message: "save_short",
    payload: window.location.href
  })
    .then(() => {
      console.log("Saved Short!")
    })
    .catch(err => console.log(err));
})



