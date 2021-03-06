const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">Add Product</button></form>');
});

router.post('/product', (req, res, next) => {
    console.log(`<li>${req.body.title}</li>`);
    res.redirect('/add-product')
});

module.exports = router;
