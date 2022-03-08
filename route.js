const fs = require('fs');

const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.write(`<HTML> 
            <HEAD> 
            <TITLE>
            Welcome  
            </TITLE>
            </HEAD> 
            <BODY>
            <form action="/message" method="POST"> 
                <input type="text" name="message"> 
                    <button type="submit">Send</button>
                </input>
            </form>
            </BODY>
            </HTML>`);
        return res.end();
    }
    if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
    
        return req.on('end', () => {
            const postMessage = Buffer.concat(body).toString();
            const msg = postMessage.split('=')[1];
            fs.writeFile('msg.txt', msg, (err) => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();                
            });
        });
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write(`<HTML> 
        <HEAD> 
        <TITLE>
        Welcome  
        </TITLE>
        </HEAD> 
        <BODY>
        I'm gonna crack this shit.!
        </BODY>
        </HTML>`);
    res.end();
    // console.log(req);
}

module.exports = requestHandler;
