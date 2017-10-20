// Soft scrolling
    $(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
        
        $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});




// First version of the Go to the top function 
/*
    $(function() {
    $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
    });
*/ 


