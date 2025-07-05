const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://MEAN:MEAN@cluster0.fufnnxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

router.get('/', (req, res) => {
    res.send('Hello, API is running!');
});

module.exports = router;
