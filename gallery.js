// gallery.js

document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");
    let currentIndex = 0;

    function showImage(index) {
        galleryItems.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        showImage(currentIndex);
    }

    prevArrow.addEventListener("click", prevImage);
    nextArrow.addEventListener("click", nextImage);

    // Initial display
    showImage(currentIndex);
});
