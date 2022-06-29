const search = document.querySelector('.search')
const li = document.querySelectorAll('li');

const searchEngine = () => {

  li.forEach(item => {
    const match = new RegExp(search.value, 'i').test(item.textContent)
    if (!match) {
      item.style.display ='none'
    } else {
      item.style.display ='block'
    }
  })
}

search.addEventListener('keyup', searchEngine)
