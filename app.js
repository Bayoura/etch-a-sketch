const container_div = document.querySelector('.container');
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

//---------------------------------------MOUSEDOWN PEN------------------------------------------- 
container_div.addEventListener('mousedown', () => mouseDown = true);
container_div.addEventListener('mouseup', () => mouseDown = false); 
 
gridItemList_div.forEach(gridItem_div => gridItem_div.addEventListener('mousemove', () => {    
    if (mouseDown) gridItem_div.style.background = 'black';      
}));
   
gridItemList_div.forEach(gridItem_div => gridItem_div.addEventListener('click', () => gridItem_div.style.background = 'black'));
