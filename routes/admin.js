const path = require('path');
const express = require('express');
const router = express.Router();

//for setting current directory path
const rootdir = require('../util/path');
const products = [];

//app.use
// /admin/add-product=>GET
router.get('/add-product', (req, res, next) => {
    console.log('In Admin JS add-product');
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
});

//for post method url only 
router.post('/add-product', (req, res, next) => {
    // console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');

});
module.exports.routes = router;
module.exports.products = products;