var test = 'example'

(() => {// função de execução imediata
    console.log(`Valor dentro da função "${test}"`)
    
    if (true) {
        var test = 'example'
        console.log(`Valor dentro do if "${test}"`)
    }

    if (true )

    console.log(`Valor após a execução do if "${test}"`)
})(); 

// mesma coisa de:
/*function test() {

}();*/

(() => {
    let test = 'valor função'
    console.log(`valor dentro da função "${test}"`)
    if (true) {
        let test = 'valor  if ';
        console.log(`Valor dentro do if "${test}"`)
    }
    
    if(true) {
        let test = 'valor de outro if';
        console.log(`valor após a execução do if`)
    }

    console.log(`valor após a execução do if "${test}"`)
})
// mesma coisa com o const




/*

// escopo global  Var

{
    // escopo bloco  Let ou const ( resoeitam o escopo de bloco )
}

function test() {
    // escopo de função   Let ou const
}

*/