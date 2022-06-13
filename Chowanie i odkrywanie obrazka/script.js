const arrowBtn = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fa-solid');
const img = document.querySelector('.item');

const showImg = () => {
  img.classList.toggle('hide');

  if (img.classList.contains('hide')) {
    arrowIcon.style.transform = 'rotate(180deg)';
  } else {
    arrowIcon.style.transform = 'rotate(0)';
  }
}

arrowBtn.addEventListener('click', showImg);