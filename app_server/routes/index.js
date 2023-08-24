var express = require('express');
var router = express.Router();
var ctrlWatches = require('../controller/watches')
var ctrlOthers = require('../controller/others')

router.get('/', ctrlWatches.homelist);
router.get('/watch', ctrlWatches.watchInfo);
router.get('/watch/2', ctrlWatches.watchInfo2);

router.get('/about', ctrlOthers.about);
module.exports = router;
