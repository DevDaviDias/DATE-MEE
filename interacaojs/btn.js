const button = document.getElementById('moving-button');

function moveButton() {
  const x = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
  button.style.left = x + 'px';
  button.style.top = y + 'px';
}

button.addEventListener('mouseover', function () {
  if (window.innerWidth > 1000 && window.innerHeight > 100 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    moveButton();
  }
});

button.addEventListener('click', function () {
    if (window.innerWidth <= 1000 || window.innerHeight <= 100) {
        moveButton();
    }
        
    
});

