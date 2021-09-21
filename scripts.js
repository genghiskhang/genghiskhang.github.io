window.addEventListener("load", event => {
    var image = document.querySelector('img');
    var isLoaded = image.complete && image.naturalHeight !== 0;
    if (!isLoaded) {
        image.src = 'assets/default-avatar.jpg';
    }
});