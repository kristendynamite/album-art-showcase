$(document).ready(function() {
  //gallery item height hack
  function fixGalleryHeight() {
    $('.gallery-item').each(function() {
      var itemWidth = $(this).width();
      $(this).height(itemWidth);
    });
  }
  fixGalleryHeight();
  $(window).on('resize', function() {
    fixGalleryHeight();
  });

  
});
