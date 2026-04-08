function tabuada() {
    let txtn = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (txtn.value.length == 0) {
        alert('[ERRO] Insira um número para gerar a tabuada!')
    } else {
        let n = Number(txtn.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // Util pra outras linguagens
            tab.appendChild(item)
            c++
        }
        
    }
}