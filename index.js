const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || '5000';
const router = express.Router();
const connectDB = require('./config/db');

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// main routes
app.use('/api/allDrugs', require('./routes/allDrugsRoutes'));
app.use('/api/indications', require('./routes/indicationRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/equipments', require('./routes/equipmentRoutes'));

//test route
app.get('/', (req, res) => {
  res.send('<h1>Hello World! . that is backend of mederma</h1>');
});

//Connect to the database before listening
connectDB().then(() => {//listen to server
  app.listen(port, (err) => {
      if (err) throw err;
      console.log('Server listening on port'.red, port.yellow);
    });})


