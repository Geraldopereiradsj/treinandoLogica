// //Exercicio 1

// let primeiroNumero = parseInt(prompt('Digite aqui um numero'));
// let segundoNumero = parseInt(prompt('Digite aqui outro numero'));

// if (segundoNumero > primeiroNumero){
//     alert(`O maior numero é ${segundoNumero} e a diferença entre eles é ${segundoNumero-primeiroNumero}`);

// }else if (primeiroNumero > segundoNumero){
//     alert(`O maior numero é ${primeiroNumero} e a diferença entre eles é ${primeiroNumero-segundoNumero}`);
// }


// //Exercício 2

// let numeroRecebido1 = parseInt(prompt('Digite aqui um numero'))
// let numeroRecebido2 = parseInt(prompt('Digite aqui outro numero'))

// if(numeroRecebido1 > numeroRecebido2) {
//     alert(`O numero ${numeroRecebido1} é maior que o numero ${numeroRecebido2}`) 


// }else if(numeroRecebido1===numeroRecebido2){
//     alert('Numeros iguais')

// }else if(numeroRecebido2 > numeroRecebido1){
//     alert(`O numero ${numeroRecebido2} é maior que o numero ${numeroRecebido1}`)

// }else {
//     alert ('Comando invalido')
// }


// //Exercicio 3

// let salarioA = parseFloat(prompt('Digite aqui seu salário'));
// let prestacaoB = parseFloat(prompt('Digite o valor da prestação'));

// if (prestacaoB > (30*salarioA)/100){
//    alert('Empréstimo não concedido') 
// }else {
//     alert('Empréstimo concedido')
// }


// //Exercicio 4

// let divisao = parseInt(prompt('Digite aqui um numero'));

// if(divisao % 3 == 0 && divisao % 5 == 0) {
//     alert('O valor é invalido')

// }else if (divisao % 3 == 0) {
//     alert('Valor divisível por 3')

// }else if (divisao % 5 == 0 ){
//     alert('Valor divisível por 5') 

// }else if (divisao % 2 == 0){
//     alert(`O valor é par`)

//  }else {
//     alert ('O valor é impar')
//  }


// //Exercicio 5

// let numeroInteiro = parseInt(prompt('Digite um valor de 1 até 7'));


// if(numeroInteiro == 1) {
//     alert('Domingo')

// }else if (numeroInteiro === 2) {
//     alert ('Segunda-Feira')

// }else if (numeroInteiro === 3) {
//     alert ('Terça-Feira')

// }else if (numeroInteiro === 4) {
//     alert ('Quarta-Feira')

// }else if (numeroInteiro === 5) {
//     alert ('Quinta-Feira')

// }else if (numeroInteiro === 6) {
//     alert ('Sexta-Feira')

// }else if (numeroInteiro === 7) {

//     alert ('Sábado')
// }else{

//    alert ('Numero invalido') 
// }


// //Exercicio 6

// let salario = parseFloat(prompt('Digite aqui seu salário'));
// let persentual = parseFloat(prompt('Digite o percentual de reajuste'));
// let salarioAtual = (salario * persentual) /100;

// if(persentual >= 5){

//     alert (`O persentual de aumento de salario é maior ou igual a ${persentual}% e o salario do funcionário corrigido é de: ${salarioAtual + salario}`);

// }else{
//     alert (`O salario do funcionário corrigido é de: ${salarioAtual + salario}`);
// }




// //Exercicio 7

// let valorDolar = parseFloat(prompt('Digite um valor em dólar'));
// let cotacao = parseFloat(prompt('Digite a cotação atual do real comparando com o dólar'));
// let valorReal = parseFloat(valorDolar * cotacao);
// let valorDolarConvertido = new Intl.NumberFormat ('us', {
//     style: 'currency',
//     currency: 'USD'
// }).format (valorDolar);
// let cotacaoConvertido = new Intl.NumberFormat ('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format (cotacao);
// let valorRealConvertido =  new Intl.NumberFormat ('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format (valorReal);


// alert (`${valorDolarConvertido} é equivalente a ${valorRealConvertido} tendo ${cotacaoConvertido} como cotação.`)


// //Exercicio 8

// let escolha = parseInt(prompt('Digite um numero de 1 até 4'));
// let acre = parseInt(prompt('Digite a área a ser contratada'));
// let opcao;


// // Primeiro if
// if (escolha == 1) {
//     opcao = 50;

// }

// let valorTotal = opcao * acre;
// let valorTotalFormatado = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorTotal);

// let valorTotalComDesconto = (valorTotal * 10) / 100;
// let valorTotalComDescontoFormatado = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorTotalComDesconto);

// let valorAcreDesconto = (valorTotal * 5) / 100;
// let valorAcreDescontoFormatado = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorAcreDesconto);



// if (escolha == 1 && valorTotal <= 750) {
//     alert(`O valor a ser pago vai ser ${valorTotalFormatado}`);


// } else if (escolha == 1 && acre > 1000 && valorTotal) {
//     alert(`O valor a ser pago com desconto de 5% vai ser: ${valorAcreDescontoFormatado}`)

// } else if (escolha == 1 && valorTotal >= 750 && acre <= 999) {
//     alert(`O valor a ser pago com desconto de 10% vai ser: ${valorTotalComDescontoFormatado}`)


// } else if (escolha == 1 && valorTotal >= 750 && acre >= 1000) {
//     alert(`O valor a ser pago com desconto de 10% vai ser: ${valorTotalComDescontoFormatado}`)

// }



// //Segunda if
// if (escolha == 2) {
//     opcao = 100;

// }

// let valorTotalB = opcao * acre;
// let valorTotalFormatadoB = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorTotalB);

// let valorTotalComDescontoB = (valorTotalB * 10) / 100;
// let valorTotalComDescontoFormatadoB = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorTotalComDescontoB);

// let valorAcreDescontoB = (valorTotalB * 5) / 100;
// let valorAcreDescontoFormatadoB = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorAcreDescontoB);



// if (escolha == 2 && valorTotalB <= 750) {
//     alert(`O valor a ser pago vai ser ${valorTotalFormatadoB}`);


// } else if (escolha == 2 && acre > 1000 && valorTotalB) {
//     alert(`O valor a ser pago com desconto de 5% vai ser: ${valorAcreDescontoFormatadoB}`)

// } else if (escolha == 2 && valorTotalB >= 750 && acre <= 999) {
//     alert(`O valor a ser pago com desconto de 10% vai ser: ${valorTotalComDescontoFormatadoB}`)

// } else if (escolha == 2 && valorTotalB >= 750 && acre >= 1000) {
//     alert(`O valor a ser pago com desconto de 10% vai ser: ${valorTotalComDescontoFormatadoB}`)
// }


// //Terceiro if
// if (escolha == 3) {
//     opcao = 150;

// }

// let valorTotalC = opcao * acre;
// let valorTotalFormatadoC = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorTotalC);

// let valorTotalComDescontoC = (valorTotalC * 10) / 100;
// let valorTotalComDescontoFormatadoC = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorTotalComDescontoC);

// let valorAcreDescontoC = (valorTotalC * 5) / 100;
// let valorAcreDescontoFormatadoC = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorAcreDescontoC);



// if (escolha == 3 && valorTotalC <= 750) {
//     alert(`O valor a ser pago vai ser ${valorTotalFormatadoC}`);


// } else if (escolha == 3 && acre > 1000 && valorTotalC) {
//     alert(`O valor a ser pago com desconto de 5% vai ser: ${valorAcreDescontoFormatadoC}`)

// } else if (escolha == 3 && valorTotalC >= 750 && acre <= 999) {
//     alert(`O valor a ser pago com desconto de 10% vai ser: ${valorTotalComDescontoFormatadoC}`)

// } else if (escolha == 3 && valorTotalC >= 750 && acre >= 1000) {
//     alert(`O valor a ser pago com desconto de 10% vai ser: ${valorTotalComDescontoFormatadoC}`)

// }





// //Quarto if
// if (escolha == 4) {
//     opcao = 250;

// }

// let valorTotalD = opcao * acre;
// let valorTotalFormatadoD = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorTotalD);

// let valorTotalComDescontoD = (valorTotalD * 10) / 100;
// let valorTotalComDescontoFormatadoD = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorTotalComDescontoD);

// let valorAcreDescontoD = (valorTotalD * 5) / 100;
// let valorAcreDescontoFormatadoD = new Intl.NumberFormat('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format(valorAcreDescontoD);



// if (escolha == 4 && valorTotalD <= 750) {
//     alert(`O valor a ser pago vai ser ${valorTotalFormatadoD}`);


// } else if (escolha == 3 && acre >= 1000 && valorTotalD) {
//     alert(`O valor a ser pago com desconto de 5% vai ser: ${valorAcreDescontoFormatadoD}`)

// } else if (escolha == 4 && valorTotalD >= 750 && acre <= 999) {
//     alert(`O valor a ser pago com desconto de 10% vai ser: ${valorTotalComDescontoFormatadoD}`)

// } else if (escolha == 4 && valorTotalD >= 750 && acre >= 1000) {
//     alert(`O valor a ser pago com desconto de 10% vai ser: ${valorTotalComDescontoFormatadoD}`)

// }




//Exercicio 9

let tempoA = parseFloat(prompt('Digite quanto tempo de viagem'));
let velocidade = parseInt(prompt('Digite a velocidade'));
let distancia = tempoA * velocidade;
let litrosUsados = distancia/12;

alert(`Seu veículo percorreu ${distancia}km a ${velocidade}km/h em ${tempoA}h de viagem e consumiu ${litrosUsados.toFixed(2)}l de gasolina.`);



//Exercicio 10

// let valor = parseFloat(prompt('Digite um valor'));
// let taxa = parseFloat(prompt('Digite a taxa'));
// let tempo = parseInt(prompt('Digite o tempo'));
// let prestacao = valor + (valor * (taxa/100) * tempo);
// let prestacaoFormatada = new Intl.NumberFormat ('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }).format (prestacao);


// if (tempo > 1){
//     alert (`O valor da prestação é ${prestacaoFormatada}`)

// }else if(tempo == 0){

//     alert (`Valor inválido o tempo de atraso deve ser em dias`)

// }else if(tempo.toFixed(1) || tempo.toFixed(2)){

//     alert (`Valor inválido o tempo de atraso deve ser em dias`)
// }
