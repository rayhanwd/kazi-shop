const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    photo: { type: String, required: false },
    password: { type: String, required: true },
    role: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Auth', AuthSchema)