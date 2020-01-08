const express = require('express');

// like mini express app router is
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

router.post('/product', (req, res, next) => {
    // need to include body parser
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;