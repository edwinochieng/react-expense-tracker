const path = require('path')
const express = require('express');
const dotenv = require('dotenv');
const connetDB = require('./config/db');


dotenv.config({ path : './config/config.env'});

connetDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json())

app.use('/api/v1/transactions', transactions);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${PORT}`));