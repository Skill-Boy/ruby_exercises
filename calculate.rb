def calculate(number_one, number_two)  
  yield(number_one, number_two)   
end  
  
calculate(15, 10) {|number_one, number_two| number_one + number_two}
calculate(15, 10) {|number_one, number_two| number_one - number_two}
calculate(15, 10) {|number_one, number_two| number_one * number_two}
calculate(15, 10) {|number_one, number_two| number_one.fdiv(number_two)} 