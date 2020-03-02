jQuery(document).ready(function($) {	

	var words = $('.words-loader .word');

	for (var i = 0; i <= words.length; i++) {
		var num = i+1;
		$('.words-loader .word:eq('+i+')').addClass('word-'+num);
	}

	var currWord,nextWord;
	function updateCurrWords(index) {
		currWord = $(".word-"+index);
		if(index == 6){
			var nextindex = String(parseInt(index)-5);
			nextWord = $(".word-"+nextindex);
		}
		else {
			var nextindex = String(parseInt(index)+1);
			nextWord = $(".word-"+nextindex);
		};
	}

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
	      obj = $(id);
	    
		var timer = setInterval(function() {
			if(current < end-1) {
				current += increment;
				$(obj).text(current + "%");	
			}
			else if (current == end-1 && videosloaded == true) {
				$(obj).text(current+1 + "%");
				preloaderloop = false;

				preloaderTL.pause();
				console.log('preloader finished');
				gsap.to(currWord, { duration:.1, alpha:0, ease: "expo.out" });
				gsap.to(nextWord, { duration:.1, alpha:1, ease: "expo.out" });
				console.log('start intro');
				introTL.play();

				clearInterval(timer);
			}
		}, stepTime);
	}

	preloaderTL.to(".words-loader .word-1", 
								{ duration:.075, alpha:1, ease: "expo.out", onComplete: updateCurrWords, onCompleteParams: ["1"] }
							)
							.to(".words-loader .word-1", 
											{ duration:.075, alpha:0, ease: "expo.out", delay:.15 }
										)
							.fromTo(".words-loader .word-2", 
											{ alpha:0, ease: "expo.out" }, 
											{ duration:.075, alpha:1, ease: "expo.out", onComplete: updateCurrWords, onCompleteParams: ["2"] }
										)
							.to(".words-loader .word-2", 
											{ duration:.075, alpha:0, ease: "expo.out", delay:.15 }
										)
							.fromTo(".words-loader .word-3", 
											{ alpha:0, ease: "expo.out" }, 
											{ duration:.075, alpha:1, ease: "expo.out", onComplete: updateCurrWords, onCompleteParams: ["3"] }
										)
							.to(".words-loader .word-3", 
											{ duration:.075, alpha:0, ease: "expo.out", delay:.15 }
										)
							.fromTo(".words-loader .word-4", 
											{ alpha:0, ease: "expo.out" }, 
											{ duration:.075, alpha:1, ease: "expo.out", onComplete: updateCurrWords, onCompleteParams: ["4"] }
										)
							.to(".words-loader .word-4", 
											{ duration:.075, alpha:0, ease: "expo.out", delay:.15 }
										)
							.fromTo(".words-loader .word-5", 
											{ alpha:0, ease: "expo.out" }, 
											{ duration:.075, alpha:1, ease: "expo.out", onComplete: updateCurrWords, onCompleteParams: ["5"] }
										)
							.to(".words-loader .word-5", 
											{ duration:.075, alpha:0, ease: "expo.out", delay:.15 }
										)
							.fromTo(".words-loader .word-6", 
											{ alpha:0, ease: "expo.out" }, 
											{ duration:.075, alpha:1, ease: "expo.out", onComplete: updateCurrWords, onCompleteParams: ["6"] }
										)
							.to(".words-loader .word-6", 
										{ duration:.075, alpha:0, ease: "expo.out", delay:.15 }
									);
	preloaderTL.play();
});