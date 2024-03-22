let grid;
let cols;
let rows;
let resolution = 2;
let mouse_col;
let mouse_row;
let last_clicked_row;
let last_clicked_col;

let is_running = true;

function setup() {
    createCanvas(1600, 800);
    frameRate(10);
    cols = width / resolution;
    rows = height / resolution;
    grid = new Grid(rows, cols);
}

function keyPressed() {
    if (key === "s") {
        is_running = !is_running;
    }
    if (key === "r") {
        grid.reset();
    }
}

function draw() {
    background(0);
    mouse_col = Math.floor(mouseX / resolution);
    mouse_row = Math.floor(mouseY / resolution);

    grid.display(resolution);
    if (mouse_row < rows && mouse_col < cols) {
        grid.highlight(mouse_row, mouse_col);
    }
    if (is_running) {
        grid.step();
    }
    if (mouseIsPressed) {
        if (!(last_clicked_col === mouse_col && last_clicked_row === mouse_row)) {
            grid.flip(mouse_row, mouse_col);
            last_clicked_col = mouse_col;
            last_clicked_row = mouse_row;
        }
    }
}

function windowResized() {
    // resizeCanvas(windowWidth, windowHeight);
}
