var $vid          = '/assets/vid/',
    $img          = '/assets/img/',
    preloaderloop = true,
    preloaderTL   = gsap.timeline({paused:true, repeat:-1, delay:0}),
    introTL       = gsap.timeline({paused:true, delay: 1}),
    scrollTL      = gsap.timeline({paused:true}),
    count         = 1,
    videosloaded  = false,
    introgif, loopgif;

jQuery(document).ready(function($) {
  
});
// Check If Desktop or Mobile
if($(window).width() > 767) {
  // Load Intro Videos into the DOM
  function loadVideos() {
    if(videosloaded === false) {
      var req = new XMLHttpRequest();
      req.open('GET', $vid+'intro.mp4', true);
      req.responseType = 'blob';

      req.onload = function() {
         // Onload is triggered even on 404
         // so we need to check the status code
         if (this.status === 200) {
            var videoBlob = this.response;
            var vid = URL.createObjectURL(videoBlob); // IE10+
            // Video is now downloaded
            // and we can set it as source on the video element
            $('#intro-video').attr('src', vid);
            videosloaded = true;
         }
      }
      req.onerror = function() {
         // Error
      }
      req.send();

      var req2 = new XMLHttpRequest();
      req2.open('GET', $vid+'bg-loop.mp4', true);
      req2.responseType = 'blob';

      req2.onload = function() {
         // Onload is triggered even on 404
         // so we need to check the status code
         if (this.status === 200) {
            var videoBlob = this.response;
            var vid = URL.createObjectURL(videoBlob); // IE10+
            // Video is now downloaded
            // and we can set it as source on the video element
            $('#bg-loop').attr('src', vid);
         }
      }
      req2.onerror = function() {
         // Error
      }
      req2.send();
    };
  }
  loadVideos();

  $("body").mousemove(function(e) {
    parallaxIt(e, "#main-content", -25);
  });

  function parallaxIt(e, target, movement) {
    var $this = $("#main-content");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    gsap.to(target, {
      duration: 1,
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
}
else {
  $('.desktop').hide();

  // Load Intro Gifs into the DOM
  function loadGifs(){
    $('#background .mobile').prepend('<script src="dist/vendor/libgif.js"></script>');
    $('#background .mobile').prepend('<script src="dist/vendor/rubbable.js"></script>');
    $('#intro-video-mobile').attr('src',$vid+'intro.gif');
    $('#bg-loop-mobile').attr('src',$vid+'bg-loop.gif');

    introgif = new SuperGif({ gif: document.getElementById('intro-video-mobile'), loop_mode: false, auto_play: 0 } );
    introgif.load(function(){
      console.log('intro gif loaded');
      introgif.pause();
      introgif.move_to(0);
      videosloaded = true;
    });

    loopgif = new SuperGif({ gif: document.getElementById('bg-loop-mobile'), loop_mode: true, auto_play: 0 } );
    loopgif.load(function(){
      console.log('loop gif loaded');
      loopgif.move_to(0);
    });
  } 
  loadGifs();
};

var $cursor = $('.cursor'),
    $wrapper = $('#main-content'); 

  function movecursor(e) {
    gsap.to($cursor, {
      duration: 0.3,
      css: {
        left: e.pageX,
        top: e.pageY
      }
    });
  }

var flag = false;
$($wrapper).mouseover(function(){
  flag = true;
  gsap.to($cursor,{duration:0.4,scale:1,autoAlpha:1})
  $($wrapper).on('mousemove', movecursor);
});
$($wrapper).mouseout(function(){
    flag = false;
    gsap.to($cursor,{duration:0.4,scale:0.1,autoAlpha:0})
});
 
