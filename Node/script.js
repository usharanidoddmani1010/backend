// let n=3;
// for(let i=0;i<n;i++){
//     console.log("helo,",i);
// }

// console.log("thank u node running js file");
// let args = process.argv;
// for(let i = 2; i < args.length;i++) {  // why from 2 is frist two is one is path one is excutable path and other is cur fiel path
//     console.log("hello! to ", args[i]);
// }



// const someValue = require("./math");

// console.log(someValue);    // if nothing was return from the math file then the empty obj is printed


///////////////////////////////////
/// require on the obj 
// and we can use it const like sum, mul which i writen in the math file

// const math = require("./math");

// console.log(math.sum(2,3));
// console.log(math.PI);


/////////////////////////////////////

/// exporting the directory 

const info = require("./Fruits");   // requiring the dir
console.log(info[0]);