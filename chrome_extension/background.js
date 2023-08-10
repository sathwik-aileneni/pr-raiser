// background.js
// This file will be used to handle events for the Chrome extension.

// Listen for the `onInstalled` event
chrome.runtime.onInstalled.addListener(function() {
    console.log('The extension has been installed or updated.');
});