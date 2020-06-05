export const recoverAddress = (input) => {
    const numberCep = input.value.replace(/\D/g, "");

    if (input.validity.valid) {
        const url = `http://viacep.com.br/ws/${numberCep}/json/`
        const options = {
            method: "GET",
            mode: "cors",
            headers: {
                "content-type": "application/json;charset=utf-8"
            }
        }
        fetch(url, options)
        .then(responce => responce.json())
        .then(data => {
            if (data.erro) {
                input.setCustomValidity("CEP inválido.")
                return;
            }

            getAddress(data);

            input.setCustomValidity("");
            return;
        });
    }
}

const getAddress = data => {
    document.querySelector("#logradouro").value = data.logradouro;
    document.querySelector("#cidade").value = data.localidade;
    document.querySelector("#estado").value = data.uf;
}
