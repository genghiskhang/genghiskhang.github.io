// window.onscroll = function(event) {
//     // console.log(document.body.scrollTop);
//     console.log(document.documentElement.scrollTop);
// };

$(document).on("scroll", function(event) {
    // console.log(document.documentElement.scrollTop);
    // console.log($(".navbar-link").length);
    // console.log($(".navbar-link").offset().top);
    // console.log($(document));
    var top = document.documentElement.scrollTop;
    console.log($("#about").offset().top);
    // if (top >= $("#about").offset().top())
});
// document.onmousemove = function (event) {
//     var mouseX = event.clientX;
//     var winWidth = document.documentElement.clientWidth;
    
//     if (mouseX <= Math.ceil(winWidth/10)) {
//         $("nav").addClass("open");
//     }
//     else {
//         $("nav").removeClass("open");
//     }
// }