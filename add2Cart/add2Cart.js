function add2Cart() {
    var lool = document.querySelectorAll("html");
    var minusButton = document.getElementsByClassName('add2_minus');
    var plusButton = document.getElementsByClassName('add2_plus');
    var quatityInput = document.getElementsByClassName('add2_quatity')
    var addButton = document.getElementsByClassName('add2_addCart');
    var showSucess = false;
    var showSucessElement = false;
    
    this.activeSuccess = function(el){
        showSucess = true;
        showSucessElement = el;
    }
    
    /* global function*/
    function addClass(el, className) {
        if (el.classList){
            el.classList.add(className);
        }else{
            el.className += ' ' + className;
        }
    }
    
    function removeClass(el, className) {
        if (el.classList){
            el.classList.remove(className);
        }else{
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
    
    /* onClick minus button */
    Array.prototype.forEach.call(minusButton, function(el, i) {
        el.addEventListener('click', function() {
            var motherDiv = el.parentNode;
            motherDiv.querySelector('.add2_quatity').stepDown(1);
        });
    });

    /* onClick plus button */
    Array.prototype.forEach.call(plusButton, function(el, i) {
        el.addEventListener('click', function() {
            var motherDiv = el.parentNode;
            motherDiv.querySelector('.add2_quatity').stepUp(1);
        });
    });

    function showDialog(){
        addClass(showSucessElement, 'active');
        setTimeout(function(){
            removeClass(showSucessElement, 'active');
        }, 2000);
    }

    Array.prototype.forEach.call(addButton, function(el, i) {
        el.addEventListener('click', function() {
            
            console.log(lool);
            var dataSession = lool[0].getAttribute("data-session");
            var productId = el.getAttribute("data-product-id");

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "/web_api/cart/",
                "method": "POST",
                "headers": {
                    "content-type": "application/json"
                },
                "processData": false,
                "data": "{\"Cart\":{\"session_id\":\""+dataSession+"\",\"product_id\":\""+productId+"\",\"quantity\":\"1\"}}"
            }
            
            console.log(settings);

            $.ajax(settings).done(function(response) {
                if(showSucess){
                    showDialog();
                }
            });
        });
    });
}