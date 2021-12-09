/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
/*******************************************************************************

    1- Che cosa fa questo codice?
    è un ciclo for con incremento della variabile i
    
    2- Sono presenti errori di sintassi?
    i > 5 , la sintassi del ciclo for è i < 5 per comunicare quando il ciclo deve finire
    3- Sono presenti errori logici?
    mettere i > 5 è un errore logico perchè prima si definisce i = 0 e subito dopo si comunica al ciclo che i deve essere maggiore di 5

*******************************************************************************/

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}
/*******************************************************************************

    1- Che cosa fa questo codice?
    una funzione che aggiunge 5 ad ogni numero pari e restituisce il nuovo numero
    2- Sono presenti errori di sintassi?
    (num % 2 = 0) un singolo = si usa solo per le assegnazioni di variabile
    un numero è pari se il suo %2 è pari a 0, cioè num % 2 == 0
    3- Sono presenti errori logici?
    aggiungendo 5 ad ogni numero pari avremo tutti numeri dispari

*******************************************************************************/

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
/*******************************************************************************

    1- Che cosa fa questo codice?
    funzione che incrementa la variabile i in un ciclo, partendo da 0 fino a 5
    2- Sono presenti errori di sintassi?
    le istruzioni che il ciclo for deve compiere vanno divise tra di loro tramite ; e non ,
    
    quindi for (let i = 0; i < 5; i++)

    3- Sono presenti errori logici?


*******************************************************************************/

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0); {
            evenNumbers.push(numbers[i]);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]



/*******************************************************************************

    1- Che cosa fa questo codice?
    funzione che, dato un array di numeri, aggiunge i numeri pari ad un altro array
    2- Sono presenti errori di sintassi

    la funzione deve essere richiamata prima della sua definizione (le funzioni si scrivono in fondo)
    mettendo come condizione numbers.length - 1 il ciclo for non legge l'ultimo elemento dell'array
    il ; dopo l'incremento della variabile i non va messo
    numbers[i] non numbers che è l'intero array
    % 2 == 0 , con un singolo = si definiscono le variabili
    evenNumbers.push(i) in questo modo si aggiunge dentro l'array la variabile i, evenNumbers.push(numbers[i]) così il numero corrispondente alla variabile i



    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];

    displayEvenNumbers(); 

    function displayEvenNumbers() {

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 == 0){
                evenNumbers.push(numbers[i])
            }
        } 
    }

    3- Sono presenti errori logici?


*******************************************************************************/