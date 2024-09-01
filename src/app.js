require('dotenv').config();
const express = require('express')
const app = express()
const port= process.env.PORT
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(3000)
console.log('Running on port'+ port)