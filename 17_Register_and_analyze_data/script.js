let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) > 0 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //se index do número é igual a -1 é pq não tá adicionado, se for diferente é pq tá adicionado
        return true //está adicionado
    } else {
        return false //não está adicionado
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { //o ! é pq se não tiver adicionado ele vai dar true e adicionar
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `The value ${num.value} is add`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('not ok')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Add a value before analyze.')
    } else {
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma = soma + valores[pos]

            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos] 
            }
        
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>You added ${tot} values.</p>`
        res.innerHTML += `<p>Tha highest value is ${maior}.</p>`
        res.innerHTML += `<p>The lowest value is ${menor}.</p>`
        res.innerHTML += `<p>The sum of the values is ${soma}.</p>`
        res.innerHTML += `<p>The average of the values is ${media}.</p>`

    }
}