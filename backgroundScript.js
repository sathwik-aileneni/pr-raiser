chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Get the current branch from the message
  const currentBranch = request.branch;

  // Define the GitHub API endpoint
  const apiEndpoint = `https://api.github.com/repos/:owner/:repo/pulls`;

  // Define the data for the pull request
  const data = {
    title: `Pull request from ${currentBranch}`,
    head: currentBranch,
    base: request.base,
  };

  // Make a POST request to the GitHub API
  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Authorization': `token ${localStorage.getItem('githubToken')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    // Notify the user that the pull request was created
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Pull Request Created',
      message: `Pull request from ${currentBranch} to master was created.`,
    });
  })
  .catch(error => {
    // Notify the user that there was an error
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Error',
      message: `There was an error creating the pull request: ${error.message}`,
    });
  });
});