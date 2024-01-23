let fn = Symbol(123)
let obj  = {
    name : 'aditya',
    email  : "adityasinghnow@gmail.com",
    phone : 9044114395,
    'e' : 'mc2',
    [fn] : 12

}

console.log(obj);
console.log(obj.name);
console.log(obj['name']);
console.log(obj['e']);
console.log(obj[fn]);
console.log(typeof(obj[fn]));
obj.email = 'adi@gmail.com'
console.log(obj);
// Object.freeze();
// obj.email = 'chutia@gmail.com'
// console.log(obj);
 obj.greet = function(){
    console.log(`hello this is ${obj.name}`);
 }
console.log(obj.greet());
obj.huhu = 'lulu chu'
console.log(obj);


let og = {
loda : "7 inch",
lodawidth : "1.5inch",
kk : {
    mutthi : "din ke 4 baar",
    porn: "approx 200hrs"
}

}

console.log(og.kk.mutthi);
let k1 = {
    ok : "kk",
    haha: "lol",
    maachuda: "idgaf"

}
let k2 = {
    chutia: "asshole",
    madarchod : "motherfucker"

}
let k3 = Object.assign({},k1,k2)
console.log(k3);
k4 = Object.assign({},k1,k2)
console.log(k4);
console.log(k1);
let k5  = {...k1,...k2,...k3}
console.log(k5);

console.log(Object.keys(k1));
console.log(Object.values(k2));
console.log(Object.entries(k1));
