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

// const info = require("./Fruits");   // requiring the dir
// console.log(info[0]);


// const figlet = require("figlet");

// figlet("Usharani", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// now i will use the import for the access the math



import {sum, mul} from "./math.js";
import { generate, count } from "random-words";

// console.log(sum(2,3));   // only this much is not enough we need to add the type=module in the packge.json file then only we can access 
// console.log(generate());

console.log(generate(5));


// if u want we can again dowland the node module just write the 
// npm install 