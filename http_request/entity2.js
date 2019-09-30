function entity(apikey) {
    const http = require('https');
    const text = `Multiregion serverless distributed training with AWS Batch and Amazon SageMaker`;
    const postData = {
        document: {
            content: text,
            type: 'PLAIN_TEXT'
        }
    };
    const postDataStr = JSON.stringify(postData);
    const headers = {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postDataStr)
    };
    const options = {
        method: "POST",
        headers: headers
    };
    const url = `https://language.googleapis.com/v1/documents:analyzeEntities?key=${apikey}`;
    const req = http.request(url, options, function(res){
        let output = "";
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            output += chunk;
        });
        res.on('end', function(){ console.log(output) });
    });
    req.on('error', function(e){ console.log(JSON.stringify(e)) });
    req.write(postDataStr);
    req.end();
}

const secret = require('./secret.js');
entity(secret.key);
