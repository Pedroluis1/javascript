let num = document.getElementById('txtn')
let lista = document.getElementById('seln')
let res = document.getElementById('res')
let valores = []
let som = 0 
let ma = 0
let me = 101
function inlista(n, v){
    if ( v.indexOf(Number(n)) != -1){ //Presta atenção no Number
        return true
    } else {
        return false
    }
}

function isnumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isnumero(num.value) && !inlista(num.value, valores)){ //Presta atenção no "!" no inlista
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text += `Valor ${Number(num.value)} adicionado`
        lista.appendChild(item)
        som += Number(num.value)
        if (ma < num.value){
            ma = num.value
        }
        if (me > num.value){
            me = num.value
        }
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = `` // Limpar a caixa de texto
    num.focus() // Como se já tivesse clicado 
}

function finalizar(){
    res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.<br>
                    O maior número informado foi ${ma}.<br>
                    O menor número informado foi ${me}.<br>
                    Somando todos os valores, temos ${som}.<br>
                    A média dos valores digitados é ${(som/valores.length).toFixed(1)} .`
}