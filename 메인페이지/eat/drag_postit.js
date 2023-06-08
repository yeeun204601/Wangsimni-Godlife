const items = Array.from(document.getElementsByClassName('conv'));

let activeItem = null;
let currentX, currentY, initialX, initialY, xOffset = 0, yOffset = 0;

// mousedown 이벤트 핸들러
function dragStart(e) {
  // 텍스트 요소인 경우 드래그 동작 막기
  if (!isDraggable(e.target)) {
    return;
  }

  // 드래그할 요소 지정
  activeItem = e.target;

  // 현재 위치 저장
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  // 이벤트 핸들러 등록
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", dragEnd);
}

//드래그 가능한 요소인지 확인하는 함수
function isDraggable(element) {
  return !['H2', 'P', 'STRONG', 'UL', 'LI'].includes(element.nodeName);
}

// mousemove 이벤트 핸들러
function drag(e) {
  if (activeItem) {
    e.preventDefault();

    // 현재 위치 계산
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    // 드래그할 요소의 위치 변경
    xOffset = currentX;
    yOffset = currentY;
    setTranslate(currentX, currentY, activeItem);
  }
}

// mouseup 이벤트 핸들러
function dragEnd(e) {
  // 이벤트 핸들러 제거
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", dragEnd);

  // 드래그 상태 해제
  activeItem = null;
}

// 요소의 위치 변경 함수
function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

// mousedown 이벤트 핸들러 등록
items.forEach((item) => {
  item.addEventListener("mousedown", dragStart);
});