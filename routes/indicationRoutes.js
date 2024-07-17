const express = require('express');
const router = express.Router();
const { getAllIndications
} = require('../controllers/indicationControllers');

router.route('/').get(getAllIndications)


module.exports = router;