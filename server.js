const http = require('http');
const mqtt = require('mqtt');
const fs = require('fs');
const path = require('path')
console.log(fs)
console.log(mqtt)
const {InfluxDB , Point} = require('@influxdata/influxdb-client')

// You can generate a Token from the "Tokens Tab" in the UI
const token = 'IWmVAdV3zrsm7I_lzZcO7aroPfKl7gHwDgBfvdXDgYzTmgtjPB5sDtcqz9ikKd4UY3ZeM4khjOGuLjxGb8VnYg=='
const org = 'ilyamerculov@gmail.com'
const bucket = `ilyamerculov's Bucket`

const clientdb = new InfluxDB({url: 'https://europe-west1-1.gcp.cloud2.influxdata.com', token: token})
console.log(clientdb)
// console.log(path)

// const writeApi = clientdb.getWriteApi(org, bucket)
// writeApi.useDefaultTags({host: 'host1'})

// const point = new Point('mem')
//   .floatField('used_percent', 75.43234543)
// writeApi.writePoint(point)
// writeApi
//     .close()
//     .then(() => {
//         console.log('FINISHED')
//     })
//     .catch(e => {
//         console.error(e)
//         console.log('Finished ERROR')
//     })



var jsport = 8278;

http.createServer(function (request, response) {
    console.log( 'req.url: ' , request.url.substr(1) )
    console.log(path.extname(request.url.substr(1)))
    if( path.extname(request.url.substr(1)) == '.png' ){
        fs.readFile( request.url.substr(1) , function (error , data){
            if(error){
                response.statusCode = 404;
                response.end(' Not found ');
                console.log(error)
            } else {
                response.writeHead(200, {
                  'Content-Type': 'image/png image/jpeg',
                  'Access-Control-Allow-Origin' : '*',
                  'Access-Control-Allow-Methods' : 'GET , PUT , POST , DELETE'});
                console.log( data );
                response.end( data );
            }
        })
    } else {
        console.log(request.headers)
        parseJSONAsync(request).then(data => console.log('This is data: ' + data))
    }
    // console.log(request)
    

}).listen(jsport);

function parseJSONAsync( request ){
    return new Promise((resolve , reject) => {
      typeof request === 'string' ? resolve(request) : reject( console.log("ERROR, type is " + typeof request))
    })
}

console.log('Server running at http://127.0.0.1:' + jsport + '/');
