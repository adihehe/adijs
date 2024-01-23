let dat = new Date()
console.log(dat);
console.log(dat.getDate());
console.log(dat.toDateString())
console.log(dat.toLocaleDateString())
console.log(dat.toISOString());
console.log(dat.toTimeString());
console.log(typeof(dat));

let mydat = new Date(2023,4,1)
console.log(mydat.toUTCString());
let time = Date.now()
console.log(time);



