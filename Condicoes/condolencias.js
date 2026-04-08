var agora = new Date()
var hora = agora.getHours()
console.log(`Opa fi!! Agora é ${hora} horas.`)
if (hora <= 6) {
    console.log("Boa madrugada!")
} else if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 17) {
    console.log('Boa tarde!')
} else {
    console.log('Muito boa noite!')
}