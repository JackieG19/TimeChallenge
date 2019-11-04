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
    
    // for(var i = 0; i < str.length - 1; i++){
    //     if(str.charCodeAt(i + 1) == str.charCodeAt(i) + 1){
    //         //console.log("next in alphabet");
    //         return String.fromCharCode(str.charCodeAt(i) + 1);
    //     }
    // }
    
    var strArr = str.split("");
        for(var i = 0; i < strArr.length; i++){
            var code = str.charCodeAt(i);
            if( code !== str.charCodeAt(0) + i){
                return String.fromCharCode(code -1);
            }
        }
  return undefined;

   // should return "d"
  //return str;
 //consolo.log(str);
}

fearNotLetter("abce");


// Note: need to convert from character to ASCII code
// use CharCodeAt, String.fromCharCode
