import data from './data.js'
const card = document.getElementById('card')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const cardImg = document.querySelector('.card__img')
const cardBody = document.querySelector('.card__body')

let index = 0
const cargar = () => {
  cardImg.classList.add('right')
  cardImg.addEventListener('transitionend', () => {
    cardImg.setAttribute('src', data[index].img)
    cardImg.setAttribute('alt', data[index].name)
    cardImg.classList.remove('right')
  })
  cardBody.classList.add('left')
  cardBody.addEventListener('transitionend', () => {
    cardBody.children[0].textContent = `${data[index].desciption}`
    cardBody.children[1].textContent = `${data[index].name}`
    cardBody.children[2].textContent = `${data[index].work}`
    cardBody.classList.remove('left')
  })
}
next.addEventListener('click', () => {
  index++
  if (index >= data.length) {
    index = 0
  }
  cargar()
})
prev.addEventListener('click', () => {
  index--
  if (index < 0) {
    index = data.length-1
  }
  console.log(index)
  cargar()
})
const Incio = () => {
   card.children[0].children[0].setAttribute('src', data[index].img)
  card.children[1].children[0].textContent = `${data[index].desciption}`
  card.children[1].children[1].textContent = `${data[index].name}`
  card.children[1].children[2].textContent = `${data[index].work}`
  
}
window.addEventListener('DOMContentLoaded',Incio)