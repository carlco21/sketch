const body = document.querySelector('body');
const container = document.querySelector('.container');
const resetButton = document.createElement('button');

body.style['background-color'] = 'rgb(219, 219, 219)';
container.setAttribute('style', `display: grid;
                                 position: relative;
                                 top: 5%;
                                 left: 29%;
                                 background-color: rgb(235,235,235);
                                 padding: 1px;
                                 border: 1px solid;
                                 border-radius: 5px;
                                 box-shadow: rgba(0,0,0,2) 0px 3px 8px;
                                 min-width:90vh;
                                 max-width: 90vh;
                                 min-height: 80vh;
                                 max-height: 80vh;`);

function createAndAppendGrids(defaultDim=16){
    const grid = document.createElement('div');
    grid.classList.toggle('grid-items');
    container.style['grid-template-columns'] = 'auto '.repeat(defaultDim);
    container.style['grid-template-rows'] = 'auto '.repeat(defaultDim);
    grid.style['border'] = '0.1px solid rgba(0,0,0,0.6)';
    if(defaultDim <= 22){
        grid.style['padding'] = '10px';
    } else if (defaultDim > 22 && defaultDim <= 30) {
        grid.style['padding'] = '7px';
    } else {
        grid.style['padding'] = '1px';

    }
    container.appendChild(grid);
}


function addGridEffects() {
    let grids = document.querySelectorAll('.grid-items');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', function(e) {
            //e.target.style['background-color'] = randomizedRGB();
            e.target.style['background-color'] = 'black';
        });   
    });
}

function randomizedRGB() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let dim = 16;
for (let i = 0; i < dim * dim; i++) {
    createAndAppendGrids(dim);
}
addGridEffects();

resetButton.textContent = 'Reset Grid';
resetButton.setAttribute('style', `position: relative;
                                   font-family: calibri;
                                   padding: 6px;
                                   top: -85%;
                                   left: 47%;
                                   border-radius: 4px;
                                   text-shadow: 0 1px 1px rgba(0,0,0,0.2)`);
resetButton.addEventListener('click', function(){
    let grids = document.querySelectorAll('.grid-items');
    grids.forEach(grid => {
        grid.style['background-color'] = '';
    });
    container.innerHTML = "";
    let newDim = prompt('Enter new size (ex: 16)');
    if(newDim == null) {
        newDim = 16;
    }
    while(newDim < 16 || newDim > 100 || isNaN(newDim)) {
        newDim = prompt('Enter new size (must be more than 16 and less than 100)');
        if(newDim==null){
            newDim = 16;
            break;
        }
    }
    for(let i=0; i<newDim * newDim; i++) {
        createAndAppendGrids(newDim);
    }
    addGridEffects();
});

body.appendChild(resetButton);