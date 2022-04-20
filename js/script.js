// PARTE 1
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Bonus: L’inserimento avviene tramite un campo input


const word ='casa';
let reverseWord = invertiParola(word);

if(word == reverseWord){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}

function invertiParola(wordIns){
  let reverseWord = '';
  let i = wordIns.length - 1;

  while (i >= 0) {
    reverseWord += wordIns[i];
    console.log(wordIns[i]);
    i--;
  }
  console.log(reverseWord);
  return reverseWord;
  
}




// PARTE 2
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Bonus: L’inserimento avviene tramite un campo input