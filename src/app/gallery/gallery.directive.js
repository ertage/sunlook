(function(){
  'use strict'

  angular.module('sunlook')
    .directive('gallery', function() {
      return {
        restrict: 'E',
        templateUrl: 'src/app/gallery/gallery.tpl.html',
        link: function($scope, $element) {
          var grid = $element[0].querySelector('.grid');
          var msnry;

          imagesLoaded( grid, function() {
            // init Isotope after all images have loaded
            msnry = new Masonry( grid, {
              itemSelector: '.grid-item',
              columnWidth: '.grid-sizer',
              percentPosition: true
              });
          });
        }
      }
    });

})();
