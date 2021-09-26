const btntoggle = document.querySelector('.button-toggle');
const formtoggle = document.querySelector('.toggle');
const donebutton = document.querySelectorAll('.done');
const element = document.querySelectorAll('.to-do-element')



btntoggle.addEventListener('click', () => {
    formtoggle.classList.toggle('toggle')
})

for(let i = 0; i < donebutton.length; i++){
    donebutton[i].addEventListener('click', () =>  {
        element[i].style.borderColor = 'green'
    })
}