const body = document.querySelector('body');
const container = document.querySelector('.container');
container.setAttribute('style', `display: grid;
                                 background-color: rgb(188,188,255);
                                 padding: 7px;`);

function createAndAppendGrids(){
    const grid = document.createElement('div');
    grid.classList.toggle('grid-items');
    container.style['grid-template-columns'] = 'auto '.repeat(50);
    container.style['grid-template-rows'] = 'auto '.repeat(50);
    grid.setAttribute('style', `border: 0.5px solid rgba(0,0,0,0.8);
                                padding: 20px;`);
    container.appendChild(grid);
}
function rowsCols(n){
    container.style['grid-template-columns'] = 'auto'.repeat(n);
    container.style['grid-template-rows'] = 'auto'.repeat(n);
}
for (let i = 0; i < 50 * 50; i++) {
    createAndAppendGrids();
}

