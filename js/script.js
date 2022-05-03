

//  chiediamo il nome 
const nome = prompt("Come ti chiami?");

document.getElementById("nome").innerHTML= `Ciao, ${nome}`; 
console.log(nome);


// chiediamo il cognome 
const cognome = prompt(" Cognome?");



console.log(cognome);

// chiediamo il suo colore preferito 
const colore = prompt(" Il tuo colore preferito?");


console.log(colore);

// chiediamo la sua eta
const eta = prompt(" Quanti anni hai?");
const anno = 2022 - eta;
console.log(eta);


console.log(anno);

// password

document.getElementById("password").innerHTML= `La tua super-password è: ${nome + cognome + colore + anno}`; 
console.log (nome + cognome + colore + anno);