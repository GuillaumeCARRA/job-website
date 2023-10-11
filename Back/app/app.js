require('dotenv').config(); 

const express = require('express');
const cors = require('cors');


// create server express
const app = express(); 

app.get('/', (req, res) => {
    res.send('Hello World');
  });

const router = require('./router'); 

//add middleware for data POST
app.use(express.urlencoded({extended: true}))

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization'
}));


app.use(router);


// server launch
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
