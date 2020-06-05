import Conta from "./Conta.js";

export default class ContaSalario extends Conta
{
    constructor(cliente, agencia)
    {
        super(cliente, agencia, 0)
    }

    sacar(valor)
    {
        let taxa = 1.01;
        return this._sacar(valor, taxa)
    }
}