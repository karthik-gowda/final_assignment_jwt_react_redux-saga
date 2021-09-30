const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, default: null },
    question: { type: String, default: null },
    phone: { type: Number }
});

module.exports = mongoose.model("UserQuery", userSchema);