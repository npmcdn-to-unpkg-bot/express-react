'use strict'

var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();



app.use('/public/css', express.static(__dirname + '/public/css'));
app.use('/public/js', express.static(__dirname + '/public/js'));

/*
//Simple routing
app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html');
});
*/

const MY_DATA_FILE = path.join(__dirname, 'data.json');

//Main rest endpoints
app.get('/api/:resource', function(req, res){
    fs.readFile(MY_DATA_FILE, function(err, d){
        d = JSON.parse(d);
        let ret = { 
        in: req.params['resource'],
        data: d
        };
        res.json(ret);
    });
});

//Main rest endpoints
app.get('/api/:resource/:id', function(req, res){
    fs.readFile(MY_DATA_FILE, function(err, d){
        d = JSON.parse(d);
        let this_data = {};
        
        for(var i=0; i<d.length;i++){                
            if(d[i].id.toString()===req.params.id.toString()){
                this_data = d[i];
                break;
            }
        }
        let ret = { 
        in: req.params['resource']+"/"+req.params['id'],
        data: this_data
        };
        res.json(ret);
    });
});

app.listen(3000, function () {
    console.log('localhost:3000');
});