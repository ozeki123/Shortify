console.log("Running Background...");

const shortsArray = [];
const playlistArray = [];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    shorts: shortsArray,
  });
  chrome.storage.local.set({
    playlists: playlistArray
  });
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["./foreground.css"]
    })
      .then(() => {
        console.log("Injecting foreground styles...");
  
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["./foreground.js"]
        })
          .then(() => {
            console.log("Injecting foreground script...")
          });
      })
      .catch(err => console.log(err));
  }
  
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.message === "save_short") {
    console.log("Saved Short!!");
    updateShortsArray(request.payload);
  } else {
    console.log("Error")
  }
})

const updateShortsArray = (shortUrl) => {
  
  chrome.storage.local.get(["shorts"])
    .then((res) => {
      console.log("SHORTS", res);
      console.log(shortUrl);
      res.shorts.push(shortUrl);
      chrome.storage.local.set({shorts: res.shorts})
    })
  
  // chrome.storage.local.set({ shorts: shortsArray})
  //   .then(() => console.log("Saved Short"))
}