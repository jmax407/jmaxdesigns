var scroll = new SmoothScroll('a[href*="#"]');


$(function() {
//filter portfolio
$('.filter-btn').click(function() {

	//toggle active class
	$('.filter-btn').removeClass('active');
	$(this).addClass('active');

	//add remove elements from gallery
	var filterId = $(this).attr('data-filter');
	$('.project').removeClass('bounceInUp');
	$('.project').addClass('bounceOutDown');
	setTimeout(function() {
		$('.project').addClass('hide');
	}, 1000);

	if(filterId == 'all') {

		setTimeout(function() {
			$('.project').removeClass('bounceOutDown hide');
			$('.project').addClass('bounceInUp');

		}, 1000);
	} else {
		setTimeout(function() {
			$('.' + filterId).removeClass('bounceOutDown hide');
			$('.' + filterId).addClass('bounceInUp');
		}, 1000);
	}
});

});