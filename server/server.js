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
  studentModel
    .create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.put("/update/:id", (req, res) => {
  studentModel
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.delete("/delete/:id", (req, res) => {
  console.log(req.params.id);
  studentModel
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(404).json({ error: error.message });
    });
});

app.get("/", (req, res) => {
  res.send("hello");
});
