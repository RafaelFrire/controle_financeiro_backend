const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) =>{
    res.send("sucess!!")
    res.end()
})


app.listen(port, ()=>{
    console.log(`servidor rodando na porta: ${port}`)
});

