function factorialize(number, factorial = 1) {
    return number === 0 ?
        factorial
        : number * factorialize(number - 1)
}


function sumCalculate(n, k) {
    return (factorialize(n) / (factorialize(k) * (factorialize(n - k))))
}


function creatRow(numRow) {
    const rowArrray = [];
    const n = numRow - 1
    for (let k = 0; k < numRow; k++) {
        const sum = sumCalculate(n, k);
        rowArrray.push(sum)
    }
    return rowArrray
}


export function rows(numRows) {
    const rowArrrays = [];
    for (let i = 1; i < numRows + 1; i++) {
        const row = creatRow(i)
        rowArrrays.push(row)
    }
    return rowArrrays
}