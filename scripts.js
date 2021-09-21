window.addEventListener("load", event => {
    for (var i = 0; i < document.images.length; i++) {
        console.log(document.images[i].complete);
        if (!document.images[i].complete) {
            document.images[i].src = 'assets/default-avatar.jpg';
        }
    }
}); 