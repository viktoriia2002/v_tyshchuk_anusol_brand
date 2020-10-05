(() =>{
	//"use strict";
	console.log("fired");

	let button = document.querySelector("#button");
	 burgerCon = document.querySelector("#burgerCon");
	 body = document.querySelector('body');
	 section = document.querySelectorAll('.aboutSection');
	 closeBtn = document.querySelectorAll('.closeB');
	 cards = document.querySelectorAll('.card');


	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
	}


	for (let i = 0; i < cards.length; i++) {
	    cards[i].addEventListener('click', function (event) {
	        event.preventDefault();

	        section[i].classList.add('active');
	        body.classList.add('notactive');
	    })
	}

	for (let i = 0; i < cards.length; i++) {
	    closeBtn[i].addEventListener('click', function () {
	        event.preventDefault();

	        section[i].classList.remove('active');
	        body.classList.remove('notactive')
	    })
	}

button.addEventListener("click", hamburgerMenu);

})();
