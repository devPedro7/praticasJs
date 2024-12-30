//  includes verifica se em um array tem um determinado elemento (meio que um filtro)
// passamos como argumento, o elemento que queremos buscar dentro do array
// e o retorno dele e true ou false
let marcas  = ['BMW','MERCEDES','HONDA']
console.log(marcas.includes('HONDA'))


// includes com foreach
marcas.forEach((marca)=>{
    console.log(marca.includes(marca))
})