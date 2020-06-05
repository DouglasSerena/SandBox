export const validAge = input => {
    const dateAge = new Date(input.value);
    const date = new Date();

    const age18 = new Date(
        dateAge.getUTCFullYear() + 18,
        dateAge.getUTCMonth(),
        dateAge.getUTCDay()
    );

    if (age18 > date) {
        input.setCustomValidity("A idade mínima é 18 anos.");
        return;
    }

    input.setCustomValidity("");
    return;
}
