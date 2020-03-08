jQuery(document).ready(function($) {
	var $intro = $('#intro-video'),
			introVidDur;

	if($win.width() > 767) {
		intro = $('#background .desktop #intro-video');
		introVidDur = intro[0].duration;
	}
	else {
		intro = $('#background .mobile .jsgif:eq(0)');
	};

	introTL.to(".words-loader",
						{ duration:1, y:"-20%", ease: "power4.inOut"}
					)
					.to(".percentage-loader",
						{ duration:.5, y:"-60%", ease: "power4.inOut", delay:-.8}
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
								if($(window).width() > 767) {
									var $intro = $('#intro-video');

									$('#preloader').hide();
									$intro[0].play();

									$intro.on('ended',function(){
							      console.log('intro video ended');
							      $('#bg-loop').show();
							      $('#bg-loop')[0].play();
							      $intro.fadeOut(400);
							      $intro.hide();
							      scrollTL.play();
							    });
							  }
							  else {
							  	var $intro = $('#background .mobile .jsgif:eq(0)');
									$('#preloader').hide();

									introgif.play();
									var checkIntroInt = setInterval(checkIntro, 10);

									function checkIntro() {
										// console.log(introgif.get_length());
										// console.log(introgif.get_current_frame());
										if(introgif.get_length()-1 == introgif.get_current_frame() ) {
											console.log('intro gif ended');
											clearInterval(checkIntroInt);
											$intro.fadeOut(400);
								      $intro.hide();
								      loopgif.play();
								      scrollTL.play();
										}
									}
							  }
							}
					)
					.fromTo(background, 
						{scale:0.1}, 
						{scale:1, duration: 4,5, ease: "expoScale(0.1, 1)"}
					);

	var $scrollHeight;
	$(window).resize(function(){
		$scrollHeight = -Math.abs($(".scroll-indicator .line").height() + 10);
	}).resize();
	
	scrollTL.fromTo("#logo", {alpha:0}, {alpha:1, duration:.85})
					.fromTo(".scroll-indicator .line", {alpha:0}, {alpha:1, duration:.1, delay:.2})
					.fromTo(".scroll-indicator .line", {y: -$scrollHeight}, {y:0, ease: "power2.out", duration:.4})
					.fromTo(".scroll-indicator .hint", {alpha:0}, {alpha:1, ease: "sine.inOut", duration:.65})
					.to("#main-header", {x:0, ease: "power2.out", duration:.25, delay:.15})
					.to("#social-links", {alpha:1, ease: "power2.out", duration:.35});
});