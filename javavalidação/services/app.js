import { validardata } from "./vaidardata.js";

window.onload = () => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            if (input.id === 'email') {
                alert("oi")
                validardata();
            };
        });
    });
};