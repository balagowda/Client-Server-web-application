const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/student")
  .then(() => {
    console.log("Connection success");
  })
  .catch(() => {
    console.log("connection failed");
  });

  const newSchema = mongoose.Schema({
    Name:{
      type:String,
      reuired:true
    },
    Mob:{
      type:NumberInt(10),
      length:10,
      required:true
    }
  })

  const collection = new mongoose.model("studentCollection",newSchema);
  module.exports = collection;

const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/", cors(),(req, res) => {
  
});

app.post('/',async(req,res)=>{
    const {data} = req.body

    await collection.insertMany([data]);
})

app.listen(3000, () => {
  console.log("server started");
});
