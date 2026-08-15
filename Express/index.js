const express = require('express');   // this express is a function 

const app = express();   // this app is obj which help me to build the application for the webapp


// request 
// 8080, 3000
const port = 8080;
app.listen(port, ()=>{
    console.log(`app is listening on the port ${port}`);
})
// console.log(app);
// if u want to request then open brower type localhost:port num and then see
// and imp that make sure u started the (run the node index.js)

///////////////////

// response 
// app.use   listen any type of the req (get, post )

// app.use ((req, res)=>{
//     console.log(req);
//     console.log("request recieved!");
// });
// to run on the hoppscotch we should install some extension 
// https://github.com/hoppscotch/hoppscotch/discussions/2051 use this github repo to install

// hoppscotch give me error becuase we can't run a localhost on it 
// so agine restart by typing this (node index.js)  now run on the hoppscotach (localhost:3000) now i recieve here in vs code the req received
// if i type the localhost:3000/home then also my request is recevied here  


////////// 
// response send on the website we use this

// res.send( lik html, string , array , json anythig)

// app.use ((req, res)=>{
//     console.log("request recieved!");
//     // res.send("this is a basic response");

//     // obj as res
//     // res.send({
//     //     name: "apple",
//     //     color: "red"
//     // })

//     // html res
//     let code = "<h1>fruits</h1><ul><li>apple</li><li>apple</li></ul>"
//     res.send(code);
// });

//////////////////////////////////
// routes 

// for diff routes the diff res
// single path only one res no multiple reso

// app.get("/", (req, res) => {
//     res.send("hello! i am root")
// });
// app.get("/apple", (req, res) => {
//     res.send("hello! i am apple route")
// });
// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path")
// });

// // if the user searched for the some other routes other than what i have 
// // then catching that not found route and saying that, not found
// // we use the *

// app.get("/*splat", (req, res) => {
//     res.send("this path does not exist")
// });
// // post req
// app.post("/", (req, res) => {
//     res.send("you sent a post request to root")
// });


/////////////////
// path parameters

app.get("/", (req, res) => {
    res.send("hello! i am root")
});

// this handle my parameter where we can add anything what i want that become the path var and this var info is alredy stored in th req 
app.get("/:username/:id", (req, res) => {
    // console.log(req.params);  // params which print thee all para of the request

    let { username, id} = req.params;
    // res.send(`welcome to the page of @${username}`)
    let htmlCode = `<h1>welcome to the page of @${username}</h1>`;
    res.send(htmlCode);

    // res.send("hello! i am routes which u pased as a parameter");
});  
// when u type the localhost on the tab make sure u should type both username and id other wise give the error 
// and try this path test on both the browser and hoppscotach


/////////////////////////

/// serach through the url query seach then how to resopnded it 

app.get("/search",(req, res) => {
    // console.log(req.query);  // which print all the queryes
    let {q} = req.query;
    if(!q){
        res.send(`<h1>nothing searched</h1>`);  //http://localhost:8080/search?  if i search this without any query it give the resonpond
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
    // res.send("no results");
})  // to run test http://localhost:8080/search?q="apple" type this in hoppscotach
// and see the vscode terminal where u can find the qureis