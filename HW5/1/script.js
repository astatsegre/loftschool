"use strict"

let accordeon = document.querySelector(".accordeon");

accordeon.addEventListener('click', (e) => {
    e.preventDefault();
    
    let target = e.target;
    
    if(target.tagName == 'A') {
    
    let aTag = document.querySelectorAll(".accordeon a");
    let contentList = document.querySelectorAll(".content > ul");
    let rectangle = document.querySelectorAll(".rectangle");
    
    for (let i = 0; i < aTag.length; i++) {
        aTag[i].classList.remove("active");
    };
    
    for (let i = 0; i < contentList.length; i++) {
        contentList[i].classList.remove("unhide");
    };
 
    for (let i = 0; i < rectangle.length; i++) {
        rectangle[i].classList.remove("rectangle-active");
    };
 
 
    target.classList.toggle("active");
    target.nextElementSibling.firstElementChild.classList.toggle("unhide");
    target.firstElementChild.classList.toggle("rectangle-active");

    }

    if (target.classList.contains('rectangle') == true) {

        target.parentNode.classList.toggle("active");
        target.parentNode.nextElementSibling.firstElementChild.classList.toggle("unhide");
        target.classList.toggle("rectangle-active");


    }
    
})



