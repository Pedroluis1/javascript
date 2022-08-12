//somente no JavaScript

//hoisting variáveis
function fn(){
    console.log(text) // undefined

    var text = 'exemplo' //definida

    console.log(text)
}

fn();//?? não sei



//hoisting funções (JEITO ERRADO (NÃO FAZER)) / (SEMPRE DECLARAR UMA FUNÇÃO ANTES DE USAR!!)
function fn(){
    log('hoisting de função')

    function log(value){
        console.log(value)
    }
}