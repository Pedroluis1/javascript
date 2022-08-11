function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 13){
        imagem.src = 'manhã.png'
        document.body.style.background = '#ffd9a2'
    } else if (hora >= 13 && hora < 18){
        imagem.src = 'tarde.png'
        document.body.style.background = '#c08a72'
    } else {
        imagem.src = 'noite.png'
        document.body.style.background = '#253652'
    }
}