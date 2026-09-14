const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use(() => {
//     console.log("Hi, I am middleware");
// });

// next in middleware

// app.use((req, res, next) => {
//     // let {query} = req.query;
//     // console.log(query);
//     console.log("Hi, I am 1st middleware");
//     // res.send("Middleware finised");
//     // next();
//     // console.log("hi this me"); // this will excute after the 2nd and always rem after next don't write anything the next should be a last one 
//     return next(); // perfer to write this beause when we write the return after this nothing get excuted so we can't run after this so prefered
//     console.log("hi"); 
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });


// utility (logger in middleware)  -- see the morgan

// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

// app.get("/random", (req, res, next) => {
//     console.log("I am only for random");
//     next();
// });

// api token
// app.use("/api", (req, res, next) => {  //http://localhost:8080/api?token=giveaccess 
//     let { token } = req.query;
//     if(token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED!");
// });

// multiple middleware
const checkToken = ("/api", (req, res, next) => {  //http://localhost:8080/api?token=giveaccess 
    let { token } = req.query;
    if(token === "giveaccess") {
        next();
    }
    // res.send("ACCESS DENIED!");
    // error handler
    throw new ExpressError(401, "ACCESS DENIED"); // we can change the eror message
    // http://localhost:8080/api?token=giveaccess  run this and do the mistie on this
});

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});




// if i define a middleware -> send the response without reaching this below res.send
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
}); // this will not work when i run this on the locahost beacuase the middle ware alredy done response and stoped 
// in every time the middle ware run it code so we never this path so we can get this printed on the page 



// error handler 
app.get("/err", (req, res) => {
    abcd = abcd
});

// error when someone try to access the admin 
app.use("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidden");
})

// app.use((err, req, res, next) => {
//     // console.log(err);
//     console.log("------ ERROR ------");
//     next(err);  // here if we write run the local host without err in the next it will not print any error if caught in it, it just simiply say that can't get page no other exextuionn wont hanppen after it 
//     // here in the error handling mm when we call the next it finid the non error handler mm so to stop this find we use the next(err) so we are ensuring that my express should know err and print it on the pge


//     // imp
//     //next() --> means find the non error handling mw
//     //next(err) --> means find the error handing mw
// });

app.use((err, req, res, next) => {
    // console.log("----- ERROR1 ----");
    // next(err);
    // res.send(err);
    let { status = 500, message = "Some Error Occurred" } = err;  // only writing the status will cause the error for the non thorwing error exam is /err here it not thorwing any error so 
    res.status(status).send(message);
    
})

//404
app.use((req, res) => {  // here we didn't given any path, by default it has the "/" so that's why in above case what ever we write the path the print is middleware
    res.status(404).send("Page not found!");
}) 
app.listen(8080, () => {
    console.log("server is listining on port: 8080");
});