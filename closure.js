const getWelcome = (name) => {
  const getName = name;
  return () => { return `Hi ${getName}` };
}

const greetHomie = getWelcome('Homie');
const greetFco = getWelcome('Fco');

greetHomie();
greetFco();