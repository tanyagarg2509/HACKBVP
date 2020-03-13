const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
        return res.end();
    }
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    if (url === '/message' && method === 'POST') {
        // res.setHeader('Content-Type', 'text/html');
        // res.write('<h1>Tanya GArg</h1>');
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            // fs.writeFileSync('message.txt', message);

        });


    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Tanya GArg</h1>');
    res.end();
};

// module.exports = requestHandler;
module.exports = {
    handler: requestHandler,
    someText: 'mynameistanya'
};