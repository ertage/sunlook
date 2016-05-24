(function(){
	'use strict'

	angular.module('sunlook')
		.controller('AppController', function() {
		    var vm = this;

		    vm.styles = [
		      {
		        type: 'straight',
		        bgColor: '#f00',
		        title: 'Straight',
		        image: 'images/style/straight.png'
		      },
		      {
		        type: 'slipOver',
		        bgColor: 'blue',
		        title: 'slipOver',
		        image: 'images/style/slip-over.png'
		      },
		      {
		        type: 'vStyle',
		        bgColor: 'pink',
		        title: 'slipOver',
		        image: 'images/style/vStyle.png'
		      }
		    ];

			vm.textiles = [
				{
					title: 'silk',
					image: 'images/textile/silk.jpg'
				},
				{
					title: 'knitwear',
					image: 'images/textile/knitwear.jpg'
				},
				{
					title: 'coton',
					image: 'images/textile/coton.jpg'
				},
				{
					title: 'linen',
					image: 'images/textile/linen.jpg'
				},
				{
					title: 'chiffon',
					image: 'images/textile/chiffon.jpg'
				}
			];

			vm.decolletes = [
				{
		    		title: 'jewel',
		    		imagePreview: 'images/decollete/jewel.png',
		    		image: 'images/model/decollete_jewel_white.png'
		    	},
		    	{
		    		title: 'scoop',
		    		imagePreview: 'images/decollete/scoop.png',
		    		image: 'images/model/decollete_scoop_white.png'
		    	},
		    	{
		    		title: 'square',
		    		imagePreview: 'images/decollete/square.png',
		    		image: 'images/model/decollete_square_white.png'
		    	},
		    	{
		    		title: 'v-neck',
		    		imagePreview: 'images/decollete/v-neck.png',
		    		image: 'images/model/decollete_v-neck_white.png'
		    	},
		    	{
		    		title: 'sabrina',
		    		imagePreview: 'images/decollete/sabrina.png',
		    		image: 'images/model/decollete_sabrina_white.png'
		    	}
		    ];

		    vm.skirts = [
		    	{
		    		styleType: 'vStyle',
		    		title: 'pencil',
		    		image: 'images/skirts/pencil.png'
		    	},
		    	{
		    		styleType: 'vStyle',
		    		title: 'tube',
		    		image: 'images/skirts/tube.png'
		    	},
		    	{
		    		styleType: 'slipOver',
		    		title: 'circle',
		    		image: 'images/skirts/circle.png'
		    	},
		    	{
		    		styleType: 'slipOver',
		    		title: 'a-line',
		    		image: 'images/skirts/a-line.png'
		    	},
		    	{
		    		styleType: 'slipOver',
		    		title: 'accordion',
		    		image: 'images/skirts/accordion.png'
		    	}
		    ];

		    vm.sleeves = [
		    	{
		    		title: 'bell',
		    		image: 'images/sleeve/bell.png'
		    	},
		    	{
		    		title: 'tube',
		    		image: 'images/sleeve/bracelet.png'
		    	},
		    	{
		    		title: 'circle',
		    		image: 'images/sleeve/puffed.png'
		    	},
		    	{
		    		title: 'a-line',
		    		image: 'images/sleeve/roll-up.png'
		    	},
		    	{
		    		title: 'accordion',
		    		image: 'images/sleeve/shirt.png'
		    	}
		    ];

			vm.straightTypes = [
				{
					id: 'shorter',
					title: 'shorter',
					imagePreview: 'images/skirts/shorter.png',
					image: 'images/model/face_straight_skirt_shorter.png'
				},
				{
					id: 'short',
					title: 'short',
					imagePreview: 'images/skirts/short.png',
					image: 'images/model/face_straight_skirt_short.png'
				},
				{
					id: 'long',
					title: 'long',
					imagePreview: 'images/skirts/long.png',
					image: 'images/model/face_straight_skirt_long.png'
				},
				{
					id: 'longer',
					title: 'longer',
					imagePreview: 'images/skirts/longer.png',
					image: 'images/model/face_straight_skirt_longer.png'
				}
	    	];



		    vm.model = {
				style: vm.styles[0],
				textile: vm.textiles[0],
				decollete: vm.decolletes[0],
				color: 'red',
				skirt: vm.skirts[0],
				sleeve: vm.sleeves[0],
				straightType: vm.straightTypes[0],
				size: 'XS'
			};

			vm.tabs = [
				{
					title: "I know my size",
					active: false
				},
				{
					title: "I don't know my size",
					active: true
				}
			]
		   	vm.modalOpen = false;
		    vm.showModal = function () {
		     	vm.modalOpen = !vm.modalOpen;
			}

			vm.closeModal = function () {
		     	vm.modalOpen = false;
			};

			vm.modelProperty = 'style';
			vm.isActive = function (modelProperty) {
				return vm.modelProperty === modelProperty;
			};

			vm.activated = function (modelProperty){
				vm.modelProperty = modelProperty;
			};

			vm.onClickTab = function(tab) {
				for(var i in vm.tabs){
					vm.tabs[i].active = false;
				}
				tab.active = true;
			}

		 });

})();
