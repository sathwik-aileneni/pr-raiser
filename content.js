// content.js

// Function to create a button
function createButton(name) {
    let button = document.createElement('button');
    button.innerHTML = name;
    button.onclick = function() {
        createPullRequest(name);
    };
    return button;
}

// Function to create a pull request
function createPullRequest(targetBranch) {
    // Logic to create a pull request using the GitHub API
    // This will depend on the specific requirements and may involve using fetch or another method to make the API call
}

// Add the buttons to the GitHub interface
let stagingButton = createButton('staging');
let masterButton = createButton('master');
document.body.appendChild(stagingButton);
document.body.appendChild(masterButton);