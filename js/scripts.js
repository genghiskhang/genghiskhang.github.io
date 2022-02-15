window.onload = function() {
    var images = document.images;
    for (var i = 0; i < images.length; i++) {
        if (images[i].naturalWidth == 0) {
            images[i].src = '../assets/member-avatars/default-avatar.jpg';
        }
    }
}