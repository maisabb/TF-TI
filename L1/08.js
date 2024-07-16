const prompt = require ("prompt-sync")();

let idade = prompt ("Digite a idade: ");

if (idade >= 18 && idade <= 70){
    console.log ("Voto obrigatório");
}else if (idade > 70 || (idade >= 16 && idade < 18)){
    console.log ("Voto opcional");
}else {
    console.log ("Não pode votar");
}