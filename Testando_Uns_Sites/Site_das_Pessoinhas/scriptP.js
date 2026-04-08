function gerarImagem() {
    var res = window.document.getElementById('res')
    var anoatual = new Date()
    anoatual = anoatual.getFullYear()
    var fano = window.document.getElementById('txtano')
    if (fano.value.length == 0 || fano.value > anoatual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = anoatual - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img') // Cria um img no HTML
        img.setAttribute('id', 'foto') // Coloca um ID no img
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 14) {
                img.setAttribute('src', 'criança-M.png') // Cria um trem de imagem e insere o nome da foto
            } else if (idade <= 24) {
                img.setAttribute('src', 'jovem-M.png')
            } else if (idade <= 49) {
                img.setAttribute('src', 'adulto-M.png')
            } else {
                img.setAttribute('src', 'velho-M.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 14) {
                img.setAttribute('src', 'criança-F.png')
            } else if (idade <= 24) {
                img.setAttribute('src', 'jovem-F.png')
            } else if (idade <= 49) {
                img.setAttribute('src', 'adulta-F.png')
            } else {
                img.setAttribute('src', 'idosa-F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade calculada: ${genero} com ${idade} anos`
        res.appendChild(img) // Adiciona o IMG criado na div, pra mostrar
    }
}