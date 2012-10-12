function onRequest(request, sender, sendResponse) {
  if (request.operation == 'show-icon') {
    chrome.pageAction.show(sender.tab.id);
  }

  sendResponse({});
};

chrome.extension.onRequest.addListener(onRequest);