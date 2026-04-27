const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.route');
const songRoutes = require('./routes/song.route');
const cookieParser = require('cookie-parser');
const cors = require("cors");


app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/songs', songRoutes);

module.exports = app;