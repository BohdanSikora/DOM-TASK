const toggleButton = document.querySelector('.nav__button');
const menuBody = document.querySelector('.menu__body');
toggleButton.addEventListener('click',() => {
    menuBody.classList.toggle('active');
})
let button = document.getElementById('myBtn').addEventListener('click', buttonSend)
function buttonSend() {
    let massage = document.getElementById('myInput').value;
document.querySelector('.p-first').innerHTML = massage;
}


  