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


  // modal script
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });


});
