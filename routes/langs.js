var express = require('express');
var RepoModel = require('../models/repo');
var router = express.Router();

router.get('/', function (req, res) {
    RepoModel
        .find({})
        .select({
            lang: 1,
            _id: 0
        })
        .sort({
            lang: 1
        })
        .exec(function (err, langs) {
            if (err)
                res.send(err);
            res.json(langs);
        });
});

module.exports = router;