const express = require('express');
const db = require('./data')
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

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

app.delete('/transactions/:id', (req, res) =>{
    const id = req.params.id
    try{
       const removed = db.removeAtDB(id)
 
       if(removed){
            res.status(200).send("removido com sucesso!")
        }
        else{
            res.status(204).send(`O ID:${id} não encontrado`)
        }
     
    }
    catch (err){
        console.error(err)
    }
    finally{
        res.end()
    }
})



app.get("/", (req, res) =>{
    res.send(`servidor rodando na porta: ${port}`)
    res.end()
})

app.listen(port, ()=>{
    console.log(`servidor rodando na porta: ${port}`)
});

