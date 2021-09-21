window.addEventListener("load", event => {
    for (var i = 0; i < document.images.length; i++) {
        if (!document.images[i].complete) {
            document.images[i].src = 'assets/default-avatar.jpg';
        }
    }
}); 