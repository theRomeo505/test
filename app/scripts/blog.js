$(document).ready(function () {
	var topics = $('.name');
	var sd = $('.sd-i');
	var art=$('.article');

	window.onscroll = function () {
		
		if (window.scrollY > 715) {
			$('main').addClass('fix');
		} else {
			$('main').removeClass('fix');
		}

		$('.sd-i').removeClass('sdactive');
		$(sd[0]).addClass('sdactive');
		for (var i=1;i<art.length;i++)
			{
				if (window.scrollY > $('.article')[i].offsetTop-$('.article').eq(i-1).height()/2) {
			$('.sd-i').removeClass('sdactive');
			$(sd[i]).addClass('sdactive');
		}
			}

	}

})
