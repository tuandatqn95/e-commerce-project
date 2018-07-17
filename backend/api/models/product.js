const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        inventory: {
            type: Number,
            default: 0,
            min: 0
        },
        rating: {
            type: Number,
            default: 0,
            max: 5,
            min: 0
        },
        ratingNumber: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    { collection: "products" }
);

module.exports = mongoose.model("Product", productSchema);
