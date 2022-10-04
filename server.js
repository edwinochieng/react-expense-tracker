const express = require('express');
const dotenv = require('dotenv');
const connetDB = require('./config/db');


dotenv.config({ path : './config/config.env'});

connetDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json())

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${PORT}`));