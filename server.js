const express = require("express");
const path = require("path");
const favicon = require('express-favicon');


const app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));

const port = process.env.PORT || 5000;

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);