const express = require('express');
const {products} = require('./ExpressConcepts/data.js');

const app = express();

app.get('/', (req,res) => {
    // res.send(products)
    res.send(`<h1>Hello There!</h1>
        <a href="/api/products"><p>products</p></a>`)    
})

app.get('/api/products', (req,res) => {
    const newProducts = products.map((prod) => {
    const {id,name,image} = prod
    return {id,name,image}
    })
    res.json({newProducts})
})

app.get('/api/products/:id', (req,res) => {
    const newId = req.params.id

    const selectedProd = products.find( prod => prod.id == newId ) //correct
    console.log(selectedProd)
    const {id,name,image} = selectedProd;
    //this is wrong because map always returns null or unidentified if there nothing to return
    // let selectedProd = products.map((prod) => {
    //     const {id} = prod
    //     if(id == newId){
    //         console.log(prod)
    //         return prod
    //     }
    // })
    res.json({id,name,image})
})

app.listen(5000, () => {
    console.log("listening http://localhost:5000")
})















