// o metodo reverse inverte os elementos do array (ele modifica o array original)

const numeros = [10,9,8,7,6,5,4,3,2,1]

console.log(`Array antes do reverse: ${numeros}`);

numeros.reverse()

console.log(`Array depois do reverse: ${numeros}`);



let numerosInvertidos = [];

// Usar forEach para adicionar os elementos ao novo array na ordem inversa
numeros.forEach((numero) => {
    numerosInvertidos.unshift(numero);
});

console.log("Array invertido usando forEach:", numerosInvertidos);
