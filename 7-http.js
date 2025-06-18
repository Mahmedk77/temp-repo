const http = require('http');

// const http = require('http');

// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//         res.end('hi this is the home page');
//     }
//     if(req.url === '/about'){
//         res.end('hi, welcome to about section');
//     }
//     res.end(`
//         <h1>Oops!</h1>
//         <p> i think you are on the wrong path</p>
//         <a href='/'>here is your link</a>
//     `)
// })

// ❌ Why this throws an error:
// When you request / or /about, your server hits res.end(...) once, 
// and then continues down and hits another res.end(...) again.
// But Node.js only allows one res.end() per request — 
// because once the response is "ended", 
// the connection is considered closed. 
// Trying to write or end the response again will throw this error:

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('hi this is the home page');
    }
    else if(req.url === '/about'){
        res.end('hi, welcome to about section');
    }
    else res.end(`
        <h1>Oops!</h1>
        <p> i think you are on the wrong path</p>
        <a href='/'>here is your link</a>
       `)
        // this works because the browser thinks that str is actual html
})

server.listen(5500);
console.log("server: http://localhost:5500");
