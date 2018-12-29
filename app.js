const express = require("express");
const expressLayouts = require('express-ejs-layouts');

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index.js'));

app.use('/users', require('./routes/users.js'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Booming on port ${port}`));