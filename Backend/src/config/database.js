const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
}

module.exports = { connectDB };