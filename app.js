//https://www.npmjs.com/package/google-trends-api

var http = require('http');
var trends = require('google-trends-api');

var server = http.createServer(function(req,res) {
    res.writeHead(200, {"Content-Type": "application/json"});
    trends.interestByRegion({keyword: 'Obama'}).then(function(results) {
        console.log('These results are awesome', results);
        res.write(results);
        res.end();
    }).catch(function(err) {
        console.error('Oh no there was an error', err);
        res.write(err);
        res.end();
    });

});

server.listen(3000, "localhost");
console.log("listening on port 3000");