document.getElementById('changeUrl').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currentTab = tabs[0]; 
    var currentUrl = currentTab.url;
    
    // Replace 'epdf' with 'pdf' in the URL
    var newUrl = currentUrl.replace('epdf', 'pdf');

    chrome.tabs.update(currentTab.id, {url: newUrl});
  });
});
