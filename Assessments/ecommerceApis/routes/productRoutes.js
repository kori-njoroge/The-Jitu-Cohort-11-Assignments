const { allProducts, specificProd, specificCategory, updateProduct, deleteProduct } = require('../controllers/productsControllers');

const productRoute = require('express').Router();


productRoute.get('/allproducts', allProducts);
productRoute.get('/specificproduct/:id', specificProd);
productRoute.get('/specificcategory/:category', specificCategory);
productRoute.put('/updateproduct', updateProduct);
productRoute.delete('/deleteproduct/:id', deleteProduct);


module.exports = productRoute
