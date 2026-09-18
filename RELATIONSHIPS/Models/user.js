// one to few approach 1
const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// user data
const userSchema = new Schema({
    username: String,
    // <100s so embeded it 
    addresses: [
        {
            location: String,
            city: String,
             _id: false, // why false, by default mdb add the _id to the adress although we not discribed it's schema 
        },
    ],
});

const User = mongoose.model("User", userSchema);

// adding the data into the userschema
const addUsers = async() => {
    let user1 = new User({
        username: "sherlockholmes",
        addresses: [{
            location: "560019 basavanagudi",
            city: "bengaluru"
        }]
    })
    // individul address adding
    user1.addresses.push({
        location: "560018 chamrajpet",
        city: "bengaluru"
    });
    let result = await user1.save();
    console.log(result);
};

addUsers();