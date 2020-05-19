let name = document.querySelector("#name");
let job = document.querySelector("#job");
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let datas = {
        name: name.value,
        job: job.value
    };

    fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify(datas)
    })
    .then(function(responce) {
        return responce.json();
    })
    .then(function (responce) {
        alert("OK, TUDO OCORREU COM SUCESSO")
    })
   
});