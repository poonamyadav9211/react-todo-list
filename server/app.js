const express = require('express');
const jwt = require('jsonwebtoken');

const app =express();

app.get('/api', (req, res) => {
    res.json({
        message: "welcome to the api"
    });
});

app.post('/api/posts',verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403)
        } else {
            res.json({
                message: "post created...",
                authData
            });
        }
    });    
});



app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'poonam',
        email: 'poonam@gmail.com'
    };
    // token expire example : 60, 30s, 10m, 10h 2d, 2 days.
    jwt.sign({user}, 'secretkey',{expiresIn: '1d'}, (err, token) => {
        res.json({
            token
        });
    })
});

// FORMAT OF TOKEN
// Autherization: Bearer <access_token>

// verify token
function verifyToken(req, res, next){
    // Get auth header value.
    const bearerHeader = req.headers['authrization'];
    // Check if token is bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next(); 
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}


app.listen(5000, ()=> console.log('Server started on port 5000'));