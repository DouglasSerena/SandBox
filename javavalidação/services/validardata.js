export const validardata = input => {
    alert("oi");
    const dataNascimento = new date(input.value);
    const dataAtual = new date();

    const dataFaz18 = new date(
        dataNascimento.getUTCFullYear() + 18,
        dataNascimento.getUTCMonth(),
        dataNascimento.getUTCDate()
    )
    if (dataFaz18 > dataAtual) {
        input.setCustomValidity("A idade minima é 18 anos")
        return;
    }

    input.setCustomValidity("")
    return;
}