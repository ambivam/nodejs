const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    const readstream = fs.createReadStream('index.html')

    res.writeHead(200,{'Content-Type':'text/html'})
    readstream.pipe(res)
}).listen('1212')
