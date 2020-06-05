import addPacienteTable from './models/buildPaciente.js';
import datasPacientes from './models/datasPacientes.js';
import validDatas from './models/validDatas.js';
import FlashMessage from './models/FlashMessage.js';
import ajax from './models/ajax.js';


var button = document.querySelector("#adicionar-paciente");
var find = document.querySelector("#buscar-paciente");
var flash = document.querySelector("ul#message");
var table = document.querySelector("table");

window.addEventListener("load", function() {
    datasPacientes.forEach(paciente => {
        addPacienteTable(paciente, table);
    });
});

find.addEventListener("click", event => {
    event.preventDefault();
    ajax("GET", "http://api-pacientes.herokuapp.com/pacientes", table);
});

button.addEventListener("click", event => {
    event.preventDefault();
    let form = document.querySelector("form");
    
    let datas = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    };

    const message = validDatas(datas);

    var flashMessage = new FlashMessage();

    if (message.length === 0) {
        addPacienteTable(datas, table);

        flashMessage.removeMessage(flash);

        form.reset();
    }
    flashMessage.addMessage(message, flash);
});
