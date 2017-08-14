var express = require('express');
var RepoModel = require('../models/repo');
var router = express.Router();

router.get('/:lang', function (req, res) {
    const lang = req.params.lang;
    RepoModel.findOne({
        lang: lang
    }, function (err, repos) {
        if (err)
            res.send(err);
        res.json(repos);
    });
});

module.exports = router;