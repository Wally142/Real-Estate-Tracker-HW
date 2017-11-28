var router = require('express').Router();
var Place = require('../models/schema');

router.get('/', function (req, res) {
    Place.find({cost:{$exists:true}}, function (err, placeObj) {
        if (err) {
            console.log('router get err: ', err);
            res.sendStatus(500);
        } else {
            console.log('data SALE hitting server');
            res.send(placeObj);
        }
    });
});

router.post('/', function (req, res) {
    console.log('in SALE POST', req.body);
    var house = new Place(req.body);
    
    house.save(function (err) {
        if (err) {
            console.log('oops');
            res.sendStatus(500);

        } else {
            console.log('made it');
            res.sendStatus(202);
        }
    });
});

module.exports = router;