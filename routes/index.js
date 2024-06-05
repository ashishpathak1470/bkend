var express = require('express');
var router = express.Router();

const userModel = require('./users');

router.get('/', function(req, res, next) {
  res.render('index');
});

// flash use kiya hai
router.get('/failed', function(req, res) {
  req.flash("age", 12);
});

router.get('/create', async function(req, res){
  let userdata = await userModel.create({
    username: "neh",
    nickname: "sur",
    discription: "anything im ",
    categories:['js','node','express', 'react', 'next','mongo']
  });
  res.send(userdata);
});

// case insentitive search
router.get('/find', async function(req, res){
  var RegEx = new RegExp("^Surya$", 'i');
  let user = await userModel.findOne({username: RegEx });
  res.send(user);
});


// search according to the perticular parameter
router.get('/read', async function(req, res){
  let users = await userModel.find({categories: {$all: ['next', 'react', 'mongo']}});
  res.send(users);
});


// search according to the date
router.get('/date', async function(req, res){
  var date1 = new Date('2024-06-04');
  var date2 = new Date('2024-06-06');
  let datecreate= await userModel.find({datecreated:{$gte:date1,$lte:date2}});
  res.send(datecreate);
});

//search for any categories that exist
router.get('/cate', async function(req, res){
  let cate = await userModel.find({categories: {$exists:true}});
  res.send(cate);
});




module.exports = router;
