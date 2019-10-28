/*
Output 1:
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
should return [1, 3, 2, 5, 4]. // mising the 4

Output 2:
uniteUnique([1, 2, 3], [5, 2, 1])
should return [1, 2, 3, 5]. // missing the 3

Output 3:
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
should return [1, 2, 3, 5, 4, 6, 7, 8].
*/

function uniteUnique(arr1, arr2, arr3) {
    //console.log(arr1);
   // console.log(arguments);
  var argslen = arguments.length
    var newArr = [];
        for (var i = 0; i < argslen; i++){
            for(var j = 0; j < argslen; j++){
                if(newArr.indexOf(arguments[i][j]) === -1){
                    newArr.push(arguments[i][j]);
                }
            }
        }
console.log(newArr);
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
