var express = require('express');
var db = require('./db');
var app = express();

var langsRouter = require('./routes/langs');
var listRouter = require('./routes/list');

app.use('/', langsRouter);
app.use('/list', listRouter);

app.listen(3000);