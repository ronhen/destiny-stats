var express = require('express'),
    cors = require('cors'),
    app = express(),
    request = require('request');

app.use(cors());

app.get('/', function(req, res, next){

    request({
        uri: 'http://www.bungie.net/platform/destiny/2/Stats/GetMembershipIdByDisplayName/Ronhen',
        headers: {
            'X-API-Key': '552d1a3467b74b63a278c25f1fa49b06'
        }
    }, function(error, response, body) {
        res.send(body);
    });


});

app.listen(8080, function(){
  console.log('CORS-enabled web server listening on port 8080');
});
