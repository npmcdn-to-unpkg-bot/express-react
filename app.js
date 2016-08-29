var express = require('express');
var app = express();

app.use('/public/css', express.static(__dirname + '/public/css'));
app.use('/public/js', express.static(__dirname + '/public/js'));

//Simple routing
app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html');
});

const MY_DATA = [
    {id:1, desc:"abc1", value:1.2},
    {id:2, desc:"abc2", value:1.3},
    {id:3, desc:"abc3", value:1.4}
]

//Main rest endpoints
app.get('/api/:resource', function(req, res){
    let ret = { 
      in: req.params['resource'],
      data: MY_DATA
    };
    res.json(ret);
});

//Main rest endpoints
app.get('/api/:resource/:id', function(req, res){
    let this_data = {};
    
    for(i=0; i<MY_DATA.length;i++){                
        if(MY_DATA[i].id.toString()===req.params.id.toString()){
            this_data = MY_DATA[i];
            break;
        }
    }
    let ret = { 
      in: req.params['resource']+"/"+req.params['id'],
      data: this_data
    };
    res.json(ret);
});

app.listen(3000, function () {
    console.log('localhost:3000');
});