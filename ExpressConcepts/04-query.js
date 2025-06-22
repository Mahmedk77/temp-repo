const express = require('express');
const { products } = require('./ExpressConcepts/data.js');

const app = express();

// Route: Handles query parameters for filtering and limiting products
app.get('/api/products/query', (req, res) => {
    console.log(req.query); // Logs query string parameters from URL

    const { search, limit } = req.query;
    let queryProds = [...products]; // Clone original products array

    // If 'search' query exists, filter products that start with the search term
    if (search) { 
        queryProds = queryProds.filter(prod => {
            return prod.name.startsWith(search);
        });
    }

    // If 'limit' query exists, trim the result array to given limit
    if (limit) {
        queryProds = queryProds.slice(0, Number(limit));
    }

    // If no products matched, return an empty array with success flag
    if (queryProds.length < 1) {
        return res.json({  
            success: true,
            data: []
        });
    }

    console.log(queryProds); // Logs final filtered/limited result

    // Respond with the filtered/limited products
    res.status(200).json({ queryProds });
    
    //! There must only be one 'res'!

});

// Start server on port 5000
app.listen(5000, () => {
    console.log('listening...');
});

