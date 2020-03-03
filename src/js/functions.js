jQuery(document).ready(function($) {
	var $social_links 	= $('#social-links'),
			$social_trigger = $('#social-links .social-trigger'),
			$social_icons 	= $('#social-links .social-icons');

	$social_trigger.click(function(e){
		e.preventDefault();
		$social_icons.animate({
      width: "toggle"
    });
    $social_trigger.toggleClass('closed');
	}).click();
});