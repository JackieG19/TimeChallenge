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
  
  var res = str.replace(/\s/g, '-').toLowerCase();
  //str.toLowerCase().trim().split(/\s+/).join('-');
  //str.toLowerCase();
  console.log(res);
  
  return str;
}
spinalCase("The_Andy_Griffith_Show");

//spinalCase("AllThe-small Things");

//spinalCase('This Is Spinal Tap');
