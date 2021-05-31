(function($) {
  $(document).ready(function() {


	/* - AVATAR ANIMATIONS
	---------------------------------------------- */
	$leftEye = $('.left-eye');
	$rightEye = $('.right-eye');
	$rightEyebrow = $('.right-eyebrow');
	$leftEyebrow = $('.left-eyebrow');
	$rightEye.css('transform-origin','50% 50%');
	$leftEye.css('transform-origin','50% 50%');

	var delay = Math.floor(Math.random() * 8000) + 1000;

	function blink(){
		$rightEye.velocity({scaleY : 0.1},{delay:300, duration:0});
		$leftEye.velocity({scaleY : 0.1},{delay:300, duration:0});
		$rightEye.velocity({scaleY : 1},{delay:100, duration:0});
		$leftEye.velocity({scaleY : 1},{delay:100, duration:0});
		$rightEye.velocity({scaleY : 0.1},{delay:100, duration:0});
		$leftEye.velocity({scaleY : 0.1},{delay:100, duration:0});
		$rightEye.velocity({scaleY : 1},{delay:200, duration:0});
		$leftEye.velocity({scaleY : 1},{delay:200, duration:0});
		var blinking = setTimeout(blink,delay);
		delay = delay + 300;
	}
	blink();

	$('a.logo svg').on('mouseenter',function(){
		$rightEyebrow.velocity({translateY : -10},{delay:0, duration:300});
		$leftEyebrow.velocity({translateY : 2.5},{delay:0, duration:300});
	});
	$('a.logo svg').on('mouseleave',function(){
		$rightEyebrow.velocity({translateY:0},{delay:0, duration:200});
		$leftEyebrow.velocity({translateY:0},{delay:0, duration:200});
	});
    

  });
}(jQuery));
