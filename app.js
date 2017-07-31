const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Civic Solutions is listening on port ${PORT}`)
});

app.get('/',(req,res)=>{
  res.send('Hello world!')
});

app.use('*',(req,res)=>{
  res.status(404).json({
    message:'Invalid route!',
  });
});
