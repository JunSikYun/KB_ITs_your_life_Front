//갤러리 이미지 요소 선택
const images = document.querySelectorAll('.gallery-image');
//이전, 다음 버튼 요소 선택
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

//이미지를 넘기기 위한 인덱스
let currentIndex = 0;

function updateGallery(index) {
  //현재 인덱스와 일치하는 이미지에만 active 클래스 추가
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

//이전 버튼
prevButton.addEventListener('click', () => {
  //처음에 이전 누르면 마지막 이미지로
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  updateGallery(currentIndex);
});

//다음버튼
nextButton.addEventListener('click', () => {
  //마지막에 다음 누르면 처음이미지로
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  updateGallery(currentIndex);
});

updateGallery(currentIndex);
