const mongoose = require('mongoose');

const secretSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Secret', secretSchema);
