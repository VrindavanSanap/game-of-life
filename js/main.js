let grid;
let cols;
let rows;
let resolution = 40

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(400, 400);
    cols = width / resolution;
    rows = height / resolution;
    grid = new Grid(cols, rows)

    // console.log(g.toString())
}


function draw() {
    background(0)
    let next = nj.zeros([cols, rows])
    grid.display(resolution)
}

function windowResized() {
    // resizeCanvas(windowWidth, windowHeight);
}
