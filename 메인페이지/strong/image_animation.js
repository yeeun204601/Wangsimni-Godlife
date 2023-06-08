var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");
var image4 = document.getElementById("image4");
var image5 = document.getElementById("image5");
var image6 = document.getElementById("image6");

setInterval(function() {
  if (image1.style.display === "none") {
    image1.style.display = "block";
    image2.style.display = "none";
  }
  else {
    image1.style.display = "none";
    image2.style.display = "block";
  }
}, 1000);

setInterval(function() {
    if (image3.style.display === "none") {
      image3.style.display = "block";
      image4.style.display = "none";
    }
    else {
      image3.style.display = "none";
      image4.style.display = "block";
    }
  }, 1000);

  setInterval(function() {
    if (image5.style.display === "none") {
      image5.style.display = "block";
      image6.style.display = "none";
    }
    else {
      image5.style.display = "none";
      image6.style.display = "block";
    }
  }, 1000);