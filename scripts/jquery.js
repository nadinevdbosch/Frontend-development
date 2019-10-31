//nav scrolling

$(document).ready(function() {
    
    var scrollink = $('#arrow');
    
    scrollink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop:$(this.hash).offset().top
        }, 1000)
        
    })
    
})