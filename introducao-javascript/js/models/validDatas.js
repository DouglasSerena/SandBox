export default function valid(datas) 
{
    const message = [];
    if(datas.nome.length == 0) {
        message.push("Preencha o campo de nome.");
    }
    if(datas.peso.length == 0) {
        message.push("Preencha o campo de peso.");
    }
    if(datas.altura.length == 0) {
        message.push("Preencha o campo de altura.");
    }
    if(datas.gordura.length == 0) {
        message.push("Preencha o campo de gordura.");
    }
    if(datas.peso < 0 || datas.peso > 500) {
        message.push("Peso inválido");
    }
    if(datas.altura < 0 || datas.altura > 3) {
        message.push("Altura inválido");
    }

    return message;
}