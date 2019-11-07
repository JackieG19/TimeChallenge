/*
Output 1:
sumPrimes(10), should return a number.

Output 2:
sumPrimes(10), should return 17.

Output 3:
sumPrimes(977), should return 73156.
*/

// A prime number is defined as a number greater than one and having only two divisors, one and itself.

function sumPrimes(num) {
    var numlen = num.length;
    for(var i = 2; i < numlen; i++){
        if(num % i === 0){
            return false;
        }
    } // 32 minutes in

 // return num;
 console.log(num);
}

sumPrimes(977);
