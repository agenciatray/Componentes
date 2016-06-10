function zoomAT(element) {
    this.box = element;
    this.lazy = $('.box-zoom .box-zoom-lazy');
    jq = jQuery;
    
    //__constructor
    var lazy_image = jq(this.lazy).attr('src');
    jq(element).css('background-image', "url('"+lazy_image+"')");
    jq(this.lazy).remove();
    
    // Change image
    this.setImage = function(urlImage) {
        jq(element).css('background-image', "url('"+urlImage+"')");
    }
    
    // Changes level of zoom
    jq(this.box).click(function(){
        jq(element).toggleClass('zoom-plus');
    });
    
    // OnHover show zoom
    jq(element).hover(function() {
        jq(element).addClass('active');
        jq(element).mousemove(function(e) {
            var parentOffset = jq(element).parent().offset();
            var relX = (100/jq(element).width())*e.pageX - parentOffset.left;
            var relY = (100/jq(element).height())*e.pageY - parentOffset.top;
            console.log('X: '+relX);
            console.log('Y: '+relY);
            jq(element).css('background-position', relX+'% '+relY+'%');
        });
    }, function() {
        jq(element).removeClass('active');
        jq(element).css('background-position', '50% 50%');
    });
}