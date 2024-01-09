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

function removeAtDB(id){
    if(!id){
        console.error("ID inválido fornecido para remoção");
        return false;
    }

    // método para encontrar o id no banco de dados
    const indexToRemove = db.findIndex(data => data.id == id);
    if (indexToRemove !== -1) {
        // Se o ID foi encontrado no array
        db.splice(indexToRemove, 1);
        return true; // Indica que o item foi removido com sucesso
    } else {
        return false; // Indica que o ID não foi encontrado
    }

}



const db = [{
    id: 0,
    descricao: "Ração do cachorro",
    data: "11/12/2023",
    categoria:"outros",
    transacao: "saida",
    valor: '59.99'
},

{
    id: 1,
    descricao: "Comprar frutas",
    data: "11/12/2023",
    categoria:"alimentacao",
    transacao: "saida",
    valor: '15.99'
},

{
    id: 2,
    descricao: "Conta de Energia",
    data: "11/12/2023",
    categoria:"moradia",
    transacao: "saida",
    valor: '119.99'
},


{
    id: 3,
    descricao: "Salário",
    data: "11/12/2023",
    categoria:"pagamento",
    transacao: "entrada",
    valor: '960.05'
},

]

module.exports = {
    db: db,
    insertAtDB: insertAtDB,
    removeAtDB: removeAtDB
}