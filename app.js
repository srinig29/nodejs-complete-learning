const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(`URL: ${req.url} 
    // Header: ${req.headers}
    // Method: ${req.method}`);

    if(req.url === '/'){
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
    if(req.url === '/message' && req.method === 'POST'){
fs.writeFile('msg.txt', 'DUMMY');

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
});

server.listen(4000);