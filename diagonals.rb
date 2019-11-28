def diagonals_sum(numbers)
  vertical_sum = []
  horizontal_sum = []
    
  numbers.transpose.each_with_index { |number, key|
    vertical_sum << number.sum
    horizontal_sum << numbers[key].sum
  }
    
  vertical_sum.max > horizontal_sum.max ? vertical_sum.max : horizontal_sum.max  
end
  
diagonals_sum([[6, 7, 8], [1, 4, 29], [4, 78, 12]])