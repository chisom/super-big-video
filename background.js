
chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.executeScript(tab.id, {
		file:'main.js'
	});
	chrome.tabs.insertCSS( {
		file:'main.css'
	});
	console.log(tab);
});