const Product = require('../model/Product');

const addProduct_control = async (req, res, next) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            category: req.body.category,
            photo: req.body.photo,
            desc: req.body.desc,
            size: req.body.size,
            price: req.body.price,
            stock: req.body.stock,
            review: req.body.review,
            rating: req.body.rating,
        })

        const product = await newProduct.save();
        res.status(200).json(product);
    }
    catch (err) {
        res.status(400).json({ err: err.message })
    }
}

//get all products

const allProducts_control = async (req, res, next) => {
    try {
        const allProduct = await Product.find();
        res.status(200).json(allProduct)
    }
    catch (err) {
        res.status(400).json({ err: err.message })
    }
}

//get a signle product by id

const signleProduct_control = async (req, res, next) => {
    let Id = req.params.id
    try {
        const signleProduct = await Product.findById(Id)
        res.status(200).json(signleProduct)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ err: err.message })
    }
}
//update product by id

const updateproduct_control = async (req, res, next) => {

        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            res.status(200).json(updatedProduct)
        }
        catch (err) { res.status(500).json(err) }
    }

//delete product by id

const deleteproduct_control = async (req, res, next) => {
    try {
        const post = await Product.findById(req.params.id);
            await post.delete();
            res.status(200).json("Product has been deleted...");
        }
        catch (err) {
            res.status(500).json(err);
          } 

}

module.exports = {
    addProduct_control,
    allProducts_control,
    signleProduct_control,
    updateproduct_control,
    deleteproduct_control
}