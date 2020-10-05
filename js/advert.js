(() =>{
	//"use strict";
	console.log("fired");

	let button = document.querySelector("#button");
	 burgerCon = document.querySelector("#burgerCon");

   openBox = document.querySelector('.lightbox');

	 clickVideo = document.querySelector('.advertContent span');
  closeVideo = document.querySelector('.close h2');


	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
	}

  function openLightbox() {
		console.log('function work');

		openBox.style.display = 'block';

	}


	function closeWindow() {
		openBox.style.display = 'none';
	}


    clickVideo.addEventListener('click', openLightbox );
    closeVideo.addEventListener('click', closeWindow);


	button.addEventListener("click", hamburgerMenu);

})();
