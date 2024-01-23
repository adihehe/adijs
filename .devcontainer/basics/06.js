// array

let arr = ['41','626','agh','kgqhk']
let yoyo = new Array(1,2,3,23,4,41,1)
let dd = yoyo.join()
console.log(dd);
console.log(typeof(dd));
console.log(yoyo.includes(6));
console.log(yoyo.indexOf(3));
console.log(yoyo);
yoyo.push(4)
console.log(yoyo);

// slice just copies the elements in the specified range from the array
// splice it takes out the elements in the ........

console.log('A',yoyo);
console.log(yoyo.slice(2,5));
console.log('B',yoyo);
console.log(yoyo.splice(2,5));
console.log('C',yoyo);

// advanced
let dchero = ['wonderwoman','superman','batman','flash']
let marvel = ['spiderman','ironman','america']
let hero = marvel.concat(dchero)
// marvel.push(dchero)
let dijk = ['aaff','gag',['gaes'],'gageg',['ahge',['qgev','ekbkg','argr',['waeg']]]];
let chut = dijk.flat(2)
console.log(chut);
let sc1 = 313
let sc2 = 141
let sc3 =  131
console.log(Array.of(sc1,sc2,sc3))

