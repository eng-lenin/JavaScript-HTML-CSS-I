function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('ERROR')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''  //para limpar o campo tab (div que tem o select) caso eu queira calcular novamente para outro número
        while (c <=10) {
            let item = document.createElement('option') //cria option aqui ao invés de ser lá no html
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //cria um value pra cada uma das dez linhas, para saber qual item foi elecionado para o usuário, geralmente mais usado no php
            tab.appendChild(item)
            c = c + 1 //ou c++
        }
    }
    




}