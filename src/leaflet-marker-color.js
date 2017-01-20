/****************************************************************************
	leaflet-marker-color.js, 

	(c) 2017, FCOO

	https://github.com/FCOO/leaflet-marker-color
	https://github.com/FCOO

****************************************************************************/
(function (L/*, window/*, document, undefined*/) {
	"use strict";

	//Extend base leaflet class
	L.MarkerColor = L.Class.extend({
		includes: L.Mixin.Events,

	//or extend eq. L.Control
	//L.Control.MarkerColor = L.Control.extend({

    //Default options
		options: {
			VERSION: "{VERSION}"

		},

		//initialize
		initialize: function(options) {
			L.setOptions(this, options);
/*
var myIcon = L.divIcon({className: 'my-div-icon'});
// you can set .my-div-icon styles in CSS
L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);

*/


		},

		//addTo
		addTo: function (map) {
			L.Control.prototype.addTo.call(this, map); //Extend eq. L.Control

			return this;
		},


		//onAdd
		onAdd: function (map) {
			this._map = map;
			var result = L.Control.Box.prototype.onAdd.call(this, map );

			//Create the object/control


			return result;
		},

		//myMethod
		myMethod: function () {

		}
	});

	//OR/AND extend a prototype-method (METHOD) of a leaflet {CLASS}

	/***********************************************************
	Extend the L.{CLASS}.{METHOD} to do something more
	***********************************************************/
/*
    L.{CLASS}.prototype.{METHOD} = function ({METHOD}) {
		return function () {
    //Original function/method
    {METHOD}.apply(this, arguments);

    //New extended code
    ......extra code

		}
	} (L.{CLASS}.prototype.{METHOD});

*/

}(L, this, document));



