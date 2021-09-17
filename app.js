const container_div = document.querySelector('.container');
let isClicked = false;

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
container_div.addEventListener('mousedown', () => isClicked = true);
container_div.addEventListener('mouseup', () => isClicked = false); 

 gridItemList_div.forEach(gridItem_div => gridItem_div.addEventListener('mousemove', () => {
     if (isClicked) gridItem_div.style.background = 'black';   
    }));
//---------------------------------------TOGGLE PEN-------------------------------------------  

// container_div.addEventListener('click',() => togglePainting() );

// function togglePainting() { 
//     if (!isClicked) yay();  
//     else nay();      
// }

// function yay() {
//     gridItemList_div.forEach(gridItem_div => gridItem_div.addEventListener('mouseover', penActive));
//     isClicked = true;
//     console.log(isClicked);
// }

// function nay() {
//     gridItemList_div.forEach(gridItem_div => gridItem_div.removeEventListener('mouseover', penActive));       
//     isClicked = false;      
//     console.log(isClicked);
// }

// function penActive(e) {
//     e.target.style = 'background-color: black';
// }

