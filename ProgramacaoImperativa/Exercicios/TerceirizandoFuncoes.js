let acaoCarro = callback => callback();

let andar = () => console.log('O carro está andando');

let parar = () => console.log('O carro parou');

acaoCarro(andar);
acaoCarro(parar);