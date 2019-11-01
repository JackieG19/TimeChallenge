/*
Output 1:
pairElement("ATCGA")
should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

Output 2:
pairElement("TTGAG")
should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

Output 3:
pairElement("CTCTA")
should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

function pairElement(str) {
    console.log(str);
    // use array.push(); and string.split();
    // should return [["G", "C"], ["C","G"],["G", "C"]]
  return str;
}

pairElement("GCG");


// Note: There are two cases [A-T] and [C-G]
// may have to use a switch case
