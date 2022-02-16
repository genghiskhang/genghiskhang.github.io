window.onload = function() {
    let images = document.images;
    for (var i = 0; i < images.length; i++) {
        if (images[i].naturalWidth == 0) {
            console.log('fail')
            images[i].src = '../assets/member-avatars/default-avatar.jpg';
        }
    }
}