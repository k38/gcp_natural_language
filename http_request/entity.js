function entity(apikey) {
    const request = require('request');
    const headers = {
        'Content-Type': 'application/json'
    };
    const text = `Multiregion serverless distributed training with AWS Batch and Amazon SageMaker`;
    const document = {
        content: text,
        type: 'PLAIN_TEXT'
    };
    const options = {
        url: `https://language.googleapis.com/v1/documents:analyzeEntities?key=${apikey}`,
        method: 'POST',
        headers: headers,
        json: true,
        body: {
            document: document,
        }
    };

    request(options, (error, res, body) => {
        console.log(JSON.stringify(res));
    });
}

const secret = require('./secret.js');
entity(secret.key);
