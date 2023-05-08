let idade5 = 30

if(idade5 < 0){
    console.log("Idade invalida")
}else if(idade5 > 0 && idade5 < 12){
    console.log("você é uma crinça");
}else if(idade5 >= 13 && idade5 < 18){
    console.log("você é adolescente");
}else if(idade5 >= 19 && idade5 <= 55) {
    console.log("você é adulto");
}else if(idade5 > 56 && idade5 < 105){
    console.log("você é idoso");
}else if(idade5 > 105){
    console.log("Idade invalida")
}