// 이벤트 핸들러 등록하여 마우스 오버 시 int_img div 보이기
for (let i = 1; i <= 8; i++) {
    let locDiv = document.getElementById("loc" + i);
    let intImgDiv = document.getElementById("int_img" + i);
  
    locDiv.addEventListener("mouseover", function () {
      intImgDiv.style.display = "block";
    });
  
    locDiv.addEventListener("mouseout", function () {
      intImgDiv.style.display = "none";
    });
  
    intImgDiv.addEventListener("mouseover", function () {
      intImgDiv.style.display = "block";
    });
  
    intImgDiv.addEventListener("mouseout", function (event) {
      // Check if the mouse is outside the int_img div
      if (!intImgDiv.contains(event.relatedTarget)) {
        intImgDiv.style.display = "none";
      }
    });
  }
  