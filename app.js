const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const route = require('./routes');
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const url = process.env.URL;
const port = 8000;

mongoose.set("strictQuery", false);         //To avoid deprciation warning
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', route);

mongoose.connect(url, function (err, client) {
    if (err) console.log(err);

    server.listen(port, function (error) {
        if (error) {
            console.log('error in running the server', error);
            return;
        }
        console.log('server is running successfully');
    })
});
