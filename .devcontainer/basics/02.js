// console.log(Number("aditya"));
// console.log("1" + 2);
// console.log(1+2+"3");
// console.log("2" === 2);
// console.log((1 + 2 ** 3 * 4 / 5));
// let age = 2;

// console.log(++age);
// console.log(Number(null));
// primitive data type : boolean,string,number,big number,null,symbol,undefined
let num = 213801840800918409439555555555555555555555555555555555555555555555555n
console.log(typeof num);
let id = Symbol('123')
console.log(id);
// nonprimitive : array,object ,function

let arr = ['aditya','vijay','rahul',3]

console.log(typeof arr[3]);

// primitive datatypes are stored in the form of stack
// non primitive datatypes are strored in the form of heap


let user1 = {
    email : 'adityasinghnow@gmail.com',
    roll : 221210013
}

let user2 = user1

user2.email = 'adi@gmail.com'
console.log(user2);
console.log(user1);

let age1 = 18
let age2 = age1
console.log(age2);
console.log(age1);

age2 = 70
console.log("new value",age2);
console.log("new value",age1);
