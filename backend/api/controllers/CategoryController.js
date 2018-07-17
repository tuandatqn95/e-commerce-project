const Category = require("./../models/category");

exports.listCategories = (req, res, next) => {
    Category.find()
        .exec()
        .then(categories => res.status(200).json(categories))
        .catch(err => next(err));
};

exports.getCategory = (req, res, next) => {
    Category.findById(req.params.id)
        .exec()
        .then(category => (category ? res.status(200).json(category) : next()))
        .catch(err => next(err));
};

exports.addCategory = (req, res, next) => {
    const category = new Category(req.body);

    category
        .save()
        .then(newCategory => res.status(200).json(newCategory))
        .catch(err => next(err));
};

exports.updateCategory = (req, res, next) => {
    Category.findById(req.params.id)
        .exec()
        .then(category => {
            if (!category) return next();
            category.set(req.body);
            category
                .save()
                .then(result => res.status(200).json(result))
                .catch(err => next(err));
        })
        .catch(err => next(err));
};

exports.deleteCategory = (req, res, next) => {
    Category.deleteOne({ _id: req.params.id })
        .exec()
        .then(result => {
            if (result.n > 0)
                return res.status(200).json({ message: "Deleted category" });
            return next({ message: "Delete category fail" });
        })
        .catch(err => next(err));
};
