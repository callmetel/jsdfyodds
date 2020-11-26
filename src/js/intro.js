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

	introTL.set(shutoff,
						{ alpha:1 }
					)
					.to(shutoff,
						{ duration:.25, scale:.35, ease: "power4.inOut" }
					)
					.to(progress,
						{ duration:.25, scale:0, height:0, ease: "power4.inOut" },
						.5
					)
					.to(shutoff,
						{ duration:.35, scale:0, ease: "power4.inOut", onComplete:startIntroVid },
						.6
					);

	function startIntroVid() {
		// $('#intro-vid')[0].play();
	}
});