"use strict";
var AUTOMOBILES = (function (autos) {

var inventory = []

	autos.loadCars = function(populate) {
	     var request = new XMLHttpRequest();
	     request.open("GET","javascripts/inventory.json");
	     request.send();

     request.addEventListener("load", function () {

	     var carDataArray = JSON.parse(this.responseText);
	     console.log("car array", carDataArray );
	     var inventory = carDataArray.cars
	     console.log("inventory of cars ", inventory);
	     populate(inventory);
     });

     };

     autos.getCars = function () {
     	return inventory;
     };

	return autos

})(AUTOMOBILES || {})
console.log("dude, seriously: ", AUTOMOBILES.getCars());

