import Funcionario from "./Funcionario.js";

export default class Gerente extends Funcionario
{
    constructor(nome, cpf, salario)
    {
        super(nome, cpf, salario);
        this._bonos = 1.1;
    }

    autenticado(senha)
    {
        return this._senha == senha;
    }
}