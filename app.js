
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const Model = require('./models/model.js');

mongoose.connect('mongodb://localhost/WTH');
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
/////////////////////////////////////////////////// 

app.post('/add', function(req, res, next){
  let add = new Model();
  add.save();
  console.log(req);
  next();
})
app.get('/add', function(req, res){
  res.send("SUCKS ASS");
})
app.get('/',function(req, res){
  res.sendFile('C:/node/index.html');
});




app.listen(3000, () => console.log('RUN!'))