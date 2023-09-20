const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || '5000';


//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//test route
app.get('/', (req, res) => {
  res.send('<h1>Hello World! . that is backend of mederma</h1>');
});

//listen to server
app.listen(port, (err) => {
    if (err) throw err;
    console.log('Server listening on port'.red, port.yellow);
  });

