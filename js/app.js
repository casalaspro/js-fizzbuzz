/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz” al post del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
Potete usare innerHTML oppure il metodo append creando l’elemento come oggetto usando createElement
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
*/

// Creare un ciclio che vada da 1 a 101
//  - condizione di esistenza i < 101
//    - if i % 3 === 0 && i % 5 !==0 stampa Fizz anzichè i
//    - if i % 5 === 0 && i % 3 !==0 stampa Buzz anzichè i
//    - if i % 3 === 0 && i % 5 === 0 stampa FizzBuzz anzichè i
//    - per tutti gli altri casi stampa il numero raggiunto dal contatore

// proviamo che il file sia collegato adeguatamente
console.log("Avvio programma.");

// ciclo for
for(let i = 1 ; i < 101 ; i++){
  // test
  // console.log(i);
  if(i % 3 === 0 && i % 5 !==0){
    console.log("Fizz");
  }else if(i % 5 === 0 && i % 3 !==0){
    console.log("Buzz");
  }else if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }else{
    console.log(i);
  }
}

// testare un append() all'interno del ciclo
//  - creare variabile del container del DOM
//  - creare elemento con document.createElement('li');
let newLiElement = document.createElement('li');
//  - creare il contenuto testuale con document.createTextNode("BuzzFizz");
let newdivElement = document.createElement('div');
let newPelement = document.createElement('p');

// creo il testo
let new_p_text = document.createTextNode("FizzBuzz");

// aggiungo il testo allo div
newPelement.append(new_p_text);
// aggiungo classe light-blue al div
newdivElement.classList.add("light-blue")
// aggiungo il p al div
newdivElement.append(newPelement);
// aggiungo lo div al li
newLiElement.append(newdivElement);
//  intercettare genitore
let parentElement = document.querySelector(".container");
// unisco gli elementi
parentElement.appendChild(newLiElement);

console.dir(newLiElement);
console.dir()
//  - aggiungere elemento al container insertBefore()
//   - creare elemento padre
//   - creare elemento figlio
//   - usare elementoPadre.insertBefore(elementoNuovo, elementoFiglio);
