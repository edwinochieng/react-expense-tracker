const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    name: {
        type : String,
        trim : true,
        required : [true, 'Please add texts']
    },
    cost : {
        type: Number,
        required : [true, 'Please add a positive or a negative number']
    },
    createdAt : {
        type: Date,
        default : Date.now
    }
});

module.exports = mongoose.model("Transaction", TransactionSchema);