function diagonalDifference(arr){
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for(let index = 0; index < arr.length; index += 1){
        leftDiagonal = leftDiagonal + arr[index][index];
        rightDiagonal = rightDiagonal + arr[index][arr.length - 1 - index];
    }
    return [leftDiagonal, rightDiagonal];
}


console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));