function insertAtDB(data){
    if(data){
        db.push(data);
    }
   

}

const db = [{
    id: 0,
    descricao: "Ração do cachorro",
    data: "11/12/2023",
    recorrencia:"mensal",
    valor: '59,99'
},

{
    id: 1,
    descricao: "Comprar frutas",
    data: "11/12/2023",
    recorrencia:"semanal",
    valor: '15,99'
},

{
    id: 2,
    descricao: "Conta de Energia",
    data: "11/12/2023",
    recorrencia:"mensal",
    valor: '119,99'
},

]

module.exports = {
    db: db,
    insertAtDB: insertAtDB
}