var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


mongoose.connect("mongodb://127.0.0.1:27017/testing");

const userSchema= mongoose.Schema({
  username: String,
  nickname: String,
  discription: String,
  categories:{
    type: Array,
    default: []
  }, 
  datecreated :{
    type: Date,
    default: Date.now()
  }
})

const User=mongoose.model("user", userSchema);
module.exports = User;
