const images = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 스크립트로 이미지 엘리먼트 생성
const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
