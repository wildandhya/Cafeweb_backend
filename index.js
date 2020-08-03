require('dotenv/config');

const express = require('express');

const bodyParser = require('body-parser');
const logger = require("morgan");



const router = require('./src/routes/index')

const app = express();


app.listen(process.env.port, () => {
    console.log(`server is running `)
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(logger("dev"));
app.use(router);