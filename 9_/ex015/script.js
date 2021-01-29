function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO, tente novamente.')
    } else {
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade >= 10 && idade <21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhorhomem.png')
            }
        } else if (fsex[1].checked) {
            gen = "Mulher"
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade >= 10 && idade <21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'adultamulher.png')
            } else {
                //idosa
                img.setAttribute('src', 'senhoramulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Sua idade é de ${idade} anos e você é ${gen}.`
        res.appendChild(img)

    }
}
