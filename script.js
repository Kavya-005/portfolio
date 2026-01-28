const text = document.querySelector('.animate-text');

window.addEventListener('load', () => {
  text.style.opacity = 0;
  text.style.transform = 'translateY(30px)';

  setTimeout(() => {
    text.style.transition = 'all 1s ease';
    text.style.opacity = 1;
    text.style.transform = 'translateY(0)';
  }, 300);
});
