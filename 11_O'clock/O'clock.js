var agora = new Date
var hora = agora.getHours()
console.log(`Now it is ${hora} o'clock.`)
if (hora < 12) {
    console.log('Good Morning!')
} else if (hora < 18) {
    console.log('Good afternoon!')
} else {
    console.log('Good evening!')
}
