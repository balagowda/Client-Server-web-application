require("./models/db");
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const studentModel = require("./models/student.model");
const { json } = require("body-parser");

var app = express();
app.use(cors());
app.use(express.json());
//app.use(bodyparser.urlencoded({extended:true}));

var a = app.listen(8000, () => {
  //console.log("Now started",a.address().port);
});

app.get("/message", async (req, res) => {
  var msg = await studentModel.find();
  res.json(msg);
});

app.post("/add", (req, res) => {
  var Name = req.body.name;
  var clas = req.body.class;
  var email = req.body.email;
  var contact = req.body.contact;

  studentModel
    .create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.get("/", (req, res) => {
  res.send("hello");
});
