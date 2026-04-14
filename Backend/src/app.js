const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use('/api/auth', authRoutes);


module.exports = app;