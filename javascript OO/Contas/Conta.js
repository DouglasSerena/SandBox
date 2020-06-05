import Cliente from "../Pessoas/Cliente.js";

// classe abstrata
export default class Conta
{
    constructor(cliente, agencia, saldo)
    {
        if (this.constructor == Conta) {
            throw new Error("Class Abstact");
        }
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldo;
    }

    set cliente(cliente) {
        if(cliente instanceof Cliente)
        {
            this._cliente = cliente;
        }
    }
    get cliente()
    {
        return this._cliente;
    }
    get saldo()
    {
        return this._saldo;
    }

    sacar()
    {
        throw new Error("Function abstract")
    }

    _sacar(valor, taxa)
    {
        const valorTaxa = valor * taxa;
        if(this._saldo >= valorTaxa){
            this._saldo -= valorTaxa;
            return valorTaxa;
        }

        return 0;
    }

    depositar(valor)
    {
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    transferir(valor, conta)
    {
        const saldo = this.sacar(valor);
        conta.depositar(saldo);
    }
}