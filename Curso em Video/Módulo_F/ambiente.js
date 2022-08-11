let num = [5,8,2]
//num.value = `` // Limpar a caixa de texto
//num.focus() // Como se já tivesse clicado 
num[3] = 6
num.sort() //ordernar crescente
num.push(7)
num.length  //atributo     comprimento F8
num.indexOf(7) // valor, não a chave (-1: pesquisou e não encontrou)

let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado.')
} else{
    console.log(`O valor está na posição ${pos}`)
}


console.log(`Nosso vetor é ${num}`)
console.log(num.sort())
console.log (num[0])