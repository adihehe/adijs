// global scope
let a = 10
const b = 100
var c = 1000
console.log(a);
console.log(b);
console.log(c);

{
    // local scope
    let a = 100
    c = 10000
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);

addkaro(5,6)

function addkaro(num1 , num2){
    console.log(num1 + num2);
}

// addkarle(5,6)

let addkarle = function(num1,num2){
    console.log(num1 + num2);
}