let userloggedin = true;

if (userloggedin) {
    console.log('user is loggedin');
    
}
else{
    console.log('not logged in');
}



let month = 2;
switch (month) {
    case 1:
        let power = 1
        console.log('january');
        break;
    case 2:
        // console.log(power); power is a local variabla declared in case 1 scope
        console.log('feb'); 
        break   
    case 3:
        console.log('march');
        break
    default:
        console.log('default value');
        break;
}
// falsy values : false,0,empty string,NaN,null,undefined,Bigint 0n
// tuthy values : [],{},'0',' ','false'


//  null coalescing operator

let num = null ?? 33;
let pj = undefined ?? 23;

console.log(num);
console.log(pj);


num <= 33 ? console.log('less than or equal to 33') : console.log('greater than 33');

for(let i =2;i<10;i++){
    for(let j =1;j<=10;j++){
        console.log(`${i}*${j}=`,i*j);
    }
}
let i =1
while(i<=10){
    console.log(i);
    i++;
}
i = -1
do{
  console.log('prints i',i);
}while(true)
