import Conta from "./Conta.js";

export default class ContaCorrente extends Conta
{
    static numberConta = 0;

    constructor(cliente, agencia) {
        super(cliente, agencia, 0);
        ContaCorrente.numberConta++;
    }

    sacar(valor)
    {
        let taxa = 1.1
        return this._sacar(valor, taxa);
    }
}