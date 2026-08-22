const express = require("express");
const app = express();
const path = require("path");  // (1)  we need to write this for the this beclow path set 

const port = 8080;
app.use(express.static(path.join(__dirname, "/public/css"))); // just public whout / also ok
app.use(express.static(path.join(__dirname, "/public/js")));

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




/////////////////////////
// activity

///  instagram ejs

app.get("/ig/:username", (req, res) => {
    // console.log(username); /// the put in the vscode terminal
    // const followers = ["usha","rani","nishant","asha"];  // this is for the loops in ejs
    // let { username } = req.params;

    /////////////
    // no need of writing the above now acces through the data.json

    
    const instData = require("./data.json");   
    let {username} = req.params;
    // console.log(instData);  // just printing give the error but in the vs terminql we can see the data
    // res.render("instagram.ejs", { username, followers });
    let data = instData[username];
    console.log(data);
    if(data) {
        res.render("instagram.ejs", { data });  // only this 4 lines give u the obj in the browser and in the terminal it will give the if exists realted info other wise undifned
    }else{
        res.render("error.ejs");
    }


    // we are sending the whole data which come from the data.json but i only what the username data so for that i have wrrriten some code see 
}); 



app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})


////////////  ///////
// ejs.co  (about ejs tags)
//////////////////////////////////////////////////