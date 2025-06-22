const express = require('express');
const {middleWare1, middleWare2} = require('./utils/middlewares/mdws')

const app = express();


app.use(middleWare1) //Allows to use middleware with each and every route  
// app.use('/api', middleWare) //if we want only specific paths

app.use([middleWare1, middleWare2]) //if we want to use more than one mdw we use arrays

app.get('/', (req, res) => {
    res.send('HomePage')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req,res)=>{
    res.send('Products')
})

app.get('/api/v1', (req,res)=>{
    res.send('ProductsApi')
})

app.get('/two-middlewares', [middleWare1, middleWare2], (req,res) => { //to use two mdws
    res.send('Two mdws');
})

app.listen(5000, () => {
    console.log('listening on http://localhost:5000');
})