const Product = require("./../models/product");

exports.listProducts = (req, res, next) => {
    const query = Product.find();
    query.populate("category");
    query
        .exec()
        .then(products => res.status(200).json(products))
        .catch(err => next(err));
};

exports.getProduct = (req, res, next) => {
    Product.findById(req.params.id)
        .exec()
        .then(product => (product ? res.status(200).json(product) : next()))
        .catch(err => next(err));
};

exports.addProduct = (req, res, next) => {
    const product = new Product(req.body);
    product
        .save()
        .then(result => res.status(200).json(result))
        .catch(err => next(err));
};

exports.updateProduct = (req, res, next) => {
    Product.findById(req.params.id)
        .exec()
        .then(product => {
            if (!product) return next();
            product.set(req.body);
            product
                .save()
                .then(result => res.status(200).json(result))
                .catch(err => next(err));
        })
        .catch(err => next(err));
};

exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
        .exec()
        .then(result => {
            if (result.n > 0)
                return res.status(200).json({ message: "Deleted product" });
            return next({ message: "Delete product fail" });
        })
        .catch(err => next(err));
};
