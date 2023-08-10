// options.js
// This is the script for the options page of the Chrome extension.

// Saves options to chrome.storage
function save_options() {
  var option = document.getElementById('option').value;
  chrome.storage.sync.set({
    userOption: option
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    userOption: 'default'
  }, function(items) {
    document.getElementById('option').value = items.userOption;
  });
}

// Resets options to default
function reset_options() {
  chrome.storage.sync.set({
    userOption: 'default'
  }, function() {
    // Update status to let user know options were reset.
    var status = document.getElementById('status');
    status.textContent = 'Options reset to default.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

document.getElementById('save').addEventListener('click', save_options);
document.getElementById('reset').addEventListener('click', reset_options);
document.addEventListener('DOMContentLoaded', restore_options);