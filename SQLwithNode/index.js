const { faker } = require('@faker-js/faker');  // install then require
const mysql = require('mysql2');
const { Connection } = require('mysql2/promise');

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodoverride = require("method-override");

app.use(methodoverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// connecting db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',   // this name is create database delta_app; this name not the file name 
  password: 'Usha@rani0101'  // same as the mysql password
});




let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
}


// this query to use the data from the db
// let q = "SHOW TALBES";  // use this to write the query which we execute on the index.js
// this is ? are placeholders which take the values tynamically like argumemnt

// inser neww data 
// let q = "INSERT INTO user (id, username, email, password) VALUES (?,?,?,?)";

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";  // when we are sending the multiple values of array then single ? 
// // let users = [["123a", "123a_newuser", "abca@gmail.com", "123a"],
// //               ["788", "usharani", "usha@gmail.com", "usha"]
// //             ]; // this are the values of the ? 
//             // run this index.js and sel * from the user

// // insertion of the data using faker

// let data = [];
// for(let i=1; i<=100; i++){
//   // console.log(getRandomUser());  // do node index.js  100 user data (fake)
//   data.push(getRandomUser());
// };   // whey commiteing out because we alreday instered through


// /
    // connection.query(q, user, (err, result) => {  // why we wrote the user how this placeholder user value is paaseed to placeholder 
      // it is by the q, if q find any placeholder then it fill the placeholder with the user array element 
      // now do the index.js the answer it something else ResultSetHeader {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 0,
//   info: '',
//   serverStatus: 2,
//   warningStatus: 0,
//   changedRows: 0
// }   // this is what come when we write the index.js 
      // so in CLI run select *from user;
//       connection.query(q, [/*users*/ data], (err, result) => {  //to send multiple array values we use the []
//         if(err) throw err;
//         console.log(result);  // here the result is a array
//         console.log(result.length );
//         console.log(result[0]);
//     });
// } catch(err) {
//     console.log(err);
// }

// connection.end();  // this end the connection after priting

// //   code: 'ER_BAD_DB_ERROR',
//   errno: 1049,
//   sqlState: '42000',
//   sqlMessage: "Unknown database 'test'",
//   sql: undefined,
//   fatal: true
// }  still get error because till now i have used the workbench now how to access on the CLI
  

// mysql -u root -p  run this cammond in terminal
// now u can run th node index.js

// let getRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),       //this are obj now i am return thee arry see above
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }

// console.log(getRandomUser());




/// for the routes create we are using this section 



// show the no.of users 

/// home route 
app.get("/", (req, res) => {
  let q = `select count(*) from user`;  // this is used to run the query 
  try{
      connection.query(q, (err, result) => {  
        if(err) throw err;   // "count(*)" this is a key the values is primned for this 
        // console.log(result[0]["count(*)"]);  // or .key // when query runs safely itt give the answer ([{"count(*)":103}])
        // res.send("sucess"); 
        let count = result[0]["count(*)"]; 
        res.render("home.ejs", {count});
    });
  } catch(err) {
      console.log(err);
      res.send("some error in DB");
  }
  // res.send("welcome to home page");
  // no need of the end connection 
});


// show route
app.get("/user", (req, res) => {
  // res.send("success");
  let q = 'select * from user';
  try{
      connection.query(q, (err, users) => {  
        if(err) throw err;  
        // console.log(result);
        // res.send(result);
        res.render("showusers.ejs", { users });
    });
  } catch(err) {
      console.log(err);
      res.send("some error in DB");
  }
});

// edit username
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id= '${id}'`;
  // console.log(id);
  try{
      connection.query(q, (err, result) => {  
        if(err) throw err;  
        let user = result[0];
        res.render("edit.ejs", {user});
    });
  } catch(err) {
      console.log(err);
      res.send("some error in DB");
  }
  // res.render("edit.ejs");
});

// UPDATE (DB) route
app.patch("/user/:id", (req, res) => {
  // res.send("upated");
  let { id } = req.params;
  let { password : formPass, username: newUsername} = req.body;  // what i enter in the placholder that values which are used to check and update it
  let q = `SELECT * FROM user WHERE id= '${id}'`;
  try{
      connection.query(q, (err, result) => {  
        if(err) throw err;   
        let user = result[0]; 
        // res.render("edit.ejs", {user});

        if(formPass != user.password) {
          res.send("WRONG password");
        }
        // res.send(user);
        else{
          let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
          connection.query(q2, (rr, result) => {
            if(err) throw err;  
            // res.send(result);
            res.redirect("/user");
          });
        }
    });
  } catch(err) {
      console.log(err);
      res.send("some error in DB");
  }
});

app.listen(port, () => {
    console.log("Listening to port:  8080");
});

