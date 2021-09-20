const container_div = document.querySelector('.container');
const options_div = document.querySelector('.options');
const colorPicker_input = document.getElementById('colorPicker');
const eraser_button = document.getElementById('eraser');
const black_button = document.getElementById('black');
const random_button = document.getElementById('random');
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

container_div.addEventListener('mousedown', () => mouseDown = true);
container_div.addEventListener('mouseup', () => mouseDown = false); 

function setColor(color) {
    currentColor = color;
}

colorPicker_input.oninput = () => setColor(colorPicker_input.value);
eraser_button.onclick = () => setColor('white');
black_button.onclick = () => setColor('black');
random_button.onclick = () => setColor(getRandomColor());

gridItemList_div.forEach(gridItem_div => gridItem_div.addEventListener('mousemove', () => {    
    if (mouseDown) gridItem_div.style.background = currentColor;      
}));
   
gridItemList_div.forEach(gridItem_div => gridItem_div.addEventListener('click', () => gridItem_div.style.background = currentColor));

function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor;
}

// gridItemList_div.forEach(gridItem_div => gridItem_div.addEventListener('mousemove', () => {    
//     if (mouseDown) gridItem_div.style.background = colorInput();      
// }));
   
// gridItemList_div.forEach(gridItem_div => gridItem_div.addEventListener('click', () => gridItem_div.style.background = colorInput()));

