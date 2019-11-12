/*
create a program that rolls 5 dice allowing the user to silent 0 to 5 dice to recall twice.
Program should detect if user goes yahtzee otherwisesimply displya the final result with the text turn over.

(* - done)

*v1.0 - user is to get a random value between 1 and 6
*v1.1 - user can get multiple(s) random values between 1 and 6
v1.2 - user can re-roll the numbers to get 2 additional sets before program ends
v1.3 - user can enter a value to re-roll a specific value
v1.4 - user can decide to not re-roll and values
v1.5 - user can select multipule values to re-roll
v1.6 - game can detect when user has yahtzee(5 of same value)
*/

// var randomNum = Math.floor(Math.random() * 6) + 1;
// console.log(randomNum);

function yahtzee(){
    var arr = [];

    while(arr.length < 5){
        var randomNum = Math.floor(Math.random() * 6) + 1;
        if(arr.indexOf(randomNum) === -1) arr.push(randomNum);
    }

    console.log(arr);

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(i != j && arr[i] == arr[j]) {
                return "YAHTZEE!"; // true (all 5 numbers ar the same)
            }
        }
    }
     return "Roll again"; // false (set of 5 random numbers)
}
console.log(yahtzee());
