// one to many approach 3 
const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
};

// user Schema
const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    //>1000s so stored the parent in the child
    user:{
        type:Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// ADD user data 
// const addData = async () => {
//     // let user1 = new User({
//     //     username: "usha",
//     //     email: "usha@gmail.com",
//     // });  // saved

//     let user = await User.findOne({ username: "usha" });

// add posts data
//     // let post1 = new Post({
//     //     content: "Hello World!",
//     //     likes: 18,
//     // });

//     let post2 = new Post({
//         content: "Ego is neccessary in life",
//         likes: 18,
//     });

//     // post1.user = user1;

//     // await user1.save();
//     // await post1.save();

//     post2.user = user;
//     await post2.save();
// };

// addData();

// to delete the unwanted user and posts
// when id become eirr for the same user then del then added then i can get the same id

// const del = async () => {
//     await Post.findByIdAndDelete("6aac496b0e083093f3b360da");
//     await User.findByIdAndDelete("6aac3d2960cc924e30a13918")
// };

// del();

// get the data of user

const getData = async () => {
    let result = await Post.findOne({}).populate("user", "username");  // populte is what i what it will give from this post
    console.log(result);
}

getData();