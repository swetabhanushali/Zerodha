const {Schema} = require("mongoose");

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = {UserSchema};