let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    $.get("https://reqres.in/api/users?page=2", function(response){
        response.data.forEach(element => {
            let item = document.createElement("li");
            item.classList.add("item");
            item.innerHTML = `<img src="${element.avatar}" /><span>${element.first_name}</span>`;
            $("#list").append(item);
        });
    });
});