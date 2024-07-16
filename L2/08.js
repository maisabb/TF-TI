const prompt = require ("prompt-sync")();

let nomeTutor = prompt ("Digite seu nome: ");
let telefone = prompt ("Digite seu telefone: ");

let nomeAnimal = Array(), especie = Array(), cor = Array();


for (let i = 0; ; i++){
    nomeAnimal[i] = prompt("Qual o nome do animal? ");
    especie[i] = prompt("Qual a espécie?");
    cor[i] = prompt("Qual a cor? ");
    let maisUm = prompt ("Deseja cadastrar mais um animal? ");

    if (maisUm !== "Sim"){
        break;
    }
}

console.log (nomeTutor, telefone);
for (let i = 0; i < cor.length; i++){
    console.log (nomeAnimal[i], especie[i], cor[i]);
}