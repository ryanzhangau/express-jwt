const express = require('express');
require('dotenv').config();
const app = express();
// app('view engine', 'ejs');
const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});