const express = require('express');
const path = require('path');


const app = express();
app.use(express.static('./ExpressConcepts/utils/')) //makes available all the paths in those files

app.get('/', (req,res) => {
    
    //A better pratice to use path.resolve as it joins sensitivly two arguments with '/'
    res.sendFile(path.resolve(__dirname,"./ExpressConcepts/utils/index.html")); //sendFile require abs path

})

// A default value for all method if no end-point is found
// app.all("*", (req,res)=>{
//     res.status(404).send('NOT FOUND')
// })
app.listen(5000, ()=>{
    console.log('listening http://localhost:5000...')
})