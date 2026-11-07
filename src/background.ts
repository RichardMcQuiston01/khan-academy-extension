chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

async function fetchData() {
  try {
    const response = await fetch('https://www.khanacademy.org/');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'Hello from popup') {
    sendResponse({ message: 'Hello back from background' });
  }
  return true;
});
