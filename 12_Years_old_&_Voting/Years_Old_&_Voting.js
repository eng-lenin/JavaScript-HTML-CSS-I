var idade = 17
console.log(`You have ${idade} years old.`)
if (idade < 16) {
    console.log('You do not vote.')
}
else {
    if (idade < 18 || idade > 65) {
        console.log('Optional vote.')
            }
    else {
        console.log('Mandatory vote.')
    }
}

// é possível escrever else if {} pra economizar linhas
//dava pra ter usado o and, que no JS é && para dizer maior que 16 e menor que 18