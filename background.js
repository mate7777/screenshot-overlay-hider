const HIDE_CSS = "#axeptio_overlay, .grecaptcha-badge { display: none !important; }";
let isActive = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (isActive && changeInfo.status === 'complete') {
      chrome.scripting.insertCSS({
        target: { tabId: tabId },
        css: HIDE_CSS
      });
    }
  });
});

chrome.action.onClicked.addListener((tab) => {
  isActive = !isActive;

  if (isActive) {
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      css: HIDE_CSS
    });
    chrome.action.setIcon({
      path: {
        "16": "icon-active-16.png",
        "48": "icon-active-48.png",
        "128": "icon-active-128.png"
      }
    });
  } else {
    chrome.scripting.removeCSS({
      target: { tabId: tab.id },
      css: HIDE_CSS
    });
    chrome.action.setIcon({
      path: {
        "16": "icon-16.png",
        "48": "icon-48.png",
        "128": "icon-128.png"
      }
    });
  }
});
