function adicionar() {
    // Limpando o RES
    var res = document.getElementById('res')
    res.innerHTML = ''
    // Validando o Numero
    let txtn = document.getElementById('txtn')
    if (txtn.value.length == 0) {
        alert("[ERRO] Coloque um número antes de adicionar!")
    } else {
        if (txtn.value < 1 || txtn.value > 100) {
            alert('[ERRO] Coloque um número dentro do escopo pedido!')
        } else {
            let n = Number(txtn.value)
            // Verificando se o número ta na lista e adicionando
            let verificador = lista.indexOf(n)
            if (verificador != -1) {
                alert('[ERRO] Número ja adicionado na lista, por favor não repita!')
            } else {
                lista.push(n) 
                // Adicionando no select
                var selv = document.getElementById('selv')
                let item = document.createElement('option')
                item.text = `Adicionando ${n} a lista`
                item.value = `numero ${n}`
                selv.appendChild(item)
            }
        }
    }
    txtn.value = ''
    txtn.focus()
}

function finalizar() {
    lista.sort((a, b) => a - b)
    // Verificando se o Usuário finalizou antes de adicioanr numeros
    let qnum = lista.length
    if (qnum == 0){
        res.innerHTML = `<p>Adicione algum número antes de finalizar</p>`
    } else {
        // Quantidade de números
        res.innerHTML = `<p>Ao todo, temos <strong>${qnum}</strong> números cadastrados</p>`
        // Maior número
        let maiorn = qnum - 1
        res.innerHTML += `<p>O maior número informado foi <strong>${lista[maiorn]}</strong></p>`
        // Menor número
        res.innerHTML += `<p>O menor número informado foi <strong>${lista[0]}</strong></p>`
        // Soma dos valores
        let s = 0
        for (let x in lista) {
            s += lista[x]
        }
        res.innerHTML += `<p>A soma dos valores é <strong>${s}</strong></p>`
        // Média
        let media = s / lista.length
        res.innerHTML += `<p>A média dos valores é <strong>${media}</strong></p>`    
    }
}

function limpar() {
    lista = []
    selv.innerHTML = ''
    res.innerHTML = ''
    txtn.value = ''
    txtn.focus()
}

var lista = []