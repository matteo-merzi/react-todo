// function add(a,b) {
//     return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5, 6];
//
// console.log(add(...toAdd));

// var groupA = ['Mario', 'Sara'];
// var groupB = ['Carlo'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Matteo', 31];
var person2 = ['Kristen', 28];

function greetings(name, age) {
    console.log('Hi ' + name + ', you are ' + age);
}

greetings(...person);
greetings(...person2);


var names = ['Ben', 'Micky'];
var final = ['Matteo'];
final = [...final, ...names];

console.log(final);
