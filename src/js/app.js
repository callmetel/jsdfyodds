var $vid          = '/assets/vid/',
    $img          = '/assets/img/',
    preloaderloop = true,
    preloaderTL   = gsap.timeline({paused:true, repeat:-1, delay:0}),
    introTL       = gsap.timeline({paused:true, delay: 1}),
    scrollTL      = gsap.timeline({paused:true}),
    count         = 1,
    videosloaded  = false;

  
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
  parallaxIt(e, ".desktop", -25);
});

function parallaxIt(e, target, movement) {
  var $this = $(".desktop");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  gsap.to(target, {
    duration: 1,
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

var $cursor = $('.cursor'),
    $wrapper = $('.desktop'); 

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
 
