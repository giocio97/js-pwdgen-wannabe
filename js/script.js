

//  chiediamo il nome 
const nome = prompt("Come ti chiami?")

document.getElementById("nome").innerHTML= `Ciao, ${nome}`; 
console.log(nome)


// chiediamo il cognome 
const cognome = prompt(" Cognome?")

document.getElementById("cognome").innerHTML= `  ${cognome}`;

console.log(cognome)

// chiediamo il suo colore preferito 
const colore = prompt(" Il tuo colore preferito?")

document.getElementById("colore").innerHTML= ` Il tuo colore preferito è: ${colore}`; 
console.log(colore)

// chiediamo la sua eta
const eta = prompt(" Qianti anni hai?")
const anno = 2022 - eta
console.log(eta)

document.getElementById("anno").innerHTML= ` Il tuo anno di nascita  è: ${anno}`; 
console.log(anno)