let user = {
username : 'akhand',
class: 5,
// wel : function(){
//     console.log(`hello this is ${this.username}`);
//     console.log(this);
// }

}
// user.wel()
// user.username = 'chutiya'
// user.wel()
function op(objec){
    console.log(`hello ${this.username}`);
}

op(user)

// arrow  function
let aj = (num1,num2) => {
    return num1 + num2
}

console.log(aj(4,5));

 pg = (num1) => num1*3
 console.log(pg(5));


//  immediately invoked function
( function (num1,num2){
console.log(num1 + num2);
})(3,5);


(()=>{
    console.log('this is arrow');
})()

