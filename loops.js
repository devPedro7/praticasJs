// LOOPS SAO ESTRUTURAS SIMPLES E BASTANTES UTILIZADAS PARA ACESSAR ELEMENTOS NOS ARRAYS
// OS MAIS UTILIZADOS SAO O FOR E WHILE

const users = ['Pedro', 'Lucas', 'Jakson']

// devemos percorrer e imprimir cada item
// for:
for(let i = 0; i < users.length; i++){
    console.log(`Listando usuarios: ${users[i]}`);
}  
// ----------------------------------------------------------------------------------------------------
// exercicio 1: CRIAR UMA LISTA QUE EXIBA NO CONSOLE APENAS OS NUNMEROS PARES
let numeros = [1,2,3,4,5,6,7,8,9,10];

console.log("Numeros impares:");
for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 == 1) {
        console.log(numeros[i]);
    }
}

console.log("Numeros pares:");
for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 == 0) {
        console.log(numeros[i]);
    }
}
// ----------------------------------------------------------------------------------------------------
//  exercicio 2: printar no console os numeros na ordem decrescente
let numerosInvertidos = []
for(let i = numeros.length - 1; i >= 0; i--){
    numerosInvertidos = numeros[i]
    console.log(`Numeros invertidos: ${numerosInvertidos}`)
}
// ----------------------------------------------------------------------------------------------------