document.addEventListener("DOMContentLoaded", function() {
    const liImages = document.querySelectorAll("nav li img");

    liImages.forEach(function(liImage) {
      liImage.addEventListener("click", function() {
        const target = this.parentElement.getAttribute("href");
        window.location.href = target;
      });
    });
  });