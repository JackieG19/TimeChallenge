/* output 1
whatIsInAName(
[{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }]**,

{ last: "Capulet" }) - compare this to the array

should return [{ first: "Tybalt", last: "Capulet" }]**. // PASSED!

output 2:
whatIsInAName(
[{ "apple": 1 }**,
{ "apple": 1 }**,
{ "apple": 1, "bat": 2 }]**,

{ "apple": 1 })

should return [{ "apple": 1 }**, { "apple": 1 }**, { "apple": 1, "bat": 2 }]**. // PASSED!

output 3:
whatIsInAName(
[{ "apple": 1, "bat": 2 }**,
{ "bat": 2 },
{ "apple": 1, "bat": 2, "cookie": 2 }]**,

{ "apple": 1, "bat": 2 })

should return [{ "apple": 1, "bat": 2 }**, { "apple": 1, "bat": 2, "cookie": 2 }]**.

output 4:
whatIsInAName(
{ "apple": 1 },
{ "apple": 1, "bat": 2, "cookie": 2 }]**,

{ "apple": 1, "cookie": 2 })

should return [{ "apple": 1, "bat": 2, "cookie": 2 }]**.

output 5:
whatIsInAName(
[{ "apple": 1, "bat": 2 }**,
{ "apple": 1 },
{ "apple": 1, "bat": 2, "cookie": 2 },
{ "bat":2 }],

{ "apple": 1, "bat": 2 })

should return [{ "apple": 1, "bat": 2 }**, { "apple": 1, "bat": 2, "cookie":2 }]**.

output 6:
whatIsInAName(
[{"a": 1, "b": 2, "c": 3}],

{"a": 1, "b": 9999, "c": 3})

should return []
*/

function whatIsInAName(collection, source) {
console.log(source);
    var arr = [];

var key = Object.keys(source);
//console.log(key);

var value = source[key];
//console.log(value);

for(var i = 0; i < collection.length; i++){
    if(collection[i][key] === value){
        arr.push(collection[i]);
    }
}
    console.log(arr);
  //return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
