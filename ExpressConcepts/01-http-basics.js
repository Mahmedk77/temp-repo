const http = require('http');
const {readFileSync} = require('fs');

console.log("http://localhost:5000")

//saving all files that our server read

const homePage = readFileSync('./ExpressConcepts/utils/index.html');
const pageStyle = readFileSync('./ExpressConcepts/utils/style.css');
const pageLogic = readFileSync('./ExpressConcepts/utils/browser.js');
const homeImage = readFileSync('./ExpressConcepts/utils/logo.svg'); 

const server = http.createServer((req,res) => {
    const url = req.url 
    
    if(url == '/'){
        res.writeHead(200,{content:'text/html'}); //sends a status code and content type
        res.write(homePage);
        res.end()
    }
    else if(url == '/about'){
        res.writeHead(200,{content:'text/html'});
        res.write("<h1>This is about</h1>");
        res.end()
    }
    //! In our html file there are links, server also reads those so we need those files too 
    else if (url === '/style.css') { 
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(pageStyle)
    res.end()
  }
    // image/logo
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }
    // logic
    else if (url === '/browser.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(pageLogic)
        res.end()
    }
    // 404
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)