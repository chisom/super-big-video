// (function() {
	counter = 0;
	counter++;
	console.log(counter)

	let video2 = document.querySelector("video");
	
	let body = document.querySelector("body");
	let height = window.innerHeight;
	let width = window.innerWidth;

	let newVideo = video2.cloneNode();

	// displayModal.classList.toggle('modal');
	// video2.setAttribute("style" , "height: "+ height+"px")
	// video2.style.width = width;
	let modal =	document.createElement('div');
	modal.className = "modal";
	


	modal.setAttribute("style" , "width: "+ width+"px; " + "height: "+ height+"px; ");
	video2.setAttribute("style" , "width: "+ width+"px; " + "height: "+ height+"px; ");


	
	//modal.setAttribute("style" , "height: "+ height+"px")
	//modal.setAttribute("style" , "z-index: 999999999999999999")
	body.appendChild(modal);

	video2.setAttribute("controls",'');
	video2.setAttribute("autoplay",'');
	// console.log(newVideo)
	modal.appendChild(video2);
	video2.play();
	// console.log(video5);
	// chrome.tabs.executeScript({
	// 	code:'document.body.style.backgroundColor="blue" '
	// });
// })();