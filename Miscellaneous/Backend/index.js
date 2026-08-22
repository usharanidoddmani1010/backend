const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true }));  // without this the data will not printed on my vs code this how the data stored in the backend but we just printing on my terminal but acutaly we do it with my database
// THIS use we can see on the browser

app.use(express.json()); // this used when ur testing on the hoppscotach
// without doing this if i print then it give me undifined because without saying which type of the data is send to my server how it can identyity so my cl(req.bpdy) give like undifined

// query used 
app.get("/register", (req, res) =>{
    let { user , password} = req.query;
    res.send(`standard GET response. welcome:  ${user}!`);
});

// body is used
app.post("/register", (req, res) =>{
    // console.log(req.body);
    let { user , password} = req.body; // there we use the qurey here we needd to  send the body for the inforamtion 
    res.send(`standard POST response. welcome: ${user}!`);

});

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
})