class Translator
  
  def self.words(lenguage, word)
    case lenguage.downcase 
      when "spanish"
        spanish_words(word)
      when "english"
        english_words(word)
      else
        "#{language} not found"  
    end
  end
  
  private

  def self.spanish_words(word)
    spanish = {
      department: "departamento", 
      tenant: "inquilino", 
      owner: "propetario", 
      rent: "renta"
    }
    spanish[word.downcase.to_sym]
  end  

  def self.english_words(word)
    english = {
      departamento: "department", 
      inquilino: "tenant", 
      propetario: "owner", 
      renta: "rent"
    }
    english[word.downcase.to_sym]
  end  
end
    
Translator.words("English", "departamento")