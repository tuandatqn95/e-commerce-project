const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb://" +
            process.env.MONGO_USERNAME +
            ":" +
            process.env.MONGO_PASSWORD +
            "@node-shop-api-shard-00-00-ndzgv.mongodb.net:27017,node-shop-api-shard-00-01-ndzgv.mongodb.net:27017,node-shop-api-shard-00-02-ndzgv.mongodb.net:27017/test?ssl=true&replicaSet=node-shop-api-shard-0&authSource=admin",
        { useNewUrlParser: true }
    )
    .catch(err => {
        console.log("Mongoose:", err.message);
    });
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS handling
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Alllow-Methods",
            "PUT, PUT, DELETE, PATCH, GET"
        );
        return res.status(200).json({});
    }
    next();
});

// Routes which handle requests
const categoryRoute = require("./api/routes/category");
const productRoute = require("./api/routes/product");

app.use("/categories", categoryRoute);
app.use("/products", productRoute);

app.use((req, res, next) => {
    const error = new Error("Not found!");
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message
    });
});

module.exports = app;
