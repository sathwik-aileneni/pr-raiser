// background.js
// This is the background script for the Chrome extension.

// This event is fired when the extension is first installed,
// when the extension is updated to a new version, and when Chrome is updated to a new version.
chrome.runtime.onInstalled.addListener(function() {
  console.log('The extension has been installed');
});

// This event is fired when the browser action is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('The browser action has been clicked');
});