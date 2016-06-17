'use strict';

const PORT        = 3000;
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const Posts       = require('./posts.js');
const path        = require('path');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.get('/', (req, res) => {
  let indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

app.get('/posts', (req, res) => {
  Posts.get((err, dbData)=> {
    res.status(err ? 400 : 200).send(err || dbData);
  });
});
app.post('/posts', (req, res)=> {
  Posts.post(req.body, (err, dbData)=> {
    err ? res.status(400) : Posts.get((err, dbData)=> {
      res.status(err ? 400 : 200).send(err || dbData);
    });
  });
});




app.listen(PORT, err => {
  console.log(err || `Server on ${PORT}`);
});
