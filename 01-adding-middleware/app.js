const http = require('http');

const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next(); // Allows the request to continue to the next middleware in line
// });

// for all requests
app.use('/', (req, res, next) => {
    console.log('This middleware is always run');
    next();
});

app.use('/product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The Add Product</h1>');
});

// for all requests
app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000); // this does both above commented
