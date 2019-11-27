const diagonalSum = numbers => {
  horizontalSum = [];
  verticalSum = numbers[0].map((column, iteration) => numbers.map(row => row[iteration]));
  verticalMax = [];
  
  numbers.forEach(function(number, key) {
    horizontalSum.push(number.reduce((numberOne, numberTwo) => numberOne + numberTwo, 0));
  });
  
  verticalSum.forEach(function(number, key){
    verticalMax.push(number.reduce((numberOne, numberTwo) => numberOne + numberTwo, 0));
  });
    
  if (Math.max(...verticalMax) > Math.max(...horizontalSum)) return Math.max(...verticalMax)
    return Math.max(...horizontalSum)
}
  
diagonalSum([[6, 7, 8], [1, 4, 29], [4, 78, 12]]);