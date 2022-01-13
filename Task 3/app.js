
let myBtn = document.getElementById('myBtn');
myBtn.addEventListener('click', clickFunction);
myBtn.addEventListener('mouseover', mouseoverFunction);
myBtn.addEventListener('mouseout', mouseoutFunction);
function clickFunction() {
    document.getElementById('text').innerHTML += "I was pressed!<br>"
  }
function mouseoverFunction() {
    document.getElementById('text').innerHTML += "Mouse on me!<br>"
}
function mouseoutFunction() {
    document.getElementById('text').innerHTML += "Mouse is not on me!<br>"
}
