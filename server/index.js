const express = require('express');
const http = require('http');
const bodyParse = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const passport = require('passport');

mongoose.connect('mongodb://localhost/auth');

const app = express();
app.use(morgan('combined'));
app.use(bodyParse.json({type: '*/*'}));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server is listening on port', port);
