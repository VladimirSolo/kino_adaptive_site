const btn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const body = document.querySelector('body')

btn.addEventListener('click', ()=> {
  btn.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock')
})
// menu.addEventListener('click', ()=> {
//   menu.classList.toggle('active');
// })