export const validPrice = input => {
    const price = input.formatToNumber();

    if(price === 0) {
        input.setCustomValidity("O valor do produto deve ser maior que R$ 0,00 .");
        return;
    }

    input.setCustomValidity("");
    return;
}