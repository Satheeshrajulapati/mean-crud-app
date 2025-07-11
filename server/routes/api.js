const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://MEAN:MEAN@cluster0.fufnnxg.mongodb.net/MEAN?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// test route
router.get('/', (req, res) => {
    res.send('Hello, API is running!');
});

// register route using async/await
router.post('/register', async (req, res) => {
    try {
        const userData = req.body;
        const user = new User(userData);
        const registeredUser = await user.save();
        console.log('User registered successfully:', registeredUser);
        res.status(200).send(registeredUser);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('Error saving user');
    }
});

router.post('/login', (req, res) =>{
    let userData = req.body;
    User.findOne({ username: userData.username, password: userData.password })
        .then(user => {
            if (user) {
                console.log('User logged in successfully:', user);
                res.status(200).send(user);
            } else {
                console.log('User not found');
                res.status(401).send('Invalid username or password');
            }
        })
        .catch(err => {
            console.error('Error during login:', err);
            res.status(500).send('Error during login');
        });
})

module.exports = router;
