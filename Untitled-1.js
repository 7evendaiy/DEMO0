



function renderBoard(numRows,numCols){
    let baoardEl = document.querySelector("board");

    for (let i = 0;i < numRows;i++) {
        let trEl = document.createElement("tr");
        for (let j =0;j < numCols;j++){
            let cellEl = document.createElement("div");
            cellEl.className ="cell";
            cellEl
            let tdEl = document.createElement("td");
            tdEl.append(cellEl);

            trEl.append(tdEl);

        }
        baoardEl.append(tdEl);
        
    }
}

const directions = [
    [-1,-1], [-1,0],[-1,-1],
    [0,-1]
]


function initialize(numRows,numCols,numMines) {
    let grid = new Array(numrows);
    for (let i =0; i < numRows; i++) {
        grid[i] = new Array(numCols);
        for (let j = 0; j < numCols; j++){
            grid[i][j] = 0;
        }

    }

    let mines = [];
    for (let k=0; k < numMines; k++ ){
        let cellsn = Math.trunc(Math.random() * numRows * numCols);
        let row = Math.trunc(cellsn / numCols);
        let col = cellsn % numCols;

        console.log(cellsn , row , col);

        grid[row][col] = -1;
        mines.push([row,col]);

    }
    for (let [i , j ] of mines) {
        for (let [drow,dcol] of directions) {
            let cellRow = row + drow;
            let cellcol = col + dcol;
            if (cellRow < 0 ||cellRow >= numRows || cellcol < 0 || cellcol >= numCols) {
                continue;
            }

            if (grid[cellRow][cellCol] === 0) {
                console.log('target:',cellRow,cellCol);

                let count = 0;
                for(let [arow,acol] of directions) {
                    let ambientRow = cellRow + arow
                }
            }
        }
        if (count > 0) {
            grid[cellRow][cellCol] = count;

        } 
    }