var nj = require('numjs');
var block = nj.array([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]])
var kernel = nj.ones([3, 3])


let n_neibours = convolve(block, kernel).slice([1, -1], [1, -1]).subtract(block)
console.log(n_neibours.toString())
next = block.clone()
console.log(next.toString())