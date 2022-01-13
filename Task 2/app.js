let bigHeader = document.querySelector('h1');
bigHeader.style.background = "lightgreen";

let paragraph = document.getElementsByTagName('p');
let firstParagraph = paragraph[0].style.fontWeight = 'bold';
let secondParagraph = paragraph[1].style.color ='red';
    
let thirdParagraph = paragraph[2].style.textDecoration ='underline';
let fourthParagraph = paragraph[3].style.fontStyle ='italic';

let myList = document.querySelector('#myList');
// console.log(myList.children)
// console.log(myList)
myList.style.display = 'flex';
myList.style.margin = 0;
myList.style.listStyle ='none';

let span = document.querySelector('span');
span.style.display ='none';