import Pessoa from '../Pessoa.js';

export default class Funcionario extends Pessoa
{
    constructor(nome, cpf, salario)
    {
        super(nome, cpf);
        if (this.constructor == Funcionario) {
            throw new Error("Class Abstact");
        }
        this._salario = salario;
        this._bonos = 1;
        this._senha;
    }

    cadastrarSenha(senha)
    {
        this._senha = senha;
    }

    get senha()
    {
        return this._senha;
    }
}