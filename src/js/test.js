try {
	$('#main-content').ripples({
		resolution: 512,
		dropRadius: 22, //px
		perturbance: 0.05,
	});
	$('#background').ripples({
		resolution: 128,
		dropRadius: 8, //px
		perturbance: 0.05,
		interactive: false
	});
}
catch (e) {
	$('.error').show().text(e);
};

	// Automatic drops
	setInterval(function() {
		var $el = $('#background');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 35;
		var strength = 0.08 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 1500);

TweenMax.to("#turbwave", 2, {
  attr:{"baseFrequency":0.02},
  repeat:-1,
  yoyo:true,
  delay: -1
});
