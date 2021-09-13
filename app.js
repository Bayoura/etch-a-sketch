const container_div = document.querySelector('.container');

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


