'use strict';

const PORT        = 4000;
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const morgan      = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  
});




app.listen(PORT, err => {
  console.log(err || `Server on ${PORT}`);
});
