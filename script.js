const pirateImages = document.querySelectorAll(".pirate");
const audioElement = new Audio("luffy.mp3");

pirateImages.forEach(function (pirateImage) {
    pirateImage.addEventListener("click", function () {
        audioElement.play();
    });
});
