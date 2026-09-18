// one to many approach 2
const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
};

// order Schema
const orderrSchema = new Schema({
    item: String,
    price: Number,
});

// customer schema
const customerSchema = new Schema({
    name: String,
    // >100s so used a array to store objId refernce
    orders:[
        {
            // here we item and price already defined in the order so now how to say type to refer mongo--models--populate
            // here we store the Objids
            type: Schema.Types.ObjectId,
            ref: "Order",
        }
    ]
})

const Order = mongoose.model("Order", orderrSchema);
const Customer = mongoose.model("Customer", customerSchema);

// customer data adding
// const addCustomer = async () => {
    // let cust1 = new Customer({
    //     name: "usharani",
    //     // adding order can be cust1.order.push(objId)/obj/childoc
    // });

    // //child doc
    // let order1 = await Order.findOne({item: "Chai"}); 
    // let order2 = await Order.findOne({item: "dosa"});

    // cust1.orders.push(order1);  // ind db it don't store whole data it just store the id bease type what we defined only sotre the or_id
    // cust1.orders.push(order2); // in terminal do this db.customers.find() i can see only the id not whole details

    // let result = await cust1.save()
    // console.log(result);

//     let result = await Customer.find({});
//     console.log(result);
// };
// addCustomer();

// populate
// if i want full details then  
// one to many (approach 2)
const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders"); // means i want a full obj(details) then we can use this
    console.log(result[0]);  // access the 0th indexed custmer deatils
};

findCustomer();

// order data adding
// const addOrders = async () => {
//     let res = await Order.insertMany([
//         {item: "Samosa", price: 25},
//         {item: "Chai", price: 15},
//         {item: "dosa", price: 60},
//     ]);
//     console.log(res);
// };

// addOrders();

