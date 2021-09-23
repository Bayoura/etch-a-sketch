const container_div = document.querySelector('.container');
const colorPicker_input = document.getElementById('color-picker');
const black_button = document.getElementById('black');
const eraser_button = document.getElementById('eraser');
const random_button = document.getElementById('random');
const fillGrid_button = document.getElementById('fill-grid');
const clear_button = document.getElementById('clear-grid');
const toggleBorders_button = document.getElementById('toggle-borders');
const defaultColor = 'black';

let currentColor = defaultColor;
let mouseDown = false;

function changeGridSize(userInput) {
    for (let i = 0; i < userInput * userInput; i++) {
        const gridItem_div = document.createElement('div');
        gridItem_div.className = 'grid-item';
        container_div.appendChild(gridItem_div);
    }
    container_div.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
}

changeGridSize(16);

const gridItemList_div = document.querySelectorAll('.grid-item');
const gridItem_div = document.querySelector('.grid-item');

//---------------------------------------DRAWING-FUNCTIONS-------------------------------------------

window.addEventListener('mousedown', () => mouseDown = true);
window.addEventListener('mouseup', () => mouseDown = false); 

function draw() {
    gridItemList_div.forEach(gridItem_div => gridItem_div.addEventListener('mousemove', () => {        
        if (mouseDown) gridItem_div.style.background = currentColor;
    }));
    gridItemList_div.forEach(gridItem_div => gridItem_div.addEventListener('click', () => gridItem_div.style.background = currentColor));
}

function setColor(color) {
    currentColor = color;
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${r}, ${g}, ${b})`; 
    return randomColor;
}

colorPicker_input.oninput = () => setColor(colorPicker_input.value);
black_button.onclick = () => setColor('black');
eraser_button.onclick = () => setColor('white');
random_button.onclick = () => setColor(getRandomColor());
fillGrid_button.onclick = () => gridItemList_div.forEach(gridItem_div => gridItem_div.style.background = currentColor);
clear_button.onclick = () => gridItemList_div.forEach(gridItem_div => gridItem_div.style.background = 'white');
toggleBorders_button.onclick = () => gridItemList_div.forEach(gridItem_div => gridItem_div.classList.toggle('no-border'));

draw();

//more features: scale grid
//test different browser, add browser prefix (user-select and transition);