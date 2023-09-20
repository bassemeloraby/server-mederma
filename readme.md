git init
npm init -y
npm i colors cors dotenv express express-async-handler mongoose
npm i --save-dev nodemon
md config,controllers,models,routes
=============================================
index.js
---------
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

===============
node index.js  
==============

"start": "node server.js",
"dev": "nodemon server.js"
=================
