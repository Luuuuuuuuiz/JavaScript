let num = [5, 8, 9, 6] // Usa chave pra criar o mano ai 

num[1] = 7 // Usado para colocar um valor no vetor na posição desejada | Pode substituir um valor
num.push(10) // Adiciona um valor ao final do vetor 

num.sort() // Coloca em ordem | ordena como uma string, ou seja 10 < 5
num.sort((a, b) => a - b) // Ordena fazendo verificando se o número é ou nao maior

console.log(num) // Mostra com os colchetes

/*
for (let pos=0; pos < num.length; pos++) { // Mostra de forma formatada, utilizando de porcessos lógicos
    console.log(`O número na posição ${pos} é ${num[pos]}`)
}
*/

for (let pos in num) { // Mostra de forma formatada, conforme a quantidade de elementos do vetor
    console.log(`O número na posição ${pos} é ${num[pos]}`)
}