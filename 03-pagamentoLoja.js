let preco = 60;
let desconto = 10;
let totalAVista = 0;
let qtdePrestacoes = 3;

totalAVista = (preco - ((preco*desconto)/100));
totalAPrazo = (preco / qtdePrestacoes);

console.log(`Preço: R$ ${preco},00`);
console.log(`À vista: R$ ${(totalAVista)},00`);
console.log(`Ou 3x de R$ ${(totalAPrazo)},00`);