// popup.js
// This is the script for the popup of the Chrome extension.

// This event is fired when the popup is opened.
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('popup-content').textContent = 'This is the popup of the Chrome extension.';
});

// This event is fired when the button in the popup is clicked.
document.getElementById('popup-button').addEventListener('click', function() {
  document.getElementById('popup-content').textContent = 'The button in the popup has been clicked.';
});