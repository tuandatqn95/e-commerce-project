const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        customer: { type: Schema.Types.ObjectId, ref: "Customer" },
        orderTime: { type: Schema.Types.Date, default: new Date() },
        items: [
            {
                name: { type: String, required: true },
                image: { type: String, default: "" },
                description: { type: String, default: "" },
                slug: { type: String, required: true, unique: true },
                price: { type: Number, required: true },
                product: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                quantity: { type: Number, require: true, default: 1 }
            }
        ]
    },
    { collection: "orders" }
);
orderSchema.method("totalPrice", function() {
    return this.items
        .map(item => item.price * item.quantity)
        .reduce((a, b) => a + b, 0);
});

module.exports = mongoose.model("Order", orderSchema);
