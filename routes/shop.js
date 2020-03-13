const path = require('path');
const express = require('express');

const router = express.Router();
const rootdir = require('../util/path');

const adminData = require('./admin');

router.get('/', (req, res, next) => {

    console.log(adminData.products);
    console.log('In SHOP JS');

    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
});

module.exports = router;