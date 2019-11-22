let getWelcome = name => {
  return getName => {
    return `Hi ${name}` 
  };
}
  
const greetHomie = getWelcome('Homie');
const greetFco = getWelcome('Fco');
  
greetHomie();
greetFco();