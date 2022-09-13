class Formatter {
  //add static methods here
  static capitalize (string) {
    return string.replace(string[0], string[0].toUpperCase());
  }

  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }

  static titleize (string) {
    
    // let arr = [];
    let exludeWords = ["a", "an", "but", "of", "and", "for", "at", "by","from", "the"]
    let arr = string.split(' ');
    return arr.map((word, i) =>{ 
     return exludeWords.includes(word) && i!=0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ")

  }
}

Formatter.titleize("A Tale of Two Cities")