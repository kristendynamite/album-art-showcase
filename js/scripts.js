var data = [
  {
    artistName: 'Twentyone Pilots',
    albumTitle: 'Blurry Face',
    imageUrl: 'img/21p.jpg'
  },
  {
    artistName: 'Foster The People',
    albumTitle: 'Torches',
    imageUrl: 'img/ftp.jpg'
  },
  {
    artistName: 'Grouplove',
    albumTitle: 'Ways To Go',
    imageUrl: 'img/gl.jpg'
  },
  {
    artistName: 'The Head &amp; the Heart',
    albumTitle: 'The Head &amp; the heart',
    imageUrl: 'img/hnh.jpg'
  },
  {
    artistName: 'Red Hot Chili Peppers',
    albumTitle: 'One Hot Minute',
    imageUrl: 'img/rhcp.jpg'
  },
  {
    artistName: 'Sick Puppies',
    albumTitle: 'Connect',
    imageUrl: 'img/sp.jpg'
  }
];

////////////////////////////////////////////////////////////////////////////////
//                             Business Logic                                 //
////////////////////////////////////////////////////////////////////////////////

//constructor for albums
function Albums() {
  this.albums = [];
}

//constructor for an album
function Album(artistName, albumTitle, imageUrl) {
  this.artistName = artistName;
  this.albumTitle = albumTitle;
  this.imageUrl = imageUrl;
}

//prototype to add album to albums array
Albums.prototype.addAlbum = function(album) {
  this.albums.push(album);
}

Albums.prototype.populate = function(data) {
  for (var i = 0; i < data.length; i++) {
    this.albums.push(data[i]);
  }
}


////////////////////////////////////////////////////////////////////////////////
//                          User Interface Logic                              //
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  //gallery item height hack
  function fixGalleryHeight() {
    $('.gallery-item').each(function() {
      var itemWidth = $(this).width();
      $(this).height(itemWidth);
    });
  }

  // function to populate albums data to screen
  function populateScreen(albums) {
    $('#gallery').empty();
    albums.albums.forEach(function(album) {
      $('#gallery').append('<div class="gallery-item">' +
      '<img src="' + album.imageUrl + '" alt="" />' +
      '<div class="content">' +
      '<h4>' + album.albumTitle + '</h4>' +
      '<h5>' + album.artistName + '</h5>' +
      '</div>' +
      '</div>');
    });
    // fixGalleryHeight();
  }

  //on form submit, run method that creates album, then append to page
  $("form#new-album").submit(function(event) {
    event.preventDefault();

    $(".modal-state:checked").prop("checked", false).change();

    var artistName = $("input#name").val();
    var albumName = $("input#title").val();
    var imageUrl = $("input#url").val();
    var newAlbum = new Album(artistName, albumName, imageUrl);

    albums.addAlbum(newAlbum);
    populateScreen(albums);
  });

  //fix gallery item height hack event listener
  $(window).on('resize', function() {
    // fixGalleryHeight();
  });

  // modal scripts
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

  //app initialization
  var albums = new Albums();
  albums.populate(data);
  populateScreen(albums);
});
