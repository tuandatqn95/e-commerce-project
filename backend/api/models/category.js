const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String },
        description: { type: String },
        //slug: { type: String, required: true, unique: true },
        parent: { type: Schema.Types.ObjectId, ref: "Category" }
    },
    { collection: "categories" }
);

module.exports = mongoose.model("Category", categorySchema);
