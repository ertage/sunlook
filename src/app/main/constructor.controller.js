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
		        image: '/src/images/style/slip-over.jpg'
		      }
		    ];
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
			vm.ctrl = 1;
			vm.isActive = function (ctrlId) {
				return this.ctrl === ctrlId;
			}
	
		 });

})();
