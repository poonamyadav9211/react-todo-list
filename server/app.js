const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const app =express();
app.use(express.json());
// allow cross-origin
app.use(cors());

app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
    {
        email:'test@gmail.com',
        password:'test@123'
    }
];

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

app.post('/api/post_user',verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403)
        } else {
            const result = req.body.user;
            users.push(result);
            res.json({
                message: "post user...",
                authData,
                users
            });
        }
    });    
});



app.post('/api/login', (req, res) => {
    //// user details
    const user = {
        email: req.body.user.email,
        password: req.body.user.password
    };

    const isUser = validateUser(req.body.user);
    if(isUser === undefined){
        return res.status(404);
    }
    
    //// token expire example : 60, 30s, 10m, 10h 2d, 2 days.
    jwt.sign({user}, 'secretkey',{expiresIn: '1d'}, (err, token) => {
        res.json({
            token,
            user: req.body.user
        });
    });
});

function validateUser(user) {
    return users.find(u => u.email===user.email && u.password === user.password);
}

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