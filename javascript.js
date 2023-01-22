function clearDiv(){
    
    for (let i = 1 ; i <=(cells*cells); i++){
        const content = document.querySelector('.grid');
        content.remove();
    }

}

function sizeCheck(){
    
    let i = 0;

    while (i>=0){
        cells = prompt('Enter the Grid size (1 to 100):');
        if (cells >100){
            continue;
        }else{
            break;
        }
    }

    return cells;
    
}


function createGrid (){

    for (let i = 1 ; i <=(cells*cells); i++){
        const content = document.createElement('div');
        content.classList.add('grid');
        container.appendChild(content);
    }

    container.style.setProperty('--cols', (Math.sqrt(container.children.length)));
    color();
    
}

function color(){

    const hover = document.querySelectorAll('.grid');
    const black = document.querySelector('.black');
    const RGB = document.querySelector('.rainbow');
    const erase = document.querySelector('.erase');


    hover.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            black.addEventListener('click',blackColor);
            RGB.addEventListener('click',randomColor);
            cell.classList.add('hover-black');
            erase.addEventListener('click',eraser);
        });
    });
}

function blackColor(){

    const hover = document.querySelectorAll('.grid');

    hover.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.removeProperty('background-color');
            cell.classList.add('hover-black'); 
        });
    });
}


function randomColor(){

    const randColor = document.querySelectorAll('.grid');

    randColor.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = rgbGenerate();
        });
    });

}

function rgbGenerate(){

    let x = Math.ceil(Math.random() *256);
    let y = Math.ceil(Math.random() *256);
    let z = Math.ceil(Math.random() *256);

    let color = 'rgb(' + x + ',' + y + ',' + z + ')';
    return color;
}

function eraser(){

    const hover = document.querySelectorAll('.grid');

    hover.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.removeProperty('background-color');
            cell.classList.remove('hover-black'); 
        });
    });

}

function resetGrid(){
    
    const divs = document.querySelectorAll('.grid');      
    divs.forEach((cells) =>{
            cells.style.removeProperty('background-color');
            cells.classList.remove('hover-black')
    
        
    });
}    

let cells = 0;
const container = document.querySelector('.container');
sizeCheck();
createGrid();



const size = document.querySelector('.size');

size.addEventListener('click',() => {
    clearDiv();
    sizeCheck();
    createGrid();
})

const reset = document.querySelector('.reset');

reset.addEventListener('click', resetGrid);
        


