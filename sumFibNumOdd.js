/*
Output 1:
sumFibs(1) should return a number.

Output 2:
sumFibs(1000) should return 1785.

Output 3:
sumFibs(4000000) should return 4613732.

Output 4:
sumFibs(4) should return 5.

Output 5:
sumFibs(75024) should return 60696.

Output 6:
sumFibs(75025) should return 135721.
*/

function sumFibs(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 != 0) {
            return i += num;
        }
    }
}

sumFibs(4);
