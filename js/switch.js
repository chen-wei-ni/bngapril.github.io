$('.language-pack ul').hide()
$('.language-pack').click(function(e){
    e.stopPropagation();
    $('.language-pack ul').toggle(300, 'linear')
})
$("body").click(function(){
    $('.language-pack ul').hide()
})
$('.language-pack ul').click(function(e){
    e.stopPropagation();
})

$('.top_btn').hide();
		$(window).scroll(function() {
			var sh = $(window).scrollTop();
			
			if(sh > 1000) {
				$('.top_btn').show(500);
			}else {
				$('.top_btn').hide(500, 'swing');
			}
		});
		
		$('.top_btn').click(function() {
			$('html,body').animate({
				scrollTop : 0 //到最上面  
			}, 500);
		return false;
		});
        
/*const animate = document.querySelector('.effect');
animate.classList.add('heartbeat');
animate.addEventListener('animationend', () => {
animate.classList.remove('heartbeat');  
setTimeout(function(){
animate.classList.add('heartbeat');
},2000)
})*/