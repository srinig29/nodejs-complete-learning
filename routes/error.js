const express = require('express');

const router = express.Router();

router.use('/', (req, res, next)=> {
    res.status(404).send('<H1>Page not found!</H1>')
});

module.exports = router;