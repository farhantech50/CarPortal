const mongo = require("mongoose");

const carSchema = mongo.Schema({
    name: {
        type: String,
        required:true
    },
    year: {
        type: String,
        required:true
    },
    manufacturer: [{
        type: mongo.Schema.Types.ObjectId,
        ref:"manufacturer"
    }],
    image: {
        type: String,
        required:true
    }
});

module.exports = mongo.model('car',carSchema);