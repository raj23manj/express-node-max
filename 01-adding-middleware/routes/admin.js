const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

// like mini express app router is
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // path.join(__dirname, '../','views', 'add-product.html') => global absolute path to the current project folder
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req, res, next) => {
    // need to include body parser
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;