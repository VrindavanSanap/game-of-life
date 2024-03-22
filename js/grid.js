
class Grid {
    constructor(cols, rows) {
        self.cols = cols
        self.rows = rows
        self.grid = nj.zeros([cols, rows])

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                self.grid.set(i, j, floor(random(2)))
            }
        }
        self.next = self.grid.clone()
    }

    display(resolution) {
        for (let i = 0; i < self.cols; i++) {
            for (let j = 0; j < self.rows; j++) {
                let x = i * resolution
                let y = j * resolution
                if (self.grid.get(i, j)) {
                    rect(x, y, resolution, resolution)
                }
            }
        }
    }

    step() {
        let kernel = nj.ones([3, 3])
        let conv_prod = conv2d(self.grid, kernel).slice([1, -1], [1, -1])
        let n_neibours = conv_prod.subtract(self.grid)
        console.log(n_neibours.toString())
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                // self.grid.set(i, j, floor(random(2)))
                let n_neibours_i = n_neibours.get(i, j);
                if (n_neibours_i < 2) {
                    self.next.set(i, j, 0)
                }
                else if (n_neibours_i >= 4) {
                    self.next.set(i, j, 0)
                }

                else if (n_neibours_i == 3) {
                    self.next.set(i, j, 1)
                }
            }
        }
        console.log(self.next.toString())
        self.grid = self.next.clone()
    }

}