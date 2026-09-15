const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");
    
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
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
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
app.get("/chats", asyncWrap(async (req, res) => {
   
        let chats = await Chat.find(); // which give me all data
        // console.log(chats);
        // res.send("working");
        res.render("index.ejs",{chats}); 
}));

// new route  this is taking the new information from the form 
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404,"Page not found");  //this is for not asyc function 
    res.render("new.ejs");
});


// error handler for the async-validation

// Create Route post chat // this is post the submitted data to db and showing on the main page
app.post("/chats", asyncWrap(async (req, res) => {
     // for the async if we keep some values empty but rule say require then the crash happens so we needd to handle them so we use the try catch
        let {from, to, msg } = req.body;
        let newChat = new Chat({   // chat obj creattion
            from: from,
            to: to,
            msg: msg,
            created_at: new Date()
        });
        // console.log(newChat);
        // newChat.save().then(res => {
        //     console.log("chat was saved");
        // }).catch(err => {
        //     console.log(err);
        // })
        // res.send("working");
        await newChat.save();
        res.redirect("/chats");
    
}));


// err9r handling for the async 

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
};  // why we done this all commplex we need just to pass the function to this then the error is handled 

// this is the example out which give the same out as the above 
// > function asyncWrap (fn) {
// return function () {
// fn();
// };
// }
// undefined
// > const hello = () => console.log("hello");
// undefined
// > hello();
// hello
// <<<. undefined
// > asyncWrap (hello);
// <f() {
// fn();
// }
// > const retFn = asyncWrap(hello);
// << undefined
// > retFn()
// hello

// new Show Route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if(!chat) {
            next(new ExpressError(404,"Chat not found")); // here we are not using the throw we used the next bcz in asyn function the throw wont work so the normal error show 
            // not my created error show on the page so for that we use the next
        }// witout this if statement my chat sotre the some invalid code that showed on the page not the error wil occure 
        res.render("edit.ejs", {chat});
    } ));

// edit route
app.get("/chatS/:id/edit", asyncWrap(async (req, res) => {
    // console.log(res);
    // res.send("working")
    
        let {id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", {chat});   
}));

/// Update route
app.put("/chats/:id", asyncWrap(async (req, res) => {
        let {id} = req.params;
        let {msg: newMsg} = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg},{runValidators: true, new: true});  // new will print the updated value
        // console.log(updatedChat);
        res.redirect("/chats"); 
}));

// distory route
app.delete("/chats/:id", asyncWrap(async (req, res) => {
        let {id} = req.params;
        let deleteChat = await Chat.findByIdAndDelete(id);
        console.log(deleteChat);
        res.redirect("/chats");
}));

app.get("/", (req, res) => {
    res.send("root is working");
});


const handleValidationErr = (err) =>{
    console.log("this was a Validation error. Please follow rules ");
    // console.dir(err);
    console.log(err.message);
    return err;
}
// Error handling Middlewares
app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationErr(err);
    }
    next(err);
});

app.use((err, req, res, next) => {
    let {status = 500, message = "Some Error occurred"} = err;
    res. status(status).send(message);
});

app.listen(8080, () => {
    console.log("server is listining on port: 8080");
});