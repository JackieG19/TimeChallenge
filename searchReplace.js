/* Ouput 1;
myReplace("Let us go to the store", "store", "mall")
should return "Let us go to the mall".

Output 2:
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
should return "He is Sitting on the couch".

Output 3:
myReplace("This has a spellngi error", "spellngi", "spelling")
should return "This has a spelling error".

Output 4:
myReplace("His name is Tom", "Tom", "john")
should return "His name is John".

Output 5:
myReplace("Let us get back to more Coding", "Coding", "algorithms")
should return "Let us get back to more Algorithms".*/

function myReplace(str, before, after) {

    console.log(before);  // "jumped"
    console.log(after);  // ""leaped 

    // var search = str.search(before);
    // console.log(search);
    // // string.replace(searchvalue, newvalue)
    // console.log(str.replace(search, after));

    var search =  str.indexOf(before);
    console.log(search);
    
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
