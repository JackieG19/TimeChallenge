/* Test cases

Output 1:
spinalCase("This Is Spinal Tap")
should return "this-is-spinal-tap".

Output 2:
spinalCase("thisIsSpinalTap")
should return "this-is-spinal-tap".

Output 3:
spinalCase("The_Andy_Griffith_Show")
should return "the-andy-griffith-show".

Output 4:
spinalCase("Teletubbies say Eh-oh")
should return "teletubbies-say-eh-oh".

Output 5:
spinalCase("AllThe-small Things")
should return "all-the-small-things".
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
    // lower case all the words
    // var res = str.toLowerCase(); 
    // console.log(res);
  
    // removed underscore for output 3
    // var remove = res.replace(/_/g, " "); 
    // console.log(remove);
  
    // adds the dash in between the words
    // var newStr = remove.replace(/\s+/g, '-'); 
    // console.log(newStr);
  
    // adds the space in between the words for output 2 and 5
    // var removeSp = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    // console.log(removeSp);

    var replace = str.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
    //console.log(replace);

    var newStr = replace.replace(/\s+/g, '-');
    //console.log(newStr);
    
    return newStr;
}
//spinalCase("thisIsSpinalTap");
//spinalCase("AllThe-small Things");
//spinalCase("The_Andy_Griffith_Show");
spinalCase('This Is Spinal Tap');
