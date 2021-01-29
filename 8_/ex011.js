var idade = 17
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não precisa votar.')
}
else {
    if (idade < 18 || idade > 65) {
        console.log('Voto opcional.')
            }
    else {
        console.log('Voto obrigatório.')
    }
}

// é possível escrever else if {} pra economizar linhas
//dava pra ter usado o and, que no JS é && para dizer maior que 16 e menor que 18