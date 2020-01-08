const http = require('http');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

// need to parse body
const bodyParser = require('body-parser');
// this is a middle ware, for post form
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next(); // Allows the request to continue to the next middleware in line
// });

// for all requests
app.use('/', (req, res, next) => {
    console.log('This middleware is always run');
    next();
});

app.use('/admin', adminRoutes); // /admin/add-product
app.use(shopRoutes);

// to handle error for no routes, catch all routes
app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found!</h1>');
});

// app.use('/add-product', (req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });

// app.post('/product', (req, res, next) => {
//     // need to include body parser
//     console.log(req.body);
//     res.redirect('/');
// });

// app.use('/demo', (req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<h1>The Add Product</h1>');
// });

// // for all requests
// app.use('/', (req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<h1>Hello from Express!</h1>');
// });

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000); // this does both above commented
