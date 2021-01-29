function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem1')
    var data = new Date
    var hora = data.getHours()
    var bom = ('bom dia boa tar boa noite')
    if (hora >= 0 && hora < 12) {
        var bom = `Bom dia`
        img.src = `manha.png`
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        var bom = `Boa tarde`
        img.src = `tarde.png`
        document.body.style.background = '#b9846f'
    } else {
        var bom = `Boa noite`
        img.src = `noite.png`
        document.body.style.background = '#515154'
    }
    msg.innerHTML = `Agora são ${hora} horas. ${bom}.` // botei aqui embaixo para ler o bom dia tarde noite


}

