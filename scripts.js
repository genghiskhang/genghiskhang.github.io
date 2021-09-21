window.addEventListener("load", event => {
    var images = document.images;
    for (var i = 0; i < images.length; i++) {
        if (!images[i].complete && images[i].naturalHeight == 0) {
            images[i].src = 'assets/default-avatar.jpg';
        }
    }
}); 