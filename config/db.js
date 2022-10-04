const mongoose = require('mongoose');

const connetDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/expensetracker");
         console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch(err) {

        console.log(`Error: ${err.message}`);
        process.exit(1);
     
    }
}
module.exports = connetDB;