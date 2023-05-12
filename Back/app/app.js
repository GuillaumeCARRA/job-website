require('dotenv').config(); 

const express = require('express');

// create server express
const app = express(); 

// app.use((req, res, next) => {
//     res.setHeader('Content-Security-Policy', "default-src 'none'; img-src *; script-src *; style-src *;");
//     next();
//   });

app.get('/', (req, res) => {
    res.send('Hello World');
  });

const router = require('./router'); 

//add middleware for data POST
app.use(express.urlencoded({extended: true}))

app.use(express.json());

// app.use(cors({
//     origin: '*',
//     methods: 'GET,POST,PATCH,DELETE,OPTIONS',
//     allowedHeaders: 'Content-Type'
// }));


app.use(router);


// server launch
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});