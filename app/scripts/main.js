$(document).ready(function(){
	$('.arrow').on('click',function(){
		
	$('html','body').animate({
		scrollTop: $('.who').offset().top
	},1000);
});
	
	$('#check').on('click',function(){
		console.log('l');
		$('.check').toggleClass('active');
	})
	$("input[type=radio]").on('click',function(){
		
		var id=$(this).attr('id');
		var labels=[$("label[for=radio1]"),$("label[for=radio2]")]
		
		for (var i=0;i<labels.length;i++)
		labels[i].removeClass('activerb');
		
		$("label[for="+id+"]").addClass('activerb');
	})	
	
})






