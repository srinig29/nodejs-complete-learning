const express = require('express');
const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop')
const errorRoute = require('./routes/error')

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(shopRoute);
app.use(errorRoute);


// This is to start and listen the server on PORT 4000
app.listen(4000);
