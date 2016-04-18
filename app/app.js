angular.module('sunlook', [])

  .controller('firstController', function() {
    this.model = {
      style: "straight",
      color: "red",
      skirt: "skirt type 1",
      sleeve: "sleeve type 1",
      decollete: "decollete type 1",
      textile: "silk",
      size: "XS"
    };
  })
