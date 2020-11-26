jQuery(document).ready(function($) {

	var perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
  	EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
  	time = parseInt((EstimatedTime/1000)%60)*100;

	// Percentage Increment Animation
	var PercentageID = $("#percent"),
			start = 0,
			end = 100,
			durataion = time;
			animateValue(PercentageID, start, end, durataion);


	function animateValue(id, start, end, duration) {
	  
		var range = end - start,
	      current = start,
	      increment = end > start? 1 : -1,
	      stepTime = Math.abs(Math.floor(duration / range)),
	      obj = $(id),
	      bar = $('.progress-loader');

	  bar.width = current;
	    
		var timer = setInterval(function() {
			if(current < end-1) {
				current += increment;
				$(obj).text(current + "%");	
				bar.animate({
					width: current/2+ "%",
					height: current/2+ "%"
				}, 10);
			}
			else if (current == end-1 /*&& videosloaded == true*/) {
				$(obj).text(current+1 + "%");
				bar.animate({
					width: current/2+1+ "%",
					height: current/2+1+ "%"
				}, 10);
				preloaderloop = false;

				console.log('preloader finished');
				console.log('start intro');
				introTL.play();
				clearInterval(timer);
			}
		}, stepTime);
	}
});