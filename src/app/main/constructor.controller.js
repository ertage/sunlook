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
		    		image: '/src/images/decollete/jewel.png'
		    	},
		    	{
		    		title: 'scoop',
		    		image: '/src/images/decollete/scoop.png'
		    	},
		    	{
		    		title: 'square',
		    		image: '/src/images/decollete/square.png'
		    	},
		    	{
		    		title: 'v-neck',
		    		image: '/src/images/decollete/v-neck.png'
		    	},
		    	{
		    		title: 'jewel',
		    		image: '/src/images/decollete/sabrina.png'
		    	}
		    ];

		    vm.skirts = [
		    	{
		    		styleType: 'straight',
		    		title: 'pencil',
		    		image: '/src/images/skirts/pencil.png'
		    	},
		    	{
		    		styleType: 'straight',
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
		    		styleType: 'vStyle',
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

			vm.straightType = [
				{
					title: 'shorter',
					image: '/src/images/skirts/shorter.png'
				},
				{
					title: 'short',
					image: '/src/images/skirts/short.png'
				},
				{
					title: 'long',
					image: '/src/images/skirts/long.png'
				},
				{
					title: 'longer',
					image: '/src/images/skirts/longer.png'
				}
		    ];

		    vm.model = {
				style: vm.styles[0],
				textile: vm.textiles[0],
				decollete: vm.decolletes[0],
				color: 'red',
				skirt: vm.skirts[0],
				sleeve: vm.sleeves[0],
				straightType: vm.straightType[0],
				size: 'XS'
			};

		   	vm.modalOpen = false;
		    vm.showModal = function () {
		     	vm.modalOpen = !vm.modalOpen;
			}

			vm.closeModal = function () {
		     	vm.modalOpen = false;
			}

			vm.modelProperty = 'style';
			vm.isActive = function (modelProperty) {
				return vm.modelProperty === modelProperty;
			}

			vm.activated = function (modelProperty){
				vm.modelProperty = modelProperty;
			}
			
			

		 });

})();
