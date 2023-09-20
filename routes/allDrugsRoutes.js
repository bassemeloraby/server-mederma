const express = require('express');
const router = express.Router();
const { getAllDrugs
} = require('../controllers/allDrugsControllers');

router.route('/').get(getAllDrugs)


module.exports = router;