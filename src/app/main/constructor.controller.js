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
		        image:  '/src/images/style/straight.png'
		      },
		      {
		        type: 'slipOver',
		        bgColor: 'blue',
		        title: 'slipOver',
		        image: '/src/images/style/slip-over.png'
		      },
		      {
		        type: 'vStyle',
		        bgColor: 'pink',
		        title: 'slipOver',
		        image: '/src/images/style/vStyle.png'
		      }
		    ];

			vm.textiles = [
				{
					title: 'silk',
					image: '/src/images/textile/silk.jpg'
				},
				{
					title: 'knitwear',
					image: '/src/images/textile/knitwear.jpg'
				},
				{
					title: 'coton',
					image: '/src/images/textile/coton.jpg'
				},
				{
					title: 'linen',
					image: '/src/images/textile/linen.jpg'
				},
				{
					title: 'chiffon',
					image: '/src/images/textile/chiffon.jpg'
				}
			];

			vm.decolletes = [
				{
		    		title: 'jewel',
		    		imagePreview: '/src/images/decollete/jewel.png',
		    		image: '/src/images/model/decollete_jewel_white.png'
		    	},
		    	{
		    		title: 'scoop',
		    		imagePreview: '/src/images/decollete/scoop.png',
		    		image: '/src/images/model/decollete_scoop_white.png'
		    	},
		    	{
		    		title: 'square',
		    		imagePreview: '/src/images/decollete/square.png',
		    		image: '/src/images/model/decollete_square_white.png'
		    	},
		    	{
		    		title: 'v-neck',
		    		imagePreview: '/src/images/decollete/v-neck.png',
		    		image: '/src/images/model/decollete_v-neck_white.png'
		    	},
		    	{
		    		title: 'sabrina',
		    		imagePreview: '/src/images/decollete/sabrina.png',
		    		image: '/src/images/model/decollete_sabrina_white.png'
		    	}
		    ];

		    vm.skirts = [
		    	{
		    		styleType: 'vStyle',
		    		title: 'pencil',
		    		image: '/src/images/skirts/pencil.png'
		    	},
		    	{
		    		styleType: 'vStyle',
		    		title: 'tube',
		    		image: '/src/images/skirts/tube.png'
		    	},
		    	{
		    		styleType: 'slipOver',
		    		title: 'circle',
		    		image: '/src/images/skirts/circle.png'
		    	},
		    	{
		    		styleType: 'slipOver',
		    		title: 'a-line',
		    		image: '/src/images/skirts/a-line.png'
		    	},
		    	{
		    		styleType: 'slipOver',
		    		title: 'accordion',
		    		image: '/src/images/skirts/accordion.png'
		    	}
		    ];

		    vm.sleeves = [
		    	{
		    		title: 'bell',
		    		image: '/src/images/sleeve/bell.png'
		    	},
		    	{
		    		title: 'tube',
		    		image: '/src/images/sleeve/bracelet.png'
		    	},
		    	{
		    		title: 'circle',
		    		image: '/src/images/sleeve/puffed.png'
		    	},
		    	{
		    		title: 'a-line',
		    		image: '/src/images/sleeve/roll-up.png'
		    	},
		    	{
		    		title: 'accordion',
		    		image: '/src/images/sleeve/shirt.png'
		    	}
		    ];

			vm.straightTypes = [
				{
					id: 'shorter',
					title: 'shorter',
					imagePreview: '/src/images/skirts/shorter.png',
					image: '/src/images/model/face_straight_skirt_shorter.png'
				},
				{
					id: 'short',
					title: 'short',
					imagePreview: '/src/images/skirts/short.png',
					image: '/src/images/model/face_straight_skirt_short.png'
				},
				{
					id: 'long',
					title: 'long',
					imagePreview: '/src/images/skirts/long.png',
					image: '/src/images/model/face_straight_skirt_long.png'
				},
				{
					id: 'longer',
					title: 'longer',
					imagePreview: '/src/images/skirts/longer.png',
					image: '/src/images/model/face_straight_skirt_longer.png'
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
