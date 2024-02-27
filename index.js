const express = require('express');
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();
const transictionsRoutes = require('./routes/transactions')


app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://financialcontroller.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use('/', transictionsRoutes)



app.get("/", (req, res) =>{
    res.send(`servidor rodando na porta: ${port}`)
    res.end()
})

app.listen(port, ()=>{
    console.log(`servidor rodando na porta: ${port}`)
});

