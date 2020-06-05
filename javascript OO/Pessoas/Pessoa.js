export default class Pessoa
{
    constructor(nome, cpf) 
    {
        if(this.constructor == Pessoa) {
            throw new Error("Class Abstact");
        }
        this._nome = nome;
        this._cpf = cpf;
    }

    get cpf()
    {
        return this._cpf;
    }
    get nome()
    {
        return this._nome;
    }
}
