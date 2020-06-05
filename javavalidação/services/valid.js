import { validAge } from "./validAge.js"
import { validCpf } from "./validCpf.js";
import { recoverAddress } from "./recoverAddress.js";
import { validPrice } from "./validPrice.js";

const returnMessageError = (type, validity) => {
    let message = "";
    const typeError = [
        "valueMissing",
        "typeMismatch",
        "tooShort",
        "customError",
        "rangeUnderflow",
        "patternMismatch"
    ];

    const messageError = {
        email: {
            valueMissing: "O e-mail é necessária.",
            typeMismatch: "Este não é um e-mail válido."
        },
        senha: {
            valueMissing: "O senha é necessária.",
            tooShort: "A senha deve ter no mínimo 4 caracteries."
        },
        date: {
            valueMissing: "A data de nacimento é necessária.",
            rangeUnderflow: "A data mínima é 01/01/1901.",
            customError: "A idade mínima é 18 anos."
        },
        cpf: {
            valueMissing: "O CPF é necessária.",
            customError: "CPF inválido."
        },
        rg: {
            valueMissing: "O RG é necessária.",
        },
        cep: {
            valueMissing: "O CEP é necessária.",
            patternMismatch: "CPE inválido.",
            customError: "CPE inválido."
        },
        logradouro: {
            valueMissing: "O logradouro é necessária.",
        },
        cidade: {
            valueMissing: "A cidade é necessária.",
        },
        estado: {
            valueMissing: "O estado é necessária.",
        },
        price: {
            valueMissing: "O preço é necessário.",
            customError: "O valor do produto deve ser maior que R$ 0,00 ."
        },
        nameProduct: {
            valueMissing: "O nome do produto é necessário.",
        }
    };

    typeError.forEach(error => {
        if (validity[error]) {
            message = messageError[type][error];
        }
    });

    return message;
}

export const valid = (input, error = true) => {
    const elementValid = input.validity.valid;

    const classElementError = "erro-validacao";
    const classInputError = "possui-erro-validacao";
    const elementParent = input.parentNode;

    const elementErrorExect = elementParent.querySelector(
        `.${classElementError}`
    );
    const elementError = elementErrorExect || document.createElement("div");

    const type = input.dataset.type;
    const validType = {
        date: input => validAge(input),
        cpf: input => validCpf(input),
        cep: input => recoverAddress(input),
        price: input => validPrice(input)
    }

    if (validType[type]) {
        validType[type](input);
    }

    if (!elementValid) {
        elementError.className = classElementError;
        elementError.textContent = returnMessageError(type, input.validity);
        if (error) {
            input.after(elementError);
            input.classList.add(classInputError);
        }
    } else {
        elementError.remove();
        input.classList.remove(classInputError);
    }
}