function gerar(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    if (num.value.length <= 0) {
        window.alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        for (var c = 1; c <= 10; c+=1) {
            res.innerHTML += `${n} x ${c} = ${n*c}<br>`
        }
    }
}