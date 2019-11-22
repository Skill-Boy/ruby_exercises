const search = (findSearch) => {
  const animals = ["Caballo", "Oso", "Perro"];
  const persons = ["Pedro", "Maria", "Rosa"];
  const stuffs = ["Petroleo", "Carne", "Rosca"];  
  const wordsFound = [];
  
  words = animals.concat(persons, stuffs);
  words.forEach(function (word) {
    if(findSearch.toLowerCase() == word.toLowerCase().substr(0, findSearch.length)){
      wordsFound.push(word);
    }
  }); 
  return wordsFound;
}  
  
search("Ca");