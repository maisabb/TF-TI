const prompt = require ("prompt-sync")();

let diariaZelandia = Math.round(79.15 / 3.25);
let guiaZelandia = Math.round(200 / 3.25);

let diariaTailandia = Math.round(590 * 0.15);
let guiaTailandia = Math.round(235 * 0.15);

let diariaCosta = Math.round(2300 * 0.0089);
let guiaCosta = Math.round (3150 * 0.0089);

let nome = prompt ("Digite o nome do cliente: ");
let dias = prompt ("Digite a quantidade de dias: ");

console.log ("Olá, " + nome + "!É um prazer termos você como cliente e estamos ansiosos para que sua viagem possa ocorrer em breve!\nEstou te encaminhando os orçamentos!\n * Nova Zelândia *\nPassagens: R$13996\nAcomodação(%d dias) de R$%d\nO guia local custará R$%d\nTotal R$%d\n --------- \n* Tailândia *\nPassagens: R$9160\nAcomodação(%d dias) de R$%d\nO guia local custará R$%d\nTotal R$%d\n --------- \n* Costa Rica *\nPassagens: R$5119\nAcomodação(%d dias) de R$%d\nO guia local custará R$%d\nTotal R$%d",dias,diariaZelandia * dias, guiaZelandia * dias, 13996 + (diariaZelandia * dias) + (guiaZelandia * dias),dias,diariaTailandia * dias, guiaTailandia * dias, 9160 + (diariaTailandia * dias) + (guiaTailandia * dias),dias,diariaCosta * dias, guiaCosta * dias, 5119 + (diariaCosta * dias) + (guiaCosta* dias));
