function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    

    if (hora >= 7 && hora <= 12) {
        // MANHÃ
        msg.innerHTML = `Bom Dia!! Agora são ${hora} horas.`
        img.src = 'quintoelemento.png' // Altera o arquivo de imagem
        window.document.body.style.backgroundColor = '#a9beda'
    } else if (hora >= 13 && hora <= 17) {
        // TARDE
        msg.innerHTML = `Boa Tarde!! Agora são ${hora} horas.`
        img.src = 'boysfromthewest.png'
        window.document.body.style.backgroundColor = '#f4d371'
    } else {
        // NOITE/MADRUGADA
        msg.innerHTML = `Boa Noite!! Agora são ${hora} horas.`
        img.src = 'twist.png'
        window.document.body.style.backgroundColor = '#212051'
        var titulo = window.document.querySelector('#titulo h1')
        var subtitulo = window.document.querySelector('#subtitulo p')
        titulo.style.color = '#dfc13b'
        subtitulo.style.color = '#dfc13b'
    }
}
