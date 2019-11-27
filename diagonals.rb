def diagonals_sum(numbers)
  verticalSum = []
  horizontalSum = []
    
  numbers.transpose.each_with_index { |number, key|
    verticalSum << number.sum
    horizontalSum << numbers[key].sum
  }
    
  verticalSum.max > horizontalSum.max ? verticalSum.max : horizontalSum.max  
end
  
diagonals_sum([[6, 7, 8], [1, 4, 29], [4, 78, 12]])