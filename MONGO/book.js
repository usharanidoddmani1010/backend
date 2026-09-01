const mongoose = require('mongoose');

main().then( (res) => {
    console.log("connection successfull");
} )
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

// constraints(rules)

// this is one type of defining the contrains (if only one datase contains)
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age:Number,
// }); 

/// better

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true, // this is (not null in sql)
        maxLength: 20,  // this will only allow the max of 20 length sentance
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        // min: 1,
        min: [1, "Price is too low for Amazon selling"]
    },
    // default 
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"], // enum which only allow this value to category other give the err
    },
    genre: [String], // this store the strings of the values
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title:"Math XII",
//     author: "RD Sharma",
//     price: 1200
// });
 
// let book1 = new Book({
//     title:"The hero",
//     author: "goat vk",
//     price: "181818", // this will not give me err becaue mongoose do thee parsking of the data // /*"abc"*/ // err
//     // category: "comic",  //err bez only enum won't allow any other than it's own
//     // category: "fiction",
//     genre: ["comics", "fictions","superheros"],
// });

///////////
// updation

Book.findByIdAndUpdate("6a95a896449823fd16b6c8ce",{price: -500},{runValidators:true}).then(res =>{
    console.log(res);// without runvalidatore what every we pass if the conditon of the price false then also updation happens so must use 
}).catch(err => {
    // console.log(err);
    //  console.log(err.errors);
     console.log(err.errors.price.properties.message);
}) //errrrrrrrrrrrrrrrrrr

// Book.findByIdAndUpdate("6a95a896449823fd16b6c8ce",{price: 500},{runValidators:true}).then(res =>{
//     console.log(res);// without runvalidatore what every we pass if the conditon of the price false then also updation happens so must use 
// }).catch(err => {
//     console.log(err);
// })

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// }); // when ur checking on the cm then make sure the purrel writen 