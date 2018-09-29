/* eslint-disable */
import express from 'express'
import path from 'path'
import opn from 'opn'
import webpack from 'webpack'
import config from '../webpack.config.js'
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express()
const port = 8080

app.use(express.static('src'))

const webpackCompiler = webpack(config);
const wpmw = webpackMiddleware(webpackCompiler,{
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    colors: true
  }
});

app.use(wpmw);

const wphmw = webpackHotMiddleware(webpackCompiler);
app.use(wphmw);


app.use('*', function (req, res, next) {
  var filename = path.join(webpackCompiler.outputPath,'login/login.html');
  webpackCompiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.get('/users', function (req, res) {
  res.json([
    { 'uname':'om.prakash@siemens.com', 'pass': 'omprakash' },
    { 'uname':'kumar.prateek@siemens.com', 'pass': 'prateek'}
    ])
})


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/login/login.html'))
})

app.get('/dashboard', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/responses/success.html'))
})

app.get('/registration', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/registration/registration.html'))
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  } else {
        opn('http://localhost:' + port)
  }
})

