// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const g = 9.8;
// const PI = 3.14; 

// module.exports = 123;
// module.exports = "usha";

//////////////
// diff types of writing the module.exports 

// for the obj

// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// };

// module.exports = obj;


// or we can also wrtiee like this 

// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// };

// module.exports.sum = (a, b) => a + b;  // we can also write like this 
// module.exports.mul = (a, b) => a * b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14; 


/// we can also like this 
exports.sum = (a, b) => a + b;  // we can also write like this 
exports.mul = (a, b) => a * b;
exports.g = 9.8;
exports.PI = 3.14; 

// but we canot write like this 
// export = 4;  // js triet it is as normal not module exmprt so can't use this 

// we can write like this 
// module.exports = 4;