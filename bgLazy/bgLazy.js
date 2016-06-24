function bgLazy(className = 'bglazy'){
    window.onload=function(){
        var backgrounds = document.getElementsByClassName(className);
        var num_backgrounds = backgrounds.length;
        for(i = 0; i < num_backgrounds; i++){
            backgrounds[i].setAttribute('style', '');
        }
    };
}