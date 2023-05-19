const shortsArray = [];

const playlist = [];

//Create HTML for displaying shorts in list
chrome.storage.local.get(["shorts"])
  .then((res) => {
    res.shorts.forEach((short) => {
      !shortsArray.includes(short) && shortsArray.push(short);
      playlist.push(short);

      //<ul> list of shorts
      const ul = document.getElementById("shorts-list");

      //<li> shorts item
      const li = document.createElement("li");
      li.className = "list-item";

      //<p> shorts link
      const p = document.createElement("p");
      p.innerHTML = short;
      p.className = "item-link"

      //<img/> Youtube shorts logo
      const logo = document.createElement("img");
      logo.src = "./assets/icons/youtube_logo.svg";
      logo.id = "youtube-logo";

      //Remove short
      const remove = document.createElement("img");
      remove.src = "./assets/icons/remove_icon.svg";
      remove.id = "remove-short";
      li.appendChild(remove);

      remove.addEventListener("click", () => {
        console.log("REMOVING...")
      })

      //<div> shorts contents wrapper
      const div = document.createElement("div");
      div.className="item-wrapper";
      div.appendChild(logo);
      div.appendChild(p);


      //<img/> copy icon
      const copy = document.createElement("img");
      copy.src = "./assets/icons/copy_icon.svg";
      copy.id = "copy-icon";

      copy.addEventListener("click", () => {
        console.log("COPIED...")
      })

      const span = document.createElement("span");
      span.innerHTML = "..."

      li.appendChild(div);
      li.appendChild(span);
      li.appendChild(copy);
      ul.appendChild(li);
      
    });
})

//Save link event listener
const save_link = document.getElementById("save-button");
save_link.addEventListener("click", () => {
  console.log("SAVE LINK BUTTON CLICKED...");
})

//Save playlist event listener & modal logic
const save_playlist = document.getElementById("save-playlist");
const modal = document.getElementById("modal");

save_playlist.addEventListener("click", () => {
  // if (playlist.length === 0) {
  //   console.log("Nothing to save");
  // } else {
  //   // chrome.storage.local.set({
  //   //   playlists: playlist
  //   // })
    modal.style.display = "flex";
  // }
  console.log("SAVE PLAYLIST BUTTON CLICKED...");
  console.log(playlist)
})

//Close modal logic
const close_button = document.getElementById("modal-cancel");
close_button.addEventListener("click", () => {
  modal.style.display = "none";
})

const close_icon = document.getElementById("modal-close");
close_icon.addEventListener("click", () => {
  modal.style.display = "none";
})

console.log("UPDATING SHORTS ARRAY", shortsArray)