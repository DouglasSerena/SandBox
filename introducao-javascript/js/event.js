var table = document.querySelector("table");
var filter = document.querySelector("#filter");

table.addEventListener("dblclick", function(event) {
    var parant =  event.target.parentNode;
    
    parant.classList.add("fadeOut");

    setTimeout(() => {
        parant.remove();
    }, 500);
    
});

filter.addEventListener("input", function(event) {
    var pacientes = document.querySelectorAll(".paciente td:first-child");
    if (this.value.length > 0) {
        pacientes.forEach(paciente => {
            var exprecao = new RegExp(this.value, "i");
            if (!exprecao.test(paciente.textContent)) {
                paciente.parentNode.classList.add("hidden");
                return;
            }
            paciente.parentNode.classList.remove("hidden");
        });
        return;
    }
    pacientes.forEach(paciente => {
        paciente.parentNode.classList.remove("hidden");
    });
});
