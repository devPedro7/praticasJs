// push adiciona elementos no fim do array
// pop remove elementos no fim do array

// exemplos com o pop
let listaConvidados = ['Pedro', 'Lucas', 'Jakson']

listaConvidados.push('Pedro', 'Lucas', 'Jakson')
console.log(`Convidados da festa: ${listaConvidados}`);

// push com o for
let numeros = []
let numerosInserir = [1,2,3,4,5,6,7,8,9]
for(let i = 0; i < numerosInserir.length; i++){
    numeros.push(numerosInserir[i])
    console.log(`Numeros inseridos: ${numeros[i]}`)
}

// exemplos com pop
let numerosA = [1,2,3]
numerosA.pop()
// 1,2
console.log(numerosA)

// pop com o for
for(let i = 0; i < listaConvidados.length; i++){
    console.log(`Convidados: ${listaConvidados}`)
    listaConvidados.pop()
    console.log(`Convidados que sairam da festa: ${listaConvidados}`)
}