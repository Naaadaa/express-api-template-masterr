const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Admin = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
   

});

module.exports = mongoose.model('Admin', Admin);
