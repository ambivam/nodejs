const http = require('http')

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.write("Welcome to NodeJs");
        res.end()
    } else if(req.url === '/about'){
        res.write("Welcome to NodeJs ABOUT Page");
        res.end()
    }else{
        res.write("Welcome to NodeJs default error page");
        res.end()
    }


    
})

server.listen(2121)