const prompt = require("prompt-sync")();

console.log ("Insira as notas dos seus alunos. Quando acabar digite 'SAIR'");

let media = 0, contador = 0;
let entrada;

while ((entrada = prompt()) !== "SAIR"){
    let nota = parseInt (entrada);
    media += nota;
    contador++;
}

alert ("A média da turma é %d", media / contador);