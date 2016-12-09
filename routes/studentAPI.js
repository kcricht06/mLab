var express = require('express');
var router = express.Router();
var Student = require('../models/students');
/* GET home page. */
router.get('/studentAPI', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next){
    Student.find({}, function (err, results) {
        res.json(results);
    });
});
router.get('/:studentId', function(req, res, next){
  Student.findById(req.params.studentId, function(err, result){
    if (err) console.log(err);

    res.json(result.first_name + ' ' + result.last_name + ' ' + result.slack);
  });
});

router.post('/',function(req,res,next){

  var postInfo = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    slack: req.body.slack
  };

  var newPost = new Student(postInfo);

  newPost.save(function(err,success){
    res.redirect('/');
  });
});

router.put('/',function(req,res,next){

  var updateInfo = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    slack: req.body.slack
  };

  Student.findByIdAndUpdate(req.body.id, updateInfo,function(err,post){
    if(err) console.log(err);

    res.send('SUCCESS!');
  });
});
router.delete('/', function(req, res, next){
  Student.findByIdAndRemove(req.body.id, function(err, post){
    if (err) console.log(err);

    res.json('Success');
  });
});

module.exports = router;
