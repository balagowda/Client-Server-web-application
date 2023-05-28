const mongoose = require('mongoose');
require("./student.model");

mongoose
  .connect("mongodb://localhost:27017/studentDB", {
  })
  .then(() => {
    //console.log("Connection Success");
  })
  .catch(() => {
    console.log("Failed to connect");
  });
