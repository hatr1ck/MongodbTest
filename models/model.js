
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mySchema = new Schema({
    nickname: String
  });
  let Model = mongoose.model('Model', mySchema);

  module.exports = Model;