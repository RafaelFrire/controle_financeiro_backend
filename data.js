let nextId = 0

function insertAtDB(data){
    if(data){
        if(!data.id){
            data.id = nextId
            nextId++;
        }
    }
    while (db.some(e => e.id === data.id)) {
        // If it does, generate a new ID
        data.id = nextId;
        nextId++;
    }
    db.push(data)
}


const db = [{
    id: 0,
    descricao: "Ração do cachorro",
    data: "11/12/2023",
    recorrencia:"mensal",
    transacao: "saida",
    valor: '59.99'
},

{
    id: 1,
    descricao: "Comprar frutas",
    data: "11/12/2023",
    recorrencia:"semanal",
    transacao: "saida",
    valor: '15.99'
},

{
    id: 2,
    descricao: "Conta de Energia",
    data: "11/12/2023",
    recorrencia:"mensal",
    transacao: "saida",
    valor: '119.99'
},


{
    id: 3,
    descricao: "Salário",
    data: "11/12/2023",
    recorrencia:"mensal",
    transacao: "entrada",
    valor: '960.05'
},

]

module.exports = {
    db: db,
    insertAtDB: insertAtDB
}