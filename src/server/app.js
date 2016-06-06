/**********************************************************
*                      Load Modules                      *
**********************************************************/

import path from 'path';
import fs from 'fs';

import express from 'express';
import webpack from 'webpack';
import config from '../../webpack.config.dev';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import './models/index'; //import all models

const app = express();

const environment = process.env.NODE_ENV
,   port = process.env.PORT || 3007;

let routes = null;

/**********************************************************
* Connect MongoDB, Bootstrap models and Config passport  *
**********************************************************/

const db_url = process.env.MONGODB_DB_URL || 'mongodb://127.0.0.1:27017/epfl-wiki';
mongoose.connect(db_url, function (err) {
if (err) {
  console.log(err, err.stack);
} else {
  console.log("Connected to mongodb.");
}
});

/**********************************************************
*                     Configuration                      *
**********************************************************/

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(compress());
app.use(logger('dev'));
app.use(cors());

// var route = require('./routes/index.js');
// app.use('/api', route);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: {}
    });
  });

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

switch (environment) {
    case 'build':
        console.log('** BUILD **');
        app.use(express.static('./build/'));
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use(express.static('./tmp'));
        app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});
