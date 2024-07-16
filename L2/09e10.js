const prompt = require ("prompt-sync")();

let vetor = Array(10);

for (let i = 0; i < 10; i++){
    vetor[i] = prompt();
}

for (let i = 0; i < 10; i++){
    console.log(vetor[i]);
}

console.log ("Primeira letra: %s\nQuarta letra: %s\nQuinta letra: %s\nÚltima letra: %s\nTamanho da lista: %d",vetor[0],vetor[3],vetor[4],vetor[9], vetor.length);