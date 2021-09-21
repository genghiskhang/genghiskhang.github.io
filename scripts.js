// window.addEventListener("load", event => {
//     for (var i = 0; i < document.images.length; i++) {
//         if (!document.images[i].complete && document.images[i].naturalHeight == 0) {
//             document.images[i].src = 'assets/default-avatar.jpg';
//         }
//     }
// }); 

var image = new Image();
image.onload = function() {
    if (!image.complete) {
        image.src = 'assets/default-avatar.jpg';
    }
}