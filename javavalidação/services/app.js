import { valid } from "./valid.js";

window.onload = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        if (input.dataset.type === "price") {
            SimpleMaskMoney.setMask(input, {
                allowNegative: false,
                negativeSignAfter: false,
                prefix: 'R$ ',
                fixed: true,
                fractionDigits: 2,
                decimalSeparator: ',',
                thousandsSeparator: '.',
                cursor: 'end'
            });
        }
        input.addEventListener("input", () => {
            valid(input, false);
        });

        input.addEventListener("blur", () => {
            valid(input)
        })
    });
}