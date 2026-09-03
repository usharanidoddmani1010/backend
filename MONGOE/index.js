const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// mongoose connection
main().then(() => {
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

/// insertion 

// let chat1 = new Chat({
//     from: "usha",
//     to: "rani",
//     msg: "hi rani, send me the notes",
//     created_at: new Date() //utc
// });

// chat1.save().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })



// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find(); // which give me all data
    // console.log(chats);
    // res.send("working");
    res.render("index.ejs",{chats});
});

// new route  this is taking the new information from the form 
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// Create Route post chat // this is post the submitted data to db and showing on the main page
app.post("/chats/", (req, res) => {
    let {from, to, msg } = req.body;
    let newChat = new Chat({   // chat obj creattion
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    // console.log(newChat);
    newChat.save().then(res => {
        console.log("chat was saved");
    }).catch(err => {
        console.log(err);
    })
    // res.send("working");
    res.redirect("/chats");
});

// edit route

app.get("/chatS/:id/edit",async (req, res) => {
    // console.log(res);
    // res.send("working")

    let {id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})

/// Update route
app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg},{runValidators: true, new: true});  // new will print the updated value
    // console.log(updatedChat);
    res.redirect("/chats");
})

// distory route
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats")
})

app.get("/", (req, res) => {
    res.send("root is working");
});

app.listen(8080, () => {
    console.log("server is listining on port: 8080");
})