 var map;
      function initMap() {
		 map = new 
	   google.maps.Map($('#map'), {
		
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }


$(document).ready(function(){
	
	
	
	$('.arrow1').on('click',function(){
		
	$('html,body').animate({
		scrollTop:  $('.blog').offset().top
	},300);
});
		$('.arrow2').on('click',function(){
		
			
	$('html,body').animate({
		scrollTop:  $('.work-header').offset().top
	},300);
});$('.arrow-about').on('click',function(){
		
			
	$('html,body').animate({
		scrollTop:  $('.sec1').offset().top
	},300);
});
	$('.work-up').on('click',function(){
		console.log('jh');
	$('html,body').animate({
		scrollTop:  $('.work-header').offset().top
	},300);
});
	
	$('#log-check').on('click',function(){
		console.log('l');
		$('.log-check').toggleClass('active-check');
	})
	$("input[type=radio]").on('click',function(){
		
		var id=$(this).attr('id');
		var labels=[$("label[for=radio1]"),$("label[for=radio2]")]
		
		for (var i=0;i<labels.length;i++)
		labels[i].removeClass('activerb');
		
		$("label[for="+id+"]").addClass('activerb');
	})
	$('.login-buton-m').on('click',function(){
		
		$('.hello').toggleClass('hello-active');
		$('.hello2').toggleClass('hello-active');
		$('.login-buton').toggleClass('hello-active');
		
		
	});
	$('.login-log').on('click',function(){
	$('.non-log').removeClass('lnone');
			
			$('.non-log-t').removeClass('lnone');
		$('.non-pas').removeClass('pnone');
			
			$('.non-pas-t').removeClass('pnone');
		if ($('#log').val()=='')
			{
				$('form').addClass('inc-log')
				$('form').removeClass('c-log')

			}else{
				
				$('form').addClass('c-log')
				$('form').removeClass('inc-log')
			}
		if ($('#pas').val()=='')
			{
			$('form').addClass('inc-pas')
				$('form').removeClass('c-pas')

			}else{
				$('form').addClass('c-pas')
				$('form').removeClass('inc-pas')
			}
		
	});
	$('#log').on('click',function(){
		if ($('form').hasClass('inc-log')){
			$('.non-log').addClass('lnone');
			
			$('.non-log-t').addClass('lnone');
		}
	});
	$('#pas').on('click',function(){
		if ($('form').hasClass('inc-pas')){
			$('.non-pas').addClass('pnone');
			
			$('.non-pas-t').addClass('pnone');
		}
	});
	var work=$('.work-img'),r,l,a,f,worki=$('.work-item-l'),lenth=work.length;
	$('.down').on('click',function(e){
		e.preventDefault();
		for (var i=0;i<work.length;i++)
			{
			
						
					
					if (work.eq(i).hasClass('work-img-r'))
				{	r=i;}
				if (work.eq(i).hasClass('work-img-active'))
				{a=i;
				
				}
				if (work.eq(i).hasClass('work-img-l'))
				{l=i;
				
						
				}
				
			}
		
					worki.eq(a).removeClass('work-item-active');	worki.eq(l).addClass('work-item-active');
		work.eq(r).removeClass('work-img-r');
		work.eq(l).removeClass('work-img-l');
		work.eq(l).addClass('work-img-active');
	
		
		work.eq(a).removeClass('work-img-active');
		work.eq(a).addClass('work-img-r');
		work.eq(l-1).addClass('work-img-l');
	});
	$('.up').on('click',function(e){
		e.preventDefault();
		for (var i=0;i<work.length;i++)
			{
				if (work.eq(i).hasClass('work-img-r'))
				{r=i;}
				
				if (work.eq(i).hasClass('work-img-active'))
				{a=i;}
				if (work.eq(i).hasClass('work-img-l'))
					l=i;
				
			}
		
		worki.eq(r).addClass('work-item-active');
		work.eq(r).removeClass('work-img-r');
		work.eq(l).removeClass('work-img-l');
		work.eq(r).addClass('work-img-active');
	
		worki.eq(a).removeClass('work-item-active');
		work.eq(a).removeClass('work-img-active');
		if (r+1==lenth)
			r=-1;
		work.eq(r+1).addClass('work-img-r');
		work.eq(a).addClass('work-img-l');
	});
	
})






