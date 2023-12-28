const express = require ("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Person  = require("./Model/person");


const app= express();
dotenv.config();
mongoose.connect(process.env.db_URL).then(console.log("db connected"));

const port=process.env.port ||4000;

async function start(){
  await Person.create({
        name:"ahmed",
        age:20,
        favoriteFoods:["pizza"],
    });
}
start()

// async function start(){
//     const arrayOfPeoples = [
//         {name:"oussama",age:25,favoriteFoods:['pizza','juice']},
//     {name:'khaled',age:30,favoriteFoods:["hamburger"]}];
//     await Person.create(arrayOfPeoples)
// }
// start()

// async function start(){
//     console.log(await Person.find())
// }
// start();

// async function start(){
//  console.log(await Person.findOne({favoriteFoods:['hamburger']}) )  
// }
// start()

// async function start(){
// console.log(await Person.findById('658d3712cdd0cca2d4bb0432'))
// }
// start()



// async function start(){
//     await Person.findByIdAndUpdate("658d3712cdd0cca2d4bb0431",{$push:{favoriteFoods:"burritos"}})
// }start()



// async function start(){
//     await Person.findOneAndUpdate({name:"oussama"},{age:20})
// }start()



//  async function start(){
//     await Person.findOneAndDelete({name:"ahmed"})
//  }
// start()

// async function start(){
//     await Person.findByIdAndDelete('658d3712cdd0cca2d4bb0431')
// }
// start()

// async function start(){
//     await Person.remove()

// }
// start()


// async function start(){
//     const specific=await Person.find({favoriteFoods:'burritos'}).sort({name:"ahmed",age:0}).limit(2)
// }
// start();
app.listen(port,()=>{
    console.log(`server is runnig on ${port}`)
})