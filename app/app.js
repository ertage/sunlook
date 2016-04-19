angular.module('sunlook', [])

  .controller('firstController', function() {
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
        image:  'app/images/style/straight.jpg'
      },
      {
        type: 'slipOver',
        bgColor: 'blue',
        title: 'slipOver',
        image: 'app/images/style/slip-over.jpg'
      },
      {
        type: 'vStyle',
        bgColor: 'pink',
        title: 'slipOver',
        image: 'app/images/style/slip-over.jpg'
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
    // var color = this.styleColor[this.model.style];
  })
