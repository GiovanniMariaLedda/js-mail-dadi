console.log('JS OK');

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


//Mail
//! Raccolta dati
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

//! Procedimento
// Creare lista email 
const emailList = ['filipet@gmail.com','gianma@icloud.com','franci@outlook.com','marco@libero.it'];
// Chiedere all'utente la sua email;
const addUserEmail = prompt('inserisci la tua e-mail');
// controllare che sia nella lista email di chi può accedere:
const emailListPresent = emailList.includes(addUserEmail);
console.log(emailListPresent);
//  SE
    if (emailListPresent == true){
//    è nella lista, stampare messaggio OK;
        console.log('presente');
        window.alert("Sei presente nella lista");
    }    
//  ALTRIMENTI 
    else { (emailListPresent == false)
//    Stampare messaggio d'insuccesso.
        console.log('Non presente');
        window.alert("Non sei presente nella lista"); 
    }











