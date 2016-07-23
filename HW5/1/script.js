"use strict"

let accordeon = document.querySelector(".accordeon");

console.log(accordeon)

accordeon.addEventListener('click', function(e){
    e.preventDefault();
    
    let target = e.target;
    
    if(target.tagName != 'A') return;
    
    e.target.classList.toggle("active");
    e.target.nextElementSibling.firstElementChild.classList.toggle("unhide");
    e.target.firstElementChild.classList.toggle("rectangle-active");
    
})



