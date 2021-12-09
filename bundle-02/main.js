/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
let myAge = 32;
let message = '';

function checkAge() {


    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    stampa un messaggio diverso in base all'età dell'utente
    2- Sono presenti errori di sintassi?
    le due variabili vanno definite prima della funzione, e la variabile message non è const ma let
    3- Sono presenti errori logici?
​
*******************************************************************************/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    conta quanti elementi sono presenti nell'array colors
    2- Sono presenti errori di sintassi?
    l'errore è nella parola lenght che è scritta male, sarebbe length 
    3- Sono presenti errori logici?
​
*******************************************************************************/



// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = eval(userNumber) + eval(12)

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    fa scegliere un numero all'utente e aggiunge 12
    2- Sono presenti errori di sintassi?
    senza eval() i due numeri non si sommano
    
    const total = eval(userNumber) + eval(12)

    3- Sono presenti errori logici?
​
*******************************************************************************/


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');
  
    let grantAccess = false;
  
    if (addresses.includes(userEmail)) {
        grantAccess = true;
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
  
  }
  
  checkAccess();

/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    dato un array di indirizzi mail, fa inserire all'utente la propria mail, 
    se la mail dell'utente è presente nell'array consente l'accesso
    2- Sono presenti errori di sintassi?
    grantAccess non è una stringa ma una variabile booleana, quindi si scrive senza apici
    
    3- Sono presenti errori logici?
    è tutto racchiudibile in un unico if
​
*******************************************************************************/



// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = 'true';            
            
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();


function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
  
    const userEmail = prompt('Inserisci il tuo indirizzo email');
  
    let grantAccess = false;
  
    for (let i = 0; i < addresses.length; i++) {
      const email = addresses[i];
        
        if (userEmail.length > 5) {
            
          if (addresses.includes(userEmail)) {
            grantAccess = true;            
          }
          
          if (grantAccess) {
            console.log('Accesso consentito!');
          } else {
            console.log('Accesso negato!');
          }
        }
  
      
    }
  }
  checkAccessImproved();


/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    dato un array di indirizzi mail, fa inserire all'utente la propria mail, 
    se la mail dell'utente è più lunga di 5 caratteri e se è presente nell'array consente l'accesso
    2- Sono presenti errori di sintassi?
    
    3- Sono presenti errori logici?
    ho utilizzato il metodo includes per far cambiare la variabile booleana
​
*******************************************************************************/



























