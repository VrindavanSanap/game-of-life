
function make2darray(cols, rows) {
    let arr = new Array(cols)
    for (let i = 0; i < cols; i++) {
        arr[i] = new Array(rows)
    }
    return arr
}

let grid;
let cols;
let rows;
let resolution = 40

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(400, 400);
    cols = width / resolution;
    rows = height / resolution;
    grid = make2darray(cols, rows)
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2))
        }
    }
}

function draw() {
    background(0)
    let next = make2darray(cols, rows)

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution
            let y = j * resolution
            if (grid[i][j]) {
                rect(x, y, resolution, resolution)
            }
        }
    }

}

function windowResized() {
    // resizeCanvas(windowWidth, windowHeight);
}
