export default class ContaCorrente{
    constructor (_saldo, agencia) {
        this._saldo = 0;
        this.agencia = agencia;
    }
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }
}