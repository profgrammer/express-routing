const express = require('express');
const path = require('path');
const router = express.Router();

// router.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'products.html'));
})

module.exports = router;