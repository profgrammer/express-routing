const express = require('express');
const app = express();
const path = require('path');
// app.use(express.static('public'));
// app.use('/static', express.static('static'));

const productHandler = require('./routes/products');

app.use('/products', productHandler);

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname ,'/public/notfound.html'));
})

app.listen(3000, () => console.log('listening on port 3000'))