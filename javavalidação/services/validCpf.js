const cpfRepeat = (cpf) => {
    const cpfRepeat = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];

    return cpfRepeat.includes(cpf);
}

const calcTotal = mult => (result, numberCurrent) => result + numberCurrent * mult--;

const calcCpf = (cpfPart, mult) => {
    let total = cpfPart.reduce(calcTotal(mult), 0);

    let rest = total % 11;

    let digit = 11 - rest;

    if (digit > 9) {
        digit = 0;
    }

    return digit;
}

export const validCpf = input => {
    const cpfNumber = input.value.replace(/\D/g, "");

    if(cpfRepeat(cpfNumber)) {
        input.setCustomValidity("CPF inválido.");
        return;
    }

    const firstPartCpf = cpfNumber.substring(0, 9).split("");
    const firstNumberCpf = Number(cpfNumber.charAt(9));
    const firstCalc = calcCpf(firstPartCpf, 10);

    if (firstNumberCpf != firstCalc) {
        input.setCustomValidity("CPF inválido.");
        return;
    }

    const secondyPartCpf = cpfNumber.substring(0, 10).split("");
    const secondyNumberCpf = Number(cpfNumber.charAt(10));
    const secondyCalc = calcCpf(secondyPartCpf, 11);

    if (secondyNumberCpf != secondyCalc) {
        input.setCustomValidity("CPF inválido.");
        return;
    }

    input.setCustomValidity("");
    return;
}