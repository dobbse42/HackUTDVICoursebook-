let butt = document.getElementById('butt');

butt.onclick = function(element) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{code: 'document.body.page-middle.page-content.var found=false;for(var i=0;((document.getElementById("r-"+i)).length() > 0 && !found);i++){if(document.getElementById("r-"+i+"child").length()>0{found=true}document.write(i);document.write(found);}'
		}));
	};
}