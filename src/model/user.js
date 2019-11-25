const mongoose = require('../database');

const UserSchema = new mongoose.Schema({

    nome: {
        type: String,
        require: true,
        lowercase: true
    },
    senha: {
        type: String,
        require: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;