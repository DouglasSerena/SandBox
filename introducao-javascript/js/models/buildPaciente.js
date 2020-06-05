import Paciente from "./Paciente.js";


export default function addPacienteTable(datas, table) {
    let tr = buildPaciente(datas);

    let valid = tr.querySelector("td:nth-child(5)").textContent;
    if(valid.length > 10) {
        tr.classList.add("invalido");
    }
    table.append(tr);
}

function buildPaciente(datas)
{
    let paciente = new Paciente(datas);

    var tr = document.createElement("tr");

    paciente.get().forEach(item => {
        let td = document.createElement("td");
        td.innerText = item;
        tr.appendChild(td);
    });

    tr.classList.add("paciente");

    return tr;
};