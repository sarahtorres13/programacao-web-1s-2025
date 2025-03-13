const express = require('express'); 
const calc = require('./calculadora');
const app = express(); 

app.get('/', (req, res)=>{
    res.send('Hello, world!')
});


const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT); 
});