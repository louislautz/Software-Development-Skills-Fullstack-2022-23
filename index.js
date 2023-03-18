const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {

    //         if(err) throw err;
            
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })
        
    // }
    
    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 40},
    //         { name: 'Louis Lautz', age: 23}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))
    // }
    // console.log(req.url);


    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of file
    let extname = path.extname(filePath);

    // /initial content-type
    let contentType = 'text/html';

    // Chcek ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT'){
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.end(content, 'utf8')
                })
            } else {
                // Some server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
                
            }
        } else {
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf8')
        }
    })
    console.log(filePath);
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`Server running on port ${PORT} ...`));