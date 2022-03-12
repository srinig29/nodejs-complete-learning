const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<H1>Welcome to my ExpressJs application</H1>');
});

module.exports = router;