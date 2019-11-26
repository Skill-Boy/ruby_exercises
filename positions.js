const positionSum = nums => {
  const numbers = [];
  let numberSum = 0;
    
  nums.forEach(function (num) {
    if (!isNaN(num.replace(".", "")))
      numbers.push(num.split("."));
  });
  
  numbers.forEach(function (diagonalNum, diagonalKey) {
    numberSum += Number(diagonalNum[diagonalKey]);
  });
  
  return numberSum;
}
  
positionSum(["13.09.2017", "13.aa.2018", "44.09.2018", "13.09.7"]);