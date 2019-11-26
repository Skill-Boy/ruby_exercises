def calculate(number_left, number_right)  
  yield(number_left, number_right)   
end  
  
calculate(15, 10) {|number_left, number_right| number_left + number_right}
calculate(15, 10) {|number_left, number_right| number_left - number_right}
calculate(15, 10) {|number_left, number_right| number_left * number_right}
calculate(15, 10) {|number_left, number_right| number_left.fdiv(number_right)} 