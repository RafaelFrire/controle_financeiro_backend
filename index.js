const express = require('express');
const db = require('./data')
const port = 3000;
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

app.get('/transactions', (req, res) =>{
    try{
        const data = db.db
        res.status(200).json(data)
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

