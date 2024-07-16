const prompt = require ("prompt-sync")();

let aluno1 = Array(3);
let aluno2 = Array(3);
let aluno3 = Array(3);

aluno1[0] = prompt ("Digite o nome do aluno 1: ");
aluno1[1] = prompt ("Digite a média de Português do Aluno 1: ");
aluno1[2] = prompt ("Digite a média do aluno 1 em Matemática: ");
aluno2[0] = prompt ("Digite o nome do aluno 2: ");
aluno2[1] = prompt ("Digite a média de Português do Aluno 2: ");
aluno2[2] = prompt ("Digite a média do aluno 2 em Matemática: ");
aluno3[0] = prompt ("Digite o nome do aluno 3: ");
aluno3[1] = prompt ("Digite a média de Português do Aluno 3: ");
aluno3[2] = prompt ("Digite a média do aluno 3 em Matemática: ");

function Vencedor (aluno1, aluno2, aluno3){
    if (aluno1[1] > aluno2[1] && aluno1[1] > aluno3[1]){
        console.log (aluno1[0] + " é o vencedor");
    }else if (aluno2[1] > aluno1[1] && aluno2[1] > aluno3[1]){
        console.log (aluno2[0] + " é o vencedor");
    }else if (aluno3[1] > aluno1[1] && aluno3[1] > aluno2[1]){
        console.log (aluno3[0] + " é o vencedor");
    }else if (aluno1[1] === aluno2[1] && aluno1[1] > aluno3[1]){
        if (aluno1[2] > aluno2[2]){
            console.log (aluno1[0] + " é o vencedor");
        }else {
            console.log (aluno2[0] + " é o vencedor");
        }
    }else if (aluno2[1] === aluno3[1] && aluno3[1] > aluno1[1]){
        if (aluno2[2] > aluno3[2]){
            console.log (aluno2[0] + " é o vencedor");
        }else {
            console.log (aluno3[0] + " é o vencedor");
        }
    }else if (aluno1[1] === aluno3[1] && aluno3[1] > aluno2[1]){
        if (aluno1[2] > aluno3[2]){
            console.log (aluno1[0] + " é o vencedor");
        }else {
            console.log (aluno3[0] + " é o vencedor");
        }
    }else {
        console.log ("Todos empataram, não há vencedor");
    }
}

Vencedor(aluno1, aluno2, aluno3);