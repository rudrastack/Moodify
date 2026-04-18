const moongoose = require('mongoose');

const userSchema = new moongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true

    },
    email: {
        type: String,
        required: true,
        unique: true    
    },
    password: {
        type: String,
        required: true,
        select: false
    }
}, { timestamps: true });

const UserModel = moongoose.model('User', userSchema);

module.exports = UserModel;