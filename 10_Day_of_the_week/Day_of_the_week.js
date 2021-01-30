var agora = new Date()
var diaSem = agora.getDay()
console.log(`Today is....`)
//console.log(diaSem) vai dizer em número
/* 
0 domingo
1 segunda
2 terça
3 quarta
4 quinta
5 sexta
6 sábado
7 pra cima não existe */
switch(diaSem) {
    case(0):
        console.log('Sunday')
        break
    case(1):
        console.log('Monday')
        break
    case(2):
        console.log('Tuesday')
        break
    case(3):
        console.log('Wednesday')
        break
    case(4):
        console.log('Thursday')
        break
    case(5):
        console.log('Friday')
        break
    case(6):
        console.log('Saturday')
        break
    default:
        console.log('ERROR')
        break    
}