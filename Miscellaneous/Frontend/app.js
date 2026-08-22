//////////////////////////
// OOPS in js

// const stul = {
//     name: "adam",
//     age:25,
//     marks:95,
//     getMarks: function () {
//         return this.marks;
//     },
// };
// const stu2 = {
//     name:"eve",
//     age:25,
//     marks:99,
//     getMarks: function () {
//         return this.marks;
//     },
// };
// const stu3 = {
//     name: "casey",
//     age:23,
//     marks:85,
//     getMarks: function () {
//         return this.marks;
//     },
// };  // doing this all waste of time


//////////////////////////
// prototype

// let arr = [1,2,3];
// let arr2 = [4.5,6]; // this not have the sayhellow function so i need to create agin 
// // so if i create 1000 arr then i have to createe this methods 1000 time
// // so reduce this we use the prototypes that create one time use it when we want

// arr.sayHello = () => {
//     console.log("hello, i am arr");  // this is not a part of the prototype
// }

// arr2.sayHello = () => {
//     console.log("hello, i am arr");  // this is not a part of the prototype
// }

// > arr._proto_
// [constructor: f, at: f, concat: f, copyWithin: f, fill: f, -]
// > arr._proto_.push = (n) => {console.log("pushing number: ", n);}
// << (n) => {console.log("pushing number: ", n);}
// > arr.push(3);
// pushing number : 3
// <<< undefined
// > arr
// (3) [1, 2, 3, sayHello: f] 1
// 0:1
// 1:2
// 2:3
// sayHello: () => { console.log("hello!, i am arr"); }
// Length: 3
// [[Prototype]]: Array(0)
// > arr.push(5);
// pushing number:
// << undefined
// > arr
// (3) [1, 2, 3, sayHello: f]   this is the out put 

///////////////////////////////////////////

// Array.prototype

// the output from the console

// [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// String.prototype
// String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}anchor: ƒ anchor()at: ƒ at()big: ƒ big()blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()isWellFormed: ƒ isWellFormed()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()toWellFormed: ƒ toWellFormed()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""
// arr.sayHello === arr2.sayHello
// false  // ///bez they not using same prototype referenece becau sayhello is not the part of the prototype it just a use definend methog

// "abc".toUpperCase === "xyz".toUpperCase
// true   // refereneing same 


/////////////////////////
// factory function

// function PersonMarker(name, age){
//     const person = {
//         name: name,
//         age: age, 
//         talk(){
//             console.log(`hi, my name is ${this.name} `)
//         },
//     }
//     return person;
// }
// let p= PersonMarker("usha",19)
// let p2= PersonMarker("usha",19)
// p.talk === p2.talk
// false  now also showing the false 



////////////////////////////////
// new operator

//construtores - donesn't return anything and start with the captital 
function Person(name, age){
    this.name = name;
    this.age = age; 

    // console.log(this);  // this will print the window when we call the person(); only person no new key but if we use the new key word then it refer  
    //new Person("usha",19) // when we use this in thee console
    // Person {name: 'usha', age: 19}
    // age:  19
    //name : "usha"
    // [[Prototype]]Object
}   

Person.prototype.talk= function () {
    console.log(`hi, i am ${this.name}`);
};
let p= new Person("usha",19)

let p2= new Person("usha",19)
// p.talk === p2.talk
// true  // now we can see that they are using the prototype refering as same



//// better than this we have classes  

//// classes 


class Persons{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}
let ps= new Person("usha",19);
let ps2= new Person("usha",19);

// the output from the console

// ps
// Person {name: 'usha', age: 19}
// age: 19
// name: "usha"
// [[Prototype]]: Object
// talk: ƒ ()
// constructor: ƒ Person(name, age)
// [[Prototype]]: Object
// p2
// Person {name: 'usha', age: 19}
// age: 19
// name: "usha"
// [[Prototype]]: Object
// ps.talk === ps2.talk
// true





/////////////////////////////////////////////////////////

// inheritence 

// class Student{
//     constructor(name, age, marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     talk() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// let stu1 = new Student("usha", 19, 100);

// class Teacher{
//     constructor(name, age, subject ){
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//     }

//     talk() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }  /// her we can see some common btw studnet and teacher 

 // so for this we make a class which have common 


 // extends and super key word

class CollPerson{
    constructor(name, age){
        console.log("Parent class called");
        this.name = name;
        this.age = age;
    }
    talk() {  // this methond is belong to prototype 
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends CollPerson {
    constructor(name, age, marks){
        console.log("Student class called");
        super(name, age);   // parent class is called and send the arg to it 
        this.marks = marks;
    }   
}


class Teacher extends CollPerson {
    constructor(name, age, subject ){
        console.log("Teacher class called");
        super(name, age);  // parent class is called and send the arg to it 
        this.subject = subject;
    }    
}

let stu1 = new Student("usha",19, 100 );
console.log(stu1.talk());
console.log(stu1.name);
console.log(stu1.age);
console.log(stu1.marks);



let teach1 = new Teacher("nisha",29, "CSE" );
console.log(teach1.talk()); // see the console browser
console.log(teach1.name);
console.log(teach1.age);
console.log(teach1.subject);


class Mammal {
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    };

    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("wooff...");
    }
    // methond over-riding means all though we have eat mehtond in  the parent class we can override it and print my same named methond in my class
    eat(){
        console.log("dog is eating");
    }
}

class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meow...");
    }
}

let dog1 = new Dog("shoni");
console.log(dog1.name);
console.log(dog1.type);
console.log(dog1.bark());
console.log(dog1.eat());  // his will call the bogs eat not the mammals eat this is overrding

let cat1 = new Cat("dumma");
console.log(cat1.name);
console.log(cat1.type);
console.log(cat1.meow());
console.log(cat1.eat());