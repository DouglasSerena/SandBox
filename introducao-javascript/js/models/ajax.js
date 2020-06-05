import addPacienteTable from "./buildPaciente.js";

export default function ajax(method, url, table)
{
    console.log("Buscando Paciente...");

    var xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.addEventListener("load", () => {
        JSON.parse(xhr.responseText)
        .forEach(user => {
            addPacienteTable(user, table);
        });
    })

    xhr.send();
}
