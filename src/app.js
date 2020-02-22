const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const router = require('./route/route.js');
const errorLogger = require('./utilities/errorlogger.js');
const requestLogger = require('./utilities/requestlogger.js');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/', router); 
app.use(errorLogger);

app.listen(5500)
console.log("Server started on port: 5500")
