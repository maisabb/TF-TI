const prompt = require ("prompt-sync")();

console.log("Senha incorreta. Seu cartão foi bloqueado. Se deseja ir a uma agência, digite 'A' ou se deseja desbloquear com sua chave de segurança, digite 'D'");

let letra = prompt();

if (letra === "A"){
    console.log ("Será um prazer atendê-la na agência");
}else {
    console.log ("Digite a chave de segurança que foi enviada para seu email cadastrado.");
    let chave = 9999;
    if (prompt() != 9999){
        console.log ("Chave incorreta. É preciso ir a uma agência.");
    }else {
        console.log ("Por favor, redefina a senha.")
    }
}