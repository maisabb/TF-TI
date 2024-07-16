const prompt = require ("prompt-sync")();

function inserirNotas (){
    let materia = prompt ("Digite a matéria: ");
    let nomeAluno = prompt ("Digite o nome do aluno: ");
    let notaProva = parseInt (prompt ("Digite a nota da prova: "));
    let notaTrabalho = parseInt (prompt ("Digite a nota do trabalho: "));

    if ((notaProva + notaTrabalho) / 2 <= 7){
        console.log ("o aluno(a) " + nomeAluno + " foi reprovado(a) em " + materia + " com média de %d", (notaProva + notaTrabalho) / 2);
    }
}

inserirNotas();
