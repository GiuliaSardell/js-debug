/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
  ];
  
  const gasolineCars = cars.filter( (auto) => auto.type.toLocaleUpperCase() == 'benzina'.toLocaleUpperCase());
  
  const dieselCars = cars.filter( (auto) => auto.type.toLocaleUpperCase() == 'diesel'.toLocaleUpperCase());
  
  const otherCars = cars.filter( (auto) => auto.type.toLocaleUpperCase() != 'benzina'.toLocaleUpperCase() && auto.type.toLocaleUpperCase() != 'diesel'.toLocaleUpperCase());
  
  console.log('Auto a benzina');
  console.log('*******************************');
  console.log(gasolineCars);
  
  console.log('Auto a diesel');
  console.log('*******************************');
  console.log(dieselCars);
  
  console.log('Tutte le altre auto');
  console.log(otherCars);

/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    dato un array di oggetti con dati di macchine, dividere le macchine in array diversi in base al loro type
    2- Sono presenti errori di sintassi?
    manca una virgola tra un oggetto e l'altro
    le arrow function sono scritte sbagliate
    va aggiunto il metodo .toLocaleUpperCase() 
    bisogna mettere == e non ===
    nella terza arrow function va messo && e non || 
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/