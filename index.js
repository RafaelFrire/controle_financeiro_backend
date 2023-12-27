const express = require('express');
const db = require('./data')
const port = 3000;
const app = express();

app.use(express.json())


app.get('/transactions', (req, res) =>{
    try{
        res.send(db);
        res.status(200)
        res.end()
    }
    catch (err){
        console.error("erro:", err.message);
        res.status(500).send("erro interno do servidor")
    }
   
})


app.post('/transactions', (req, res) =>{
    try{
        db.insertAtDB(req.body)
        res.status(201)
        res.end();
    }
    catch (err){
        console.error("error", err.message)
        res.sendStatus(500);
    }
   
})


app.listen(port, ()=>{
    console.log(`servidor rodando na porta: ${port}`)
});

