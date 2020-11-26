
var $vid          = '/assets/vid/',
    $img          = '/assets/img/',
    $win          = $(window),
    $fs           = $('.fs'),
    preloaderloop = true,
    preloaderTL   = gsap.timeline({paused:true, repeat:-1, delay:0}),
    introTL       = gsap.timeline({paused:true, delay: 1}),
    scrollTL      = gsap.timeline({paused:true}),
    volumeTL      = gsap.timeline({paused:true}),
    count         = 1,
    videosloaded  = false,
    introgif, loopgif;

var progress,shutoff;

progress = '.progress-loader';
shutoff  = '.shut-off';

gsap.set(progress, {xPercent:-50, yPercent:-50, left:"50%", top:"50%"});
gsap.set(shutoff, {scale:0, xPercent:-50, yPercent:-50, left:"50%", top:"50%"});

// Check If Desktop or Mobile
if($win.width() > 767) {
  // Load Intro Videos into the DOM
  function loadVideos() {
    // if(videosloaded === false) {
    //   var req = new XMLHttpRequest();
    //   req.open('GET', $vid+'intro.mp4', true);
    //   req.responseType = 'blob';

    //   req.onload = function() {
    //      // Onload is triggered even on 404
    //      // so we need to check the status code
    //      if (this.status === 200) {
    //         var videoBlob = this.response;
    //         var vid = URL.createObjectURL(videoBlob); // IE10+
    //         // Video is now downloaded
    //         // and we can set it as source on the video element
    //         $('#intro-video').attr('src', vid);
    //         videosloaded = true;
    //      }
    //   }
    //   req.onerror = function() {
    //      // Error
    //   }
    //   req.send();

    //   var req2 = new XMLHttpRequest();
    //   req2.open('GET', $vid+'bg-loop.mp4', true);
    //   req2.responseType = 'blob';

    //   req2.onload = function() {
    //      // Onload is triggered even on 404
    //      // so we need to check the status code
    //      if (this.status === 200) {
    //         var videoBlob = this.response;
    //         var vid = URL.createObjectURL(videoBlob); // IE10+
    //         // Video is now downloaded
    //         // and we can set it as source on the video element
    //         $('#bg-loop').attr('src', vid);
    //      }
    //   }
    //   req2.onerror = function() {
    //      // Error
    //   }
    //   req2.send();
    // };
  }
  loadVideos();

  $("body").mousemove(function(e) {
    parallaxIt(e, "#background", -20);
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

  $win.resize(function(event) {
    $fs.height($(this).innerHeight());
  }).resize();
}
 
