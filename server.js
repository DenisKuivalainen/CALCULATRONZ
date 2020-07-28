const express = require('express');
const path = require('path');
const btn = require('./buttons.js');
const summ = require('./summ.js');
const back = require('./back.js');
const mem = require('./memory.js');
const port = process.env.PORT || 8080;

require('heroku-self-ping').default("https://mariadikki.herokuapp.com/");
 
const app = express();
 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
 
app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/btn', function(req, res) {
    res.send(btn.btn(req));
});

app.get('/summ', function(req, res) {
    res.send(summ.summ(req));
});

app.get('/back', function(req, res) {
    res.send(back.back(req));
});

app.get('/msf', function(req, res) {
    res.send(mem.msf(req));
});

app.get('/mmf', function(req, res) {
    res.send(mem.mmf(req));
});

app.get('/mpf', function(req, res) {
    res.send(mem.mpf(req));
});

app.get('/mcf', function(req, res) {
    res.send(mem.mcf(req));
});

app.get('/mrf', function(req, res) {
    res.send(mem.mrf(req));
});

app.get('/dis1', function(req, res) {
    res.send(mem.dis1(req));
});

app.get('/dis2', function(req, res) {
    res.send(mem.dis2(req));
});



app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'server', 'build', 'index.html'));
});

app.listen(port);