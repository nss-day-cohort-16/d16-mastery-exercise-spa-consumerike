"use strict";
var AUTOMOBILES = (function (autos) {

	autos.populate = function(inventory) {

		inventory.forEach(function(element, index, array) {
			let containerEL = document.getElementById('container');
			containerEL.innerHTML +=`<div class="col-md-4 car_border background_color car--${index}">
			${element.name}<br>${element.year}<br>${element.price} <br> <desc>${element.description}</desc>
				
			</div>`


			});

		AUTOMOBILES.activateEvents();
	};
	
	
	autos.activateEvents = function() {


		let containerEl = document.getElementsByClassName('col-md-4');

		for (var i = 0; i < containerEl.length; i++) {
			containerEl[i].addEventListener("click",function(event){
			handleClick(event);
			handleFocus(event);
			clearInput(event);
			handleInput(event); 
			
			});
		}

		let input = document.getElementById('text_input');
			input.addEventListener("keyup", handleInput );

		function clearInput(event) {
		let input = document.getElementById('text_input');
		

		}

		function handleClick(event) {
			clearSelection(event);
			event.target.classList.add("selected");
		}

		function handleFocus() {
			var  userInput = document.getElementById('text_input');
			userInput.focus();
		}

		function handleInput(event) {
			console.log("hey",event.target );
			let car = event.target;
			let slogan = car.getElementsByTagName('desc');
			console.log("slogan:",slogan );
			// slogan[0].innerHTML = input.value;
		}

		function clearSelection(event) {

			let selection = document.querySelectorAll('.selected');
			for (var i = 0; i < selection.length; i++) {
				selection[i].classList.remove('selected');
			}
		}
	};



	

return autos

})(AUTOMOBILES || {})



AUTOMOBILES.loadCars(AUTOMOBILES.populate);




