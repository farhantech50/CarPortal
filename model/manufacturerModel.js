const mongo = require("mongoose");

const manufacturerSchema = mongo.Schema({
    name: {
        type: String,
        required:true
    },
    country: {
        type: String,
        required:true
    },
    logo: {
        type: String,
        required:true
    }
});

module.exports = mongo.model('manufacturer',manufacturerSchema);