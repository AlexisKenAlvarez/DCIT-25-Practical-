const mongoose = require("mongoose")

const { Schema } = mongoose

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    age: String,
})

const User = mongoose.model("users", UserSchema)
module.exports = User;