//server.js

const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const userRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(session({
    secret: 'my-secret-key', // Replace with your own secret key
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', userRoutes);
app.use('/auth',authRoutes);

app.listen(port, () => {
    console.log('Server Created!');
})