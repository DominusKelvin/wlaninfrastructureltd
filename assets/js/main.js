var openPhotoSwipe = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: 'assets/images/new/team.jpg',
          w: 964,
          h: 1024
      },
      {
          src: 'assets/images/new/building_vsat3.jpg',
          w: 964,
          h: 1024
      },
      {
          src: 'assets/images/new/team3.jpg',
          w: 964,
          h: 1024
      },
      {
          src: 'assets/images/new/vsat1.jpg',
          w: 964,
          h: 1024
      },
      {
          src: 'assets/images/new/vsat5.jpg',
          w: 964,
          h: 1024
      },
      {
          src: 'assets/images/new/vsat7.jpg',
          w: 964,
          h: 1024
      },
      {
          src: 'assets/images/new/team2.jpg',
          w: 964,
          h: 1024
      },
      {
          src: 'assets/images/new/team2.jpg',
          w: 1024,
          h: 683
      },
      {
          src: 'assets/images/vision.jpg',
          w: 964,
          h: 1024
      }
  ];
  
  // define options (if needed)
  var options = {
    // history & focus options are disabled on CodePen        
      history: false,
      focus: false,

      showAnimationDuration: 0,
      hideAnimationDuration: 0
      
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

document.getElementById('photoswipe').onclick = openPhotoSwipe;