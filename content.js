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
    let url = `https://api.github.com/repos/{owner}/{repo}/pulls`;
    let headers = {
        "Authorization": `token {token}`,
        "Content-Type": "application/json"
    };
    let body = {
        "title": "New Pull Request",
        "head": "{currentBranch}",
        "base": targetBranch
    };
    fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log('There was an error!', error));
}

// Add the buttons to the GitHub interface
let stagingButton = createButton('staging');
let masterButton = createButton('master');
document.body.appendChild(stagingButton);
document.body.appendChild(masterButton);