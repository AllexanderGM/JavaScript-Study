const WIDTH = 600;
const HEIGHT = 600;
const FILES = 8;
const RANKS = 8;

const $canvas = document.createElement('canvas');

$canvas.width = WIDTH;
$canvas.height = HEIGHT;

$canvas.style.backgroundColor = "#444444";

const boardMatrix = [];
for (let x = 0; x < FILES; x =+1){
    for(let y = 0; y < RANKS; y=+1){
        boardMatrix[x][y] = 1;
    }
}

document.body.appendChild($canvas);
