const express = require("express");
const app = express();
const path = require("path");  // (1)  we need to write this for the this beclow set 

const port = 8080;

app.set("view engine", "ejs");   // the set, set many thng in that the view is also one and view is temple engine wich have the packages that are ejs
app.set("views", path.join(__dirname, "/views")) // (2) after writing this only we don't get the error when we run this file from outside the ejsdiir 
app.get("/", (req, res)=> {
    // res.send("this is home");   // in ejs we don't send the responce we render means we send the files, folder like many but we can't send the files though the res.send
    res.render("home.ejs");  // we can also write the home only 
    // here how render knows where is the home, express when call to render it auto it find the views folder and home.ejs file 

});

app.get("/hello",(req, res) => {
    res.send("hello");
})

//////////////////////////////////////////
//  data rendering from the other file
app.get("/rolldice", (req, res) => {
    // assume that i am gettting this data from the database 
    let diceValue = Math.floor(Math.random() * 6) +1 ;
    res.render("rolldice.ejs", {diceValue});  // with file we can also send the obj
    // we can also send only this (num: diceValue) (key value pair)
});


app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})


////////////  ///////
// ejs.co  (about ejs tags)
//////////////////////////////////////////////////