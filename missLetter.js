/*
Output 1:
fearNotLetter("abce")
should return "d".

Output 2:
fearNotLetter("abcdefghjklmno")
should return "i".

Output 3:
fearNotLetter("stvwx")
should return "u".

Output 4:
fearNotLetter("bcdf")
should return "e".

Output 5:
fearNotLetter("abcdefghijklmnopqrstuvwxyz")
should return undefined.
*/

function fearNotLetter(str) {
    /*
        Find the missing letter in the given letter range
            return just the missing letter

        If all letters are present in the range
            return undefined
    */

    // should return "d"
  return str;
}

fearNotLetter("abce");


// Note: need to convert from character to ASCII code
// use CharCodeAt, String.fromCharCode
