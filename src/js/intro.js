jQuery(document).ready(function($) {
	introTL.to(".words-loader",
						{ duration:1, y:"-20%", ease: "power4.inOut"}
					)
					.to(".percentage-loader",
						{ duration:.5, y:"-50%", ease: "power4.inOut", delay:-.8}
					)
					.to(".words-loader",
						{ duration:.25, alpha:0, ease: "sine.in", delay:-.5}
					)
					.to(".percentage-loader",
						{ duration:.25, alpha:0, ease: "sine.in", delay:-.5}
					)
					.to("#preloader",
						{ duration:.25, alpha:0, ease: "sine.in", delay:-.25}
					)
					.add(function()
							{ 
								var $intro = $('#intro-video');

								$('#preloader').hide();
								$intro[0].play();

								$intro.on('ended',function(){
						      console.log('intro video ended');
						      $('#bg-loop')[0].play();
						      $intro.fadeOut(400);
						      $intro.hide();
						      scrollTL.play();
						    });
							}
					);

	var $scrollHeight;
	$(window).resize(function(){
		$scrollHeight = -Math.abs($(".scroll-indicator .line").height() + 10);
	}).resize();
	
	scrollTL.fromTo("#logo", {alpha:0}, {alpha:1, duration:.85})
					.fromTo(".scroll-indicator .line", {alpha:0}, {alpha:1, duration:.1, delay:.2})
					.fromTo(".scroll-indicator .line", {y: -$scrollHeight}, {y:0, ease: "power2.out", duration:.4})
					.fromTo(".scroll-indicator .hint", {alpha:0}, {alpha:1, ease: "sine.inOut", duration:.65});
});