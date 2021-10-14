const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    photo: { type: String, required: true },
    desc: { type: String, required: true },
    size: { type: Array, required: true },
    price: { type: Number, required: true },
    stock: { type: String, required: true },
    review: { type: Array, required: true },
    rating: { type: Array, required: true },

}, { timestamps: true })

module.exports = mongoose.model('Product', ProductSchema)