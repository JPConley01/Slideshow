$(document).ready(function(){


	var timeOut = null;

	$('.next').click(function(e,simulated){



		if(!simulated){

			// A real click occured. Cancel the
			// auto advance animation.

			clearTimeout(timeOut);
			timeOut = setTimeout(autoAdvance(), 10000)
		}
	});

	// A self executing named function expression:

	function autoAdvance(){

		// Simulating a click on the next arrow.
		$('.next').trigger('click',[true]);

		// Schedulling a time out in 5 seconds.
		timeOut = setTimeout(autoAdvance,5000);
	};
	autoAdvance();
});
