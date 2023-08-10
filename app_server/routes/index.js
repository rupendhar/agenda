var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controller/locations')
var ctrlOthers = require('../controller/others')

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/2', ctrlLocations.locationInfo2);
router.get('/location/3', ctrlLocations.locationInfo3);
router.get('/location/review/new', ctrlLocations.addReview);

router.get('/about', ctrlOthers.about);
module.exports = router;
