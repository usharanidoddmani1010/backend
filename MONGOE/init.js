const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

// mongoose connection
main().then(() => {
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
};

let allChats = [{
    from: "usha",
    to: "rani",
    msg: "hi rani, send me the notes",
    created_at: new Date() //utc
},
{
    from: "nishs",
    to: "usha",
    msg: "hi usha, are u free",
    created_at: new Date() //utc
},
{
    from: "ram",
    to: "sita",
    msg: "hi sita, i am waiting",
    created_at: new Date() //utc
}
];

Chat.insertMany(allChats);