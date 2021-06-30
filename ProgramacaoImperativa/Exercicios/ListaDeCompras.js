let produtos = ['Legumes', 'Frutas', 'Café', 'Produtos de limpeza', 'Torradas', 'Café','Sabão']

//produtos.push()
produtos.push('Biscoito')
console.log(produtos + ' / Push adciona um ou mais alementos ao final do array')

//produtos.pop()
produtos.pop()
console.log(produtos + ' / Pop Elimina o último elemento do array')

//produtos.shift()
produtos.shift()
console.log(produtos + ' / Shift Elimina o primeiro elemtento do array')

//produtos.unshift()
produtos.unshift('KitKat', 'Noodles')
console.log(produtos + ' / unshift adciona um ou mais elementos ao início do array')

//produtos.join()
console.log(produtos.join(' : ') + ' / Join junta os elementos do array usando um separador especificado')

//produtos.indexOf()
console.log(produtos.indexOf('Frutas') + ' / indexOf retorna a posição atual do item no array')

//produtos.lastIndexOf()
console.log(produtos.lastIndexOf('Café') + ' / lasatIndexOf retorna a posicão atual do item no array começando pelo final do array')

//produtos.includes()
console.log(produtos.includes('Morango') + ' / retorna um booleano')