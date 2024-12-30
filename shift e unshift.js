// shift remove o primeiro indice do array
// unshift adiciona um ou mais indices no array

// exemplos com unshift
let numeros = []
numeros.push(4,5,6)
// adicionando no fim do array 4,5,6
console.log(numeros);
numeros.unshift(1,2,3)
console.log(numeros);
// adicionando no inicio do array 1,2,3

// unshift com for
let listaNumeros = [4,5,6,7,8,9];
let num = [1,2,3];

console.log("Array original:", listaNumeros);

// // Adicionando elementos de 'num' ao início de 'listaNumeros'
for(let i = num.length - 1; i >= 0; i--){
    listaNumeros.unshift(num[i]);
}

console.log("Array após adicionar elementos:", listaNumeros);



// shift
num.shift()
console.log(num)
// 2,3

for(let i = 0; i < listaNumeros.length; i++) {
    listaNumeros.shift();
    console.log(listaNumeros);
    i--; // Decrementa i para compensar a redução do tamanho do array
}
