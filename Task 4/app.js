const toggleButton = document.querySelector('.nav__button');
const menuBody = document.querySelector('.menu__body');
toggleButton.addEventListener('click',() => {
    menuBody.classList.toggle('active');
})

    const button = document.querySelector('.send__massage');
    let textInput = document.querySelector('.write_comment');
    let massages = document.querySelector('.fan__massage');


button.addEventListener('click', addComent);
function addComent(event) {
event.preventDefault();

if(textInput.value.trim().length <10) {
    textInput.value = '';
    return;
};

    let massageItem = document
    .querySelector('.fan__massage__items')
    .cloneNode(true);

    let massageText = massageItem.querySelector('.fan__comment__text');


    massageText.innerHTML =`${textInput.value}`;
    massageItem.querySelector('h2').innerHTML = "Fan letters:";
    massageItem.querySelector('.data').innerHTML = getCurrenDate();
    
    massages.append(massageItem);
    textInput.value = '';
}
// const button = document.querySelector('.send__massage')
// const container = document.querySelector('.fan__massage__items')
// let input = document.querySelector('.write_comment')

// console.log(button, input)

// button.addEventListener('click', (event) => {
//   const child = document.createElement('div')
//   child.innerHTML = input.value
//   container.appendChild(child)
//   input.value = ''
// })

function getCurrenDate(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = date+' '+time;
    return dateTime
}
