function showSurprise(element) {
  // Гарчигт гэрэлтэх эффект нэмэх
  element.classList.add('shine');

  // Гэнэтийн мессеж харуулах
  const surprise = document.getElementById('surprise');
  surprise.style.display = 'block';
}

// 💞 Зүрхэн бороо үүсгэх
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart-drop');
  heart.innerText = '💞';

  // Санамсаргүй байрлал, хэмжээ
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 10 + 20) + 'px';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // 3-5 сек

  document.body.appendChild(heart);

  // 5 сек дараа устгах
  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 300); // 0.3 сек тутам шинэ зүрх
