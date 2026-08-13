/// if u want to export fromthe dir then we must create the index.js this name must be same 
// 
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple, banana, orange];    // don't use {} if use this it become a obj so 

module.exports = fruits;