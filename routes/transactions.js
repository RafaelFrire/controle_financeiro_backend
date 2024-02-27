const route = require('express').Router()
const db = require('../data')

route.get('/transactions', (req, res) =>{
    try{
        const data = db.db
        res.status(200).json(data)
    }
    catch (err){
        console.error("erro:", err.message);
        res.status(500).send("erro interno do servidor")
    }
   
})


route.post('/transactions', (req, res) =>{
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

route.delete('/transactions/:id', (req, res) =>{
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



module.exports = route