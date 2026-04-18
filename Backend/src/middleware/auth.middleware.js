const userModel = require('../models/auth.model');
const blacklistModel = require('../models/blacklist.model');
const jwt = require('jsonwebtoken');


async function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'token not found' });
    }

    const istokenBlacklisted = await blacklistModel.findOne({ token });

    if (istokenBlacklisted) {
        return res.status(401).json({ message: 'invalid token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();  
    } catch (error) {
        return res.status(401).json({ message: 'invalid token' });   
    }
    }

module.exports = { authUser };