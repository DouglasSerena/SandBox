const infoClient = [
    {cpf: 82542785291, nome: "Elise"}
];

const clientTable = document.querySelector("#client-table");

const dataClient = infoClient.map( data => {
    return [
        data.nome,
        data.cpf
    ]
});

infoClient.forEach(index => {
    var tr = document.createElement("tr");
    
    const td = `<td>${index.nome}</td><td>${index.cpf}</td>`
    
    tr.innerHTML = td

    clientTable.append(tr);
});