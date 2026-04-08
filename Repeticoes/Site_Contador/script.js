function contar() {
    var txtini = document.getElementById('txtini')
    var txtfim = document.getElementById('txtfim')
    var txtpas = document.getElementById('txtpas')
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0) {
        alert('[ERRO] Faltam dados!!')
    } else {
        if (txtpas.value <= 0) {
            txtpas.value = 1
            alert(`[ERRO] Passo inválido! Valor definido como ${txtpas.value}`)
        } else {
            var res = document.getElementById('res')
            if (Number(txtini.value) < Number(txtfim.value)) {
                for (var c = Number(txtini.value); c <= Number(txtfim.value); c += Number(txtpas.value)) {
                    if (c == txtini.value) {
                        res.innerHTML = `${c} `
                    } else {
                        res.innerHTML += `\u{1F449} ${c} `
                    }
                }   
            } else {
                for (var c = Number(txtini.value); c >= Number(txtfim.value); c -= Number(txtpas.value)) {
                    if (c == txtini.value) {
                        res.innerHTML = `${c} `
                    } else {
                        res.innerHTML += `\u{1F449} ${c} `
                    }
                }

            }
            res.innerHTML += '\u{1F3C1}'
        }
    }
}