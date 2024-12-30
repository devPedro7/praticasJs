// o foreach percorre o array assim como o for, mas com uma sintaxe mais facil
// a estrutura dele e como um metodo (arrow function)

const numeros = [1,2,3,4,5,6,7]

// acessando os elementos do array com o z'
numeros.forEach((num) =>{
    console.log(`Elemento do array: ${num}`)
})

// ---------------------------------------------------------------------------------
// exercicios
let numeros2 = [];

// utilizando o push com o foreach
numeros.forEach((n) => {
    numeros2.push(n);
});

console.log("novo array: "+numeros2);
