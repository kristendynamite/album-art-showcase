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

  //hamburger icon scripts
  var expanded = false;
  $('.burger').click(function() {
    if (!expanded) {
      $('.burger span:first-child').removeClass('toggle-top-reverse');
      $('.burger span:last-child').removeClass('toggle-bottom-reverse');
      $('.burger span:first-child').addClass('toggle-top');
      $('.burger span:last-child').addClass('toggle-bottom');
      $('.burger span:nth-child(2)').addClass('middle');
      expanded = true;
    } else {
      $('.burger span:nth-child(2)').removeClass('middle');
      $('.burger span:first-child').removeClass('toggle-top');
      $('.burger span:last-child').removeClass('toggle-bottom');
      $('.burger span:first-child').addClass('toggle-top-reverse');
      $('.burger span:last-child').addClass('toggle-bottom-reverse');
      expanded = false;
    }
  });


});
