(function($) {
	var $body = $('body').eq(0),
		cookieModeValue = document.cookie.replace(/(?:(?:^|.*;\s*)mode\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	



	/* Night Mode - I'M BATMAN. */
	var nightMode = function(){
		var $_btnNightmode = $('.js-nightmode');

		$_btnNightmode.on('click', function(){
			/* If nightmode is not active */
			if( !$body.hasClass('nightmode') ){
				$body.addClass('nightmode');
				
				$(this).attr('data-mode', 'night');

				document.cookie = "mode=night";

				/* I'm BATMAN. SHHHH! */
				console.log('https://media.giphy.com/media/3H9hk7soq1RBu/giphy.gif');
			} else {
				$body.removeClass('nightmode');
				$(this).attr('data-mode', 'day');

				document.cookie = "mode=day";
			}
		});
	};





	/* Show comments */
	var showComments = function(){
		var $_btnComments = $('.js-show-comments'),
			_isExpanded = $_btnComments.attr('aria-expanded') === 'false' ? false : true;

		$_btnComments.on('click', function(){
			if( !_isExpanded ){
				/* Create container element */
				$(this).after('<div class="post__comments" id="disqus_thread" />')
				

				/* Call Disqus script */
				$.ajax({
		                type: "GET",
		                url: "http://chrishrmnn.disqus.com/embed.js",
		                dataType: "script",
		                cache: true
		        });

		        /* Change aria-expanded to true */
		        $(this).attr('aria-expanded', true);
		        _isExpanded = true;
			}
		});
	};
	




	$(document).ready(function() {
		showComments();
		nightMode();


		/* Check mode */
		if( cookieModeValue == 'night' ){
			$body.addClass('nightmode');
			$('.js-nightmode').attr('data-mode', 'night');
		} else if ( cookieModeValue == 'day' ){
			$body.removeClass('nightmode');
			$('.js-nightmode').attr('data-mode', 'day');
		}
	});
})(jQuery);
