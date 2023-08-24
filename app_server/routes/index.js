var express = require('express');
var router = express.Router();
var ctrlBooks = require('../controller/books')
var ctrlOthers = require('../controller/others')

router.get('/', ctrlBooks.homelist);
router.get('/book', ctrlBooks.bookInfo);
router.get('/book/2', ctrlBooks.bookInfo2);
router.get('/book/3', ctrlBooks.bookInfo3);
router.get('/book/4', ctrlBooks.bookInfo4);

router.get('/about', ctrlOthers.about);
module.exports = router;
