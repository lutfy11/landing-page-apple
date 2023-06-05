window.addEventListener('load', () => {
  const img = document.querySelector('.header-content img');
  img.classList.add('on');
  const i = document.querySelector('.whites');
  i.style.opacity = '0';
  i.addEventListener('transitionend', () => i.remove());
});

window.addEventListener('scroll', () => {
  const imgZero = document.querySelector('.overviews .zero');
  const imgSatu = document.querySelector('.overviews .satu');
  const overviews = document.querySelector('.overviews');
  const triger = window.scrollY + 300;
  if (triger > overviews.offsetTop && triger < (overviews.offsetTop + overviews.offsetHeight + 200)) {
    const pos = triger - overviews.offsetTop;
    imgZero.style.left = `-${pos / 7.14}px`;
    imgSatu.style.left = `${pos / 7.14}px`;
    imgZero.previousElementSibling.style.transform = `translate(-${pos / 7.14}px)`;
    imgSatu.nextElementSibling.style.transform = `translate(${pos / 7.14}px)`;
  }
});
