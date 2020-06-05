export default class Paciente
{
    nome;
    peso;
    altura;
    gordura;
    imc;

    constructor(datas)
    {
        this.nome = datas.nome;
        this.peso = datas.peso;
        this.altura = datas.altura;
        this.gordura = datas.gordura;
        this.calcImc();
    }

    calcImc()
    {
        let result = this.peso / (this.altura * this.altura);
        this.imc = result.toFixed(2);
        return this.imc;
    }

    get()
    {
        let datas = [
            this.nome,
            this.peso,
            this.altura,
            this.gordura,
            this.imc
        ];
        return datas;
    }
}