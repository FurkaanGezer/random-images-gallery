const container = document.querySelector(".container");

// YENİ SİTE LİNKİ (BU KALSIN DEDİN)
const imageURL = "https://picsum.photos/";

const rows = 1000;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${imageURL}${getRandomSize()}`;
  container.appendChild(img);
}

// RANDOM SAYI ÜRET
function getRandomNumber() {
  return Math.floor(Math.random() * 200) + 300;
}

// BOYUT STRING'İ OLUŞTUR
function getRandomSize() {
  return `${getRandomNumber()}/${getRandomNumber()}`;
}
