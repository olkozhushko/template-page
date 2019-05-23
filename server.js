const express = require("express");
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(5000, () => console.log("port is listening to"));