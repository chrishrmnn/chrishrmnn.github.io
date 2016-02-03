(function($) {
	var $body = $('body').eq(0);
	




	/* Night Mode - I'M BATMAN. 
		https://media.giphy.com/media/3H9hk7soq1RBu/giphy.gif
	*/
	var nightMode = function(){
		var $_btnNightmode = $('.js-nightmode');

		$_btnNightmode.on('click', function(){
			/* If nightmode is not active */
			if( !$body.hasClass('nightmode') ){
				$body.addClass('nightmode');
				
				$(this).attr('data-mode', 'night');

				console.log('https://media.giphy.com/media/3H9hk7soq1RBu/giphy.gif');
			} else {
				$body.removeClass('nightmode');
				$(this).attr('data-mode', 'day');
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
				$(this).after('<div class="post__comments" id="disqus_thread"></div>')
				

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
	});
})(jQuery);
