var express = require('express');
var router = express.Router();
var Student = require('../models/students');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next){
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});

module.exports = router;
