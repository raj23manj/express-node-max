const express = require('express');

const router = express.Router();

const path = require('path');

const rootDir = require('../util/path');

router.get('/demo', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The Add Product</h1>');
});

// for all requests
router.get('/', (req, res, next) => {
    console.log('In another middleware!');
    //res.send('<h1>Hello from Express! Any other route</h1>');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;