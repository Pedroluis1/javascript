var agora = new Date()
var horas = agora.getHours()
console.log(`Agora ainda são ${horas} horas`)
if(horas < 5){
    console.log('Vai dormir!! já está de madrugada')
}else if(horas < 12 ) {
    console.log('Bom Dia')
}else if(horas <= 18){
    console.log('Boa tarde')
}else if (horas < 24){
    console.log('Boa noite')
}