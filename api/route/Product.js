const router = require('express').Router();
const product_controller = require('../controller/products');

router.post('/addproduct',product_controller.addProduct_control)
router.get('/all',product_controller.allProducts_control)
router.get('/:id',product_controller.signleProduct_control)
router.put('/:id',product_controller.updateproduct_control)
router.delete('/:id',product_controller.deleteproduct_control)

module.exports = router;