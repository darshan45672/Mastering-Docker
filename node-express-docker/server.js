const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
]

app.get('/', (req, res) =>{
    res.json({
        message: 'Welcome to the Node Express Docker API',
        version: '1.0.0',
        endpoints: [
            { method: 'GET', path: '/users', description: 'Get all users' },
            { method: 'POST', path: '/users', description: 'Create a new user' },
        ]
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    })
});

app.get('/users', (req, res) => {
    res.json({
        success: true,
        data: users,
        count : users.length
    });
});

app.post('/users', (req, res)=>{
    const {name, email} = req.body;
    
    if(!name || !email){
        return res.status(400).json({
            success: false,
            message: 'Name and email are required'
        });
    };

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        data: newUser,
        message: 'User created successfully'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
