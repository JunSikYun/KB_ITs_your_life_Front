document.addEventListener('DOMContentLoaded', function () {
  //click 이벤트 발생 시
  document.addEventListener('click', function (event) {
    //x, y 좌표 값
    const x = event.clientX;
    const y = event.clientY;
    //마우스 클릭하는 곳에 빨간 점을 만들기 위한 div 요소 생성
    let dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    //좌표 정보 표시를 위한 div 요소 생성
    let coords = document.createElement('div');
    coords.classList.add('coords');
    coords.textContent = `X: ${x}, Y: ${y}`;

    //다음 점과 좌표 생성을 위해 초기화
    let existingDot = document.querySelector('.dot');
    let existingCoords = document.querySelector('.coords');
    if (existingDot) existingDot.remove();
    if (existingCoords) existingCoords.remove();

    //화면에 표시
    document.body.appendChild(dot);
    document.body.appendChild(coords);
  });

  //마우스 움직이는 x, y 값을 console에 출력력
  document.addEventListener('mousemove', function (event) {
    console.log(`Mouse Move: X = ${event.clientX}, Y = ${event.clientY}`);
  });
});
