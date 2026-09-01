const mongoose = require('mongoose');

// this below is equal to 
// let url = "http://localhost:8080/user" 
// mongoose.connect('mongodb://127.0.0.1:27017/test'); //17 always same for all and defalut is test with test my mongo is conect
// below is as same as this above



main().then( (res) => {
    console.log("connection successfull");
} )
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

//Schema(blueprint) it is overall stru which defines how a collection(col) should look or contain

// collection--- user-- schema(name,age,...)

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age:Number,
});  // schema(blueprint)


//// Models (class)
// models ---- collection----schema 
//   modle(same as collec)  collection  schema , singlur  
// const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);


////////// insert one 

// const User = mongoose.model("User", userSchema);

// user is model(collection,class) for this we need to create obj(doc)

// const user1 = new User({
    // name: "usha",
//     age: 19,
//     email: "usharani@gmail.com"
// });  // only doing this much don't store it in the db we need to this 

// user1.save();

// const user2 = new User({
//     name: "rani",
//     age: 19,
//     email: "rani@gmail.com"
// });  
// user2.save().then( (res) => {
//     console.log(res);
// }).catch( (err) => {
//     console.log(err);
// })


//////// insert many

const User = mongoose.model("User", userSchema);

// User.insertMany([
//     {name: "Tony",email: "ton7@eamil.com",age: 51},
//     {name: "Peter",email: "peter7@eamil.com",age: 14},
//     {name: "Thor",email: "thor7@eamil.com",age: 51},

// ]).then( (res) => {
//     console.log(res);
// });


////////// find

// find one and all
// User.find(/*{age: {$gt:40}}*/  {_id : "6a95256e18e45dedc38c21b5"}).then((res) => {
//     console.log(res[0].name);
// }).catch((err) => {
//     console.log(err);
// }) 

// find by id 
// User.findById("6a95256e18e45dedc38c21b5").then((res) => {
//     console.log(res.name);
// }).catch((err) => {
//     console.log(err);
// }) 


////////////// update

// User.updateMany(/*{name:"Thor"}*/ {age: {$gt: 50}}, {age:49}).then((res) => {  // here we no need of set 
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// findoneandupdate and findbyidandupdate

// User.findOneAndUpdate({name:"Thor"} /*{age: {$gt: 50}}*/, {age:50},{new: true}).then((res) => {  // if i send only two then in terminal i get the old answer not the modified so add new to true
//     console.log(res); // new will help to print the modified 
// }).catch((err) => {
//     console.log(err);
// });

// User.findByIdAndUpdate({_id:"6a9528c6d4f868bcd3b34b91"} /*{age: {$gt: 50}}*/, {age:30},{new: true}).then((res) => {  // if i send only two then in terminal i get the old answer not the modified so add new to true
//     console.log(res); // new will help to print the modified 
// }).catch((err) => {
//     console.log(err);
// });

////////// delete

// delete one and many

// User.deleteOne({name:"tony"}).then((res) => {
//     console.log(res);
// })

// User.deleteMany({name:"Tony"}).then((res) => {
//     console.log(res);
// })

//// find by id and one

// User.findByIdAndDelete({_id:"6a9528872a1d0bdf2931e0f0"}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

User.findOneAndDelete({age:50}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})