const express = require('express');

const app = express();

// Import FIles
require('./db/connection')

// Import Files
const Users = require('./models/Users');

const port = process.env.PORT || 8000;

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.get('/', (req,res) =>{
    res.send('Welcome');
})

app.listen(port,()=>{
    console.log('listening on port ' + port)
})