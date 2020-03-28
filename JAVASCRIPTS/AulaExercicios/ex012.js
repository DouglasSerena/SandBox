var agora = new Date()
var horas = agora.getHours
console.log(`Agora é exatamente ${horas} Horas.`)

if (horas < 12 && horas >= 6){
    console.log('BOM DIAS!')
}else if (horas > 18 || horas < 6) {
    console.log('BOA NOITE!')
}else {
    console.log('BOA TARDE!')
}