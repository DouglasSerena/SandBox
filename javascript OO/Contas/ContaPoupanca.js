import Conta from "./Conta.js";

export default class ContaPoupanca extends Conta
{
    static numberConta = 0;

    constructor(cliente, agencia, saldo) {
        super(cliente, agencia, saldo);
        ContaPoupanca.numberConta++;
    }
}