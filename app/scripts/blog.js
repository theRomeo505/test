$(document).ready(function () {
	var topics = $('.blog-name');
	var sd = $('.blog-sd-i');
	var art=$('.blog-article');

	window.onscroll = function () {
		
		if (window.scrollY > 715) {
			$('main.blog').addClass('fix');
		} else {
			$('main.blog').removeClass('fix');
		}

		$('.blog-sd-i').removeClass('sdactive');
		$(sd[0]).addClass('sdactive');
		for (var i=1;i<art.length;i++)
			{
				if (window.scrollY > $('.blog-article')[i].offsetTop-$('.blog-article').eq(i-1).height()/2) {
			$('.blog-sd-i').removeClass('sdactive');
			$(sd[i]).addClass('sdactive');
		}
			}

	}
	$('.header-burger').on('click',function(){
		$('body').addClass('burger-active');
		$('body').attr('scroll')='no';
	});
	$('.menu-burger-close').on('click',function(){
		$('body').removeClass('burger-active');
		$('body').attr('scroll')='no';
	});
})
