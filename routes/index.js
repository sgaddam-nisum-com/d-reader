var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(":asd");
    res.render('table.html', {
        title: 'Express'
    });
});

module.exports = router;
