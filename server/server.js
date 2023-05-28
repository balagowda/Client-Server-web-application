require('./models/db');
const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const studentModel = require('./models/student.model');

var app = express();
app.use(cors());
app.use(express.json());
//app.use(bodyparser.urlencoded({extended:true}));

var a = app.listen(8000,()=>{
  //console.log("Now started",a.address().port);
});

app.get("/message", async (req, res) => {
  var msg = await studentModel.find();
  res.json(msg);
});

app.get('/',(req,res)=>{
  res.send("hello");
})
