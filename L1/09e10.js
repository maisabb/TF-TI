const prompt = require ("prompt-sync")();

let diariaZelandia = Math.round(79.15 / 3.25);
let guiaZelandia = Math.round(200 / 3.25);

let diariaTailandia = Math.round(590 * 0.15);
let guiaTailandia = Math.round(235 * 0.15);

let diariaCosta = Math.round(2300 * 0.0089);
let guiaCosta = Math.round (3150 * 0.0089);

console.log ("Diária Nova Zelândia: R$%d\nGuia Nova Zelândia: R$%d\nDiária Tailândia: R$%d\nGuia Tailândia: R$%d\nDiária Costa Rica: R$%d\nGuia Costa Rica: R$%d\n",diariaZelandia,guiaZelandia, diariaTailandia, guiaTailandia, diariaCosta, guiaCosta);

let nome = prompt ("Qual seu nome?");
let destino = parseInt (prompt ("Digite o número do seu destino: 1 para Nova Zelândia, 2 para Tailândia ou 3 para Costa rica"));
let dias = parseInt (prompt ("Quantos dias pretende ficar? "));

if (destino === 1){
    diariaZelandia *= dias;
    guiaZelandia *= dias;
    console.log ("Olá, " + nome + "! É um prazer termos você como cliente e estamos ansiosos para que sua viagem para a Nova Zelândia possa ocorrer em breve! Estou te encaminhando os custos:\nAs passagens ficarão em torno de R$13996, os custos para acomodação de %d dias serão de R$%d.\nO guia local custará R$%d.\nSua viagem custará R$%d!",dias,diariaZelandia, guiaZelandia, 13996 + diariaZelandia + guiaZelandia);
}else if (destino === 2){
    diariaTailandia *= dias;
    guiaTailandia *= dias;
    console.log ("Olá, " + nome + "! É um prazer termos você como cliente e estamos ansiosos para que sua viagem para a Tailândia possa ocorrer em breve! Estou te encaminhando os custos:\nAs passagens ficarão em torno de R$9160, os custos para acomodação de %d dias serão de R$%d.\nO guia local custará R$%d.\nSua viagem custará R$%d!",dias,diariaTailandia, guiaTailandia, 9160 + diariaTailandia+ guiaTailandia);
}else {
    diariaCosta *= dias;
    guiaCosta *= dias;
    console.log ("Olá, " + nome + "! É um prazer termos você como cliente e estamos ansiosos para que sua viagem para a Costa Rica possa ocorrer em breve! Estou te encaminhando os custos:\nAs passagens ficarão em torno de R$5119, os custos para acomodação de %d dias serão de R$%d.\nO guia local custará R$%d.\nSua viagem custará R$%d!",dias,diariaCosta, guiaCosta, 5119 + diariaCosta + guiaCosta);
}

