import Pessoa from './Pessoa.js';

export default class Cliente extends Pessoa
{
    constructor(nome, cpf, senha)
    {
        super(nome, cpf);
        this._senha = senha;
    }

    autenticado(senha)
    {
        return this._senha == senha;
    }
}