/* 
   L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui    ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
   con difficoltà 1 => tra 1 e 100
   con difficoltà 2 => tra 1 e 81
   con difficoltà 3 => tra 1 e 49
   Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */

const btn = document.getElementById('set-difficulty');
const difficultiesLevel = document.getElementById('difficulties');
const wrapGrid= document.querySelector('.wrap-grid');

btn.addEventListener('click', () => {
    // reset content
    wrapGrid.innerHTML = '';
    // set grid dimension
    const GridDimension = difficultiesLevel.value;
    console.log(GridDimension);
    let cellsNumber;
    let cellsPerSide;
    
    switch (GridDimension) {
        case '1': 
            cellsNumber = 100;
            cellsPerSide = 10;
            break;
    
        case '2':
            cellsNumber = 81;
            cellsPerSide = 9;
            break;
        
        case '3':
            cellsNumber = 49;
            cellsPerSide = 7;
    }
    console.log(cellsNumber);
    console.log(cellsPerSide);

    // creazione griglia padre
    const grid = document.createElement('div');
    grid.classList.add('d-flex', 'flex-wrap', 'grid');
    wrapGrid.append(grid);
});