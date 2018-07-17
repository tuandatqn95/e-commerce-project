const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true }
    },
    { collection: "customers" }
);

module.exports = mongoose.model("Customer", customerSchema);
