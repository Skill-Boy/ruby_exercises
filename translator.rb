class Translator
  @@spanish_words = {
    department: "departamento", 
    tenant: "inquilino", 
    owner: "propetario", 
    rent: "renta"
  }
  @@english_words = {
    departamento: "department", 
    inquilino: "tenant", 
    propetario: "owner", 
    renta: "rent"
  }
     
  def self.words(lenguage, word)
    case lenguage.downcase 
      when "spanish"
        "#{word.downcase} => #{@@spanish_words[word.downcase.to_sym]}"
      when "english"
        "#{word.downcase} => #{@@english_words[word.downcase.to_sym]}"
      else
        "#{language} not found"  
    end
  end  
end
    
Translator.words("English", "departamento")