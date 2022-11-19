document.onmousemove = function (event) {
    var mouseX = event.clientX;
    var winWidth = document.documentElement.clientWidth;
    
    if (mouseX <= Math.ceil(winWidth/10)) {
        $("nav").addClass("open");
    }
    else {
        $("nav").removeClass("open");
    }
}