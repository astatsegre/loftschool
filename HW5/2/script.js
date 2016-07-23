"use strict"

let button = document.body.querySelector('button'),
    activeElement,
    offsetX = 0,
    offsetY = 0;

button.addEventListener('click', (e) => {
    
    let div = document.createElement('div');
    
    div.style.width = `${Math.random() * (500 - 5) + 5}` + 'px';
    div.style.height = `${Math.random() * (500 - 5) + 5}` + 'px';
    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * (255 - 1)) + 1},${Math.floor(Math.random() * (255 - 1)) + 1},${Math.floor(Math.random() * (255 - 1)) + 1})`;
    div.style.position = 'absolute';
    div.style.top = `${Math.random() * (800 - 5) + 5}` + 'px';
    div.style.left = `${Math.random() * (1000 - 5) + 5}` + 'px';
    
    document.body.appendChild(div);
});

document.addEventListener('mousedown', (e) => {
    activeElement = e.target;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    console.log(activeElement);
})

document.addEventListener('mouseup', (e) => {
    activeElement = undefined;
    console.log(activeElement);
})

document.addEventListener('mousemove', (e) => {
    activeElement.style.top = e.clientY - offsetY + 'px';
})




