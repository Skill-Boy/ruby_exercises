var getWelcome = name => {
  return function() {
    return `Hi ${name}`;
  };
}
  
const greetHomie = getWelcome('Homie');
const greetFco = getWelcome('Fco');
  
greetHomie();
greetFco();