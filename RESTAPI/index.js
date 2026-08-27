// import { v4 as uuidv4 } from 'uuid';  // if i write this give me error beause my all files using the require so use any one 

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4 : uuidv4 } = require('uuid');
const methodOverride = require("method-override");


app.use(express.urlencoded({extended : true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username : "usharani",
        content : "I love coding"
    },
    {
        id: uuidv4(),
        username : "rani",
        content : "hard work is importent to achieve success "  
    },
    {
        id: uuidv4(),
        username : "nisha",
        content : "I got selected for my first internship"
    },

];


app.get("/posts",(req, res) => {
    // res.send("server working well!");
    res.render("index.ejs", { posts });
});

// this is to get the information throw form
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
}); // what i done is when i go to this ur i should get a form so i have taken the get request 
// now when the sumbit button click then it should act for the post request

// this is to post that on the landing page 
app.post("/posts", (req, res) => {
    // console.log(req.body);

    let { username, content } = req.body;
    let id = uuidv4();  // with each post the id will be send to post
    posts.push({id, username, content});  // now the what user give the input in the post(form ) that will show on my quora page
    // res.send("post request working");
    res.redirect("/posts");
});

// after submiting i want the home page then we do the 
// we do the rediret (status score is 300)  and by defalut send the get request


// this is for see the individaul post 
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id); // here only writing the this let and console and send will make that if i path contain wronge id then also it going to send that sended mess to avoid it we do
    let post = posts.find((p) => id === p.id );
    // console.log(post);  // see the vs terminal
    // res.send("request working");     

    res.render("show.ejs", { post });
});

// update  here we can use patch or put both work same
// this is take the infomation from the form and patch it 
// when we submit then it do all thing like redirctying 
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;  //the change what i want
    // console.log(newContent); // by this we can see the updated on the vs console
    let post = posts.find((p) => id === p.id );
    post.content = newContent;
    console.log(post); // server get reset so error may come take the path again
    // res.send("patch request working");  // server error comes when we run on the hoppscotch so we need to take the new id again go to brower and see the path and copy here ok!
    res.redirect("/posts");
});
// after taking update from the above it send that updated post to edit.ejs
// this take the in put 
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("edit.ejs", { post });
});

// delete 

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id );  // here why i wrote the not equal to because it filter(delete) which i click on the button that one not oher
    // res.send("delete success");
    res.redirect("/posts"); 
});

app.listen(port, () => {
    console.log("Listening to port:  8080");
});