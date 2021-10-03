export class Matrix {
    constructor(arr) {
        this.row = arrrow(arr)
        this.column = arraytoArrays(arr)
    }
    get rows() {
        return this.row
    }
    get columns() {
        return this.column
    }
}
function arrrow(arr) {
    arr = arr.split('\n');
    const result = Array().fill([])
    const end = arr.length;
    for (let i = 0; i < end; i++) {
        result.push(arr[i].split(' '))
    }
    return result.map(item => item.map(num => parseInt(num)))
}
function arraytoArrays(arr) {
    arr = arr.split('\n').map(item => item.split(' '));
    const result = Array(arr.length).fill([])
    const end = arr[0].length
    for (let j = 0; j < end; j++) {
        const emtyarr = [];
        for (let i of arr) {
            emtyarr.push(i[j]);
        }
        result[j] = emtyarr
    }
    return result.map(item => item.map(num => parseInt(num)))
}