const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, API is running!');
})

module.exports = router;