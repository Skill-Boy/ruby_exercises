def calculate(sum)
  sum.call(10, 5)
end
  
sum = Proc.new do |a, b|
  a + b 
end
  
abs = Proc.new do |a, b|
  a - b
end
  
mul = Proc.new do |a, b|
  a * b
end
  
div = Proc.new do |a, b|
  a / b
end
  
p calculate(sum)
p calculate(abs)
p calculate(mul)
p calculate(div)