class Grid {
    constructor(rows, cols) {
        this.cols = cols;
        this.rows = rows;
        this.grid = nj.zeros([rows, cols]);

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.grid.set(i, j, Math.floor(Math.random() * 2));
            }
        }
        this.next = this.grid.clone();
    }

    display(resolution) {
        fill(255);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let x = j * resolution;
                let y = i * resolution;
                if (this.grid.get(i, j)) {
                    rect(x, y, resolution, resolution);
                }
            }
        }
    }

    highlight(row, col, resolution) {
        let x = col * resolution;
        let y = row * resolution;
        fill(0, 0, 0, 0);
        stroke(255);
        rect(x, y, resolution, resolution);
    }

    step() {
        let kernel = nj.ones([3, 3]);
        let conv_prod = conv2d(this.grid, kernel).slice([1, -1], [1, -1]);
        let n_neibours = conv_prod.subtract(this.grid);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let n_neibours_i = n_neibours.get(i, j);
                if (n_neibours_i < 2 || n_neibours_i >= 4) {
                    this.next.set(i, j, 0);
                } else if (n_neibours_i === 3) {
                    this.next.set(i, j, 1);
                }
            }
        }
        this.grid = this.next.clone();
    }

    flip(row, col) {
        if (this.grid.get(row, col) === 1) {
            this.grid.set(row, col, 0);
            this.next = this.grid.clone();
        } else if (this.grid.get(row, col) === 0) {
            this.grid.set(row, col, 1);
            this.next = this.grid.clone();
        }
    }
    reset() {
        this.grid = nj.zeros([this.rows, this.cols])
    }
}
