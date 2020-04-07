const {Schema, model} = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: Number, required: true, unique: true},
    username: {type: String, required: true}
});

module.exports = model('user', schema)
