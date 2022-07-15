function gerar(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        res.innerHTML = ''
        for (var c = 1; c <= 10; c+=1) {
            let item = document.createElement('option')
            item.text += `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}