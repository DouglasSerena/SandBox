let name = document.querySelector("#name");
let job = document.querySelector("#job");
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let datas = {
        name: name.value,
        job: job.value
    };

    $.ajax({
        url : "https://reqres.in/api/users",
        type : 'POST',
        data : {datas},
        beforeSend : function(){
             $("#resport").html("ENVIANDO...");
        }
    })
    .done(function(){
        $("#resport").html("Enviado.");
    })
    .fail(function(jqXHR, textStatus, msg){
        $("#resport").html("Falho.");
        alert("erro");
    });
});