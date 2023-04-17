const mongoose = require('mongoose');

const myModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MyModel = mongoose.model('users', myModelSchema, 'users');

module.exports = MyModel;
