// Select the element where we want to insert the buttons
const settingsButton = document.querySelector('.Header-link');

// Create the staging button
const stagingButton = document.createElement('button');
stagingButton.textContent = 'Staging';
stagingButton.className = 'btn btn-sm BtnGroup-item';

// Add an event listener to the staging button
stagingButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({branch: 'staging'});
});

// Create the master button
const masterButton = document.createElement('button');
masterButton.textContent = 'Master';
masterButton.className = 'btn btn-sm BtnGroup-item';

// Add an event listener to the master button
masterButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({branch: 'master'});
});

// Append the buttons to the selected element
settingsButton.parentNode.insertBefore(stagingButton, settingsButton);
settingsButton.parentNode.insertBefore(masterButton, settingsButton);