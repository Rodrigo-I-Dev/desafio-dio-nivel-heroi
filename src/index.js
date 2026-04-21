////////// Primeiro Projeto DIO Lógica de Programação ///////////////

//////// Variáveis ////////////////
let nome = "Rodrigo"
let xp = 10002
let nivel = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante" ]

//////// Código /////////////////
if(xp <= 1000){
    console.log("O Herói de nome" + nome , "está no nível de " + nivel[0])
}
else if(xp >= 1001 && xp <= 2000){
    console.log("O Herói de nome " + nome , "está no nível de " + nivel[1])
}
else if(xp >= 2001 && xp <= 5000){
    console.log("O Herói de nome " + nome , "está no nível de " + nivel[2])
}
else if(xp >= 5001 && xp <= 7000){
    console.log("O Herói de nome " + nome , "está no nível de " + nivel[3])
}
else if(xp >= 7001 && xp <= 8000){
    console.log("O Herói de nome " + nome , "está no nível de " + nivel[4])
}
else if(xp >= 8001 && xp <= 9000){
    console.log("O Herói de nome " + nome , "está no nível " + nivel[5])
}
else if(xp >= 9001 && xp <= 10000){
    console.log("O Herói de nome " + nome , "está no nível " + nivel[6])
}
if(xp >= 10001){
    console.log("O Herói de nome " + nome , "está no nível " + nivel[7])
}
/////////// Fim do código //////////