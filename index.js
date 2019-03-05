const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./backend/config/database");
const path = require("path");

mongoose.Promise = global.Promise;
// mongo connection
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log("could not connect to database", err);
  } else {
    console.log("connect to the database:" + config.db);
    // console.log(config.secret);
  }
});
// path
app.use(express.static(__dirname + '/dist/meanMessage'));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/meanMessage/index.html'))
});
app.listen(3000, () => {
  console.log("app is working in port 3000");
});
