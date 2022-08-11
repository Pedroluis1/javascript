var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('não vota!')
}else if (idade < 18){
    console.log('Voto opcional')
}else if(66 < idade){
    console.log('Voto opcional')
}else{
    console.log('Voto Obrigatório')
}