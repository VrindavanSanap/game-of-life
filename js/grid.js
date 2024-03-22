function convolve(input, kernel) {
    let ix = input.shape[0];
    let iy = input.shape[1];
    let kx = kernel.shape[0];
    let ky = kernel.shape[1];
    let padded_input = nj.zeros([ix + (kx - 1) * 2, iy + (ky - 1) * 2]);

    // Padding input
    padded_input.slice([kx - 1, kx - 1 + ix], [ky - 1, ky - 1 + iy]).assign(input, false)
    // console.log(padded_input.toString())
    let out = nj.convolve(padded_input, kernel);

    return out;
}
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

}