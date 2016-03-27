"use strict";
var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
var __clientPath = __dirname + '/../client/';
app.use('/app', express.static(path.resolve(__clientPath, 'app')));
app.use('/libs', express.static(path.resolve(__clientPath, 'libs')));
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__clientPath, 'index.html'));
};
app.get('/*', renderIndex);
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
