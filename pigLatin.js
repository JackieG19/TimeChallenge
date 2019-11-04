/*
Output 1:
translatePigLatin("california")
should return "aliforniacay".

Output 2:
translatePigLatin("paragraphs")
should return "aragraphspay".

Output 3:
translatePigLatin("glove")
should return "oveglay".

Output 4:
translatePigLatin("algorithm")
should return "algorithmway".

Output 5:
translatePigLatin("eight")
should return "eightway".

Output 6:
Should handle words where the first vowel(a,e,i,o,u) comes in the middle of the word.
translatePigLatin("schwartz") should return "artzschway".

Output 7:
Should handle words without vowels.
translatePigLatin("rhythm") should return "rhythmay".
*/

// function translatePigLatin(str) {
//     /*If a word begins with a vowel(a,e,i,o,u)
//         add "way" to the end.*/

//     var vowel = str.replace(/[^aeiou]/gi, "").length;
//     console.log(vowel);

//     var strlen = str.length;
//     console.log(strlen);

//     for(var s = 0; s < strlen; s++){

//     }


function translatePigLatin(str) {
    
    /*If a word does not contain a vowel
        add "ay" to the end.*/
    // Input strings are all lowercase.

  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf(str.charAt(0)) > -1) {
    return str + "way";
  }
  for (var i = 1; i < str.length; i++) {
    if (vowels.indexOf(str.charAt(i)) > -1) {
      str = str.slice(i) + str.slice(0, i) + "ay";
      return str;
    }
  }
    // should return "onsonantcay"
  return str;
}

translatePigLatin("consonant");
