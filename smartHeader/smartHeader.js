function smartHeader() {
    var oldPosition = 0;
    var element = $('header');
    var nameClass = 'hide';
    var hideTop = false;

    this.setElement = function(el) {
        element = el;
    }

    this.setNameClass = function(name) {
        nameClass = name;
    }

    this.setHideTop = function(status) {
        if (status === true) {
            hideTop = true;
        } else {
            hideTop = false;
        }
    }

    jQuery(window).scroll(function() {
        var position = jQuery(document).scrollTop();
        if (position > oldPosition || (position === 0 && hideTop === true)) {
            $(element).addClass(nameClass)
        } else {
            $(element).removeClass(nameClass)
        }
        oldPosition = position;
    });
}