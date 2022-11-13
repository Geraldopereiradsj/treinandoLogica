//Calculando quantidade gasta de gasolina em uma viagem.

let tempoA = parseFloat(prompt('Digite quanto tempo de viagem'));
let velocidade = parseInt(prompt('Digite a velocidade'));
let distancia = tempoA * velocidade;
let litrosUsados = distancia/12;

alert(`Seu veículo percorreu ${distancia}km a ${velocidade}km/h em ${tempoA}h de viagem e consumiu ${litrosUsados.toFixed(2)}l de gasolina.`);


