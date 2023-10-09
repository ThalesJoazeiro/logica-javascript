let gastos = 80;
let taxaGarcom = 10;

console.log('Valor do jantar: R$ ' + gastos + ',00');
taxaGarcom = ((gastos*taxaGarcom)/100);
console.log('Taxa do garçom: R$ ' + taxaGarcom + ',00');
console.log('Total a pagar: R$ ' + (gastos + taxaGarcom) + ',00');