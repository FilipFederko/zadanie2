var headingEl = document.getElementById("heading")
headingEl.innerHTML = "All about cats";
var nameEls = document.getElementsByTagName("span")
console.log(nameEls) 
 for (var i = 0; i < nameEls.length; i++) {
 nameEls[i].innerHTML = "cat"
 } 

let input = document.querySelector("#input")

function myEvent(){
    let myText = input.value 
    let par = document.querySelector("#par")
    par.innerHTML = myText
}

