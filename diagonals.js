const diagonalSum = numbers => {
  horizontalSum = [];
  verticalSum = numbers[0].map((column, iteration) => numbers.map(row => row[iteration]));
  verticalMax = [];

  if (diagonals(verticalSum, verticalMax) > diagonals(numbers, horizontalSum)) return diagonals(verticalSum, verticalMax);
    return diagonals(numbers, horizontalSum);  
}

const diagonals = (diagonalNums, diagonal) => {
  diagonalNums.forEach(function(number, key){
    diagonal.push(number.reduce((numberOne, numberTwo) => numberOne + numberTwo, 0)); 
  });
  
  return Math.max(...diagonal);
} 
  
diagonalSum([[6, 7, 8], [1, 4, 29], [4, 78, 12]]);