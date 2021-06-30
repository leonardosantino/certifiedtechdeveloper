function Restaurante (nome, cardapio){
   this.nome = nome;
   this.cardapio = cardapio;
   let entrada = () => `${'Bem-Vindo!'}${'\n'}${'Restaurante'} ${nome}${'\n'}${'O cardápio para hoje é:'} ${cardapio}`;
   return entrada()
}
let massas = ['Massa com almondegas', ' Massa com Molho Bolognesa ', ' Massa Carbonara.'];
console.log(Restaurante('Italiano', massas))