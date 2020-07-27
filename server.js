const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

require('heroku-self-ping').default("https://mariadikki.herokuapp.com/");
 
const app = express();
 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
 
app.get('/ping', function (req, res) {
    return res.send('pong');
});
 
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/btn', function(req, res) {
    let eq = req.query.eq !== null ? req.query.eq : '';
    let vl = req.query.vl !== null ? req.query.vl : '';
    let ch = req.query.ch !== null ? req.query.ch : '';
    let id = req.query.id !== null ? req.query.id : '';

    let val;
    let nch;

    let sub =ch.substring(ch.length - 1) + id;

    if (sub==='80' || sub==='00' || sub==='10' || sub==='20' || sub==='30' || sub==='40' ||
        sub==='83' || sub==='03' || sub==='13' ||  sub==='43' || sub==='93' ||
        sub==='01' || sub==='41' || sub==='91' ||
        sub==='04' || sub==='14' || sub==='24' || sub==='34' ||
        sub==='82' || sub==='02' || sub==='12' || sub==='42' || sub==='92')
    {
      val = eq + vl;
      nch = ch + id;
    } else if(sub==='22'){
      val = eq.substring(0, eq.length - 1) + '+';
      nch = ch.substring(0, ch.length - 1) + '3';
    } else if(sub==='90' || sub==='94'){
      val = vl;
      nch = ch + id;
    } else if(sub==='11' || sub==='21' || sub==='31' || sub==='32'){
      val = eq.substring(0, eq.length - 1) + vl;
      nch = ch.substring(0, ch.length-1) + id;
    }

    console.log(JSON.stringify({"val": val, "nch": nch}))
    res.send(JSON.stringify({"val": val, "nch": nch}));
});

app.listen(port);