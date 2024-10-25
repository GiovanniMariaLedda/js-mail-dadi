console.log('JS OK');
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

//! RAccolta Dati
// Generare un numero random compreso fra 1 e 6;
// Generarlo sia per il palyer che per il computer;
// Vedere chi ha fatto il punteggio più alto;
// paragonare i punteggi e decretare il vincitore;

//! Procedimento 
// Generatore numeri per palyer
const playerNumber = Math.random(1) * 6 ;
const playerIntNum = Math.ceil(playerNumber);
console.log(playerIntNum);

// Generatore numeri per computer 
const computerNumber = Math.random(1) * 6 ;
const computerIntNum = Math.ceil(computerNumber);
console.log(computerIntNum);

// Confronto numeri 
if (playerIntNum > computerIntNum) {
    console.log('Player Win');
    window.alert('Player Win');

} else if(computerIntNum > playerIntNum)  {
    console.log('Computer Win');
    window.alert('Computer Win');

} else { (playerIntNum == computerIntNum)
    console.log('pareggio');
    window.alert('pareggio');
}


//! Output