(function(){
	'use strict'

	angular.module('sunlook')
		.controller('AppController', function() {
		    var vm = this;
		    // this.styleColor = {
		    //   straight: 'red',
		    //   slipOver: 'blue',
		    //   vStyle: 'pink'
		    // };
		    vm.styles = [
		      {
		        type: 'straight',
		        bgColor: '#f00',
		        title: 'Straight',
		        image:  '/src/images/style/straight.jpg'
		      },
		      {
		        type: 'slipOver',
		        bgColor: 'blue',
		        title: 'slipOver',
		        image: '/src/images/style/slip-over.jpg'
		      },
		      {
		        type: 'vStyle',
		        bgColor: 'pink',
		        title: 'slipOver',
		        image: '/src/images/style/vStyle.jpg'
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
		    ]
		    vm.model = {
		      style: vm.styles[0],
		      color: 'red',
		      skirt: 'skirt type 1',
		      sleeve: 'sleeve type 1',
		      decollete: 'decollete type 1',
		      textile: 'silk',
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
