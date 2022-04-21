// PARTE 1
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Bonus: L’inserimento avviene tramite un campo input

const btnCheck = document.querySelector("#btn_check");
let word;

btnCheck.addEventListener("click", initVerifica);


function initVerifica(){
  const wordForm = document.querySelector("#InputName");
  word = wordForm.value;
  let reverseWord = invertiParola(word);

  if(word.toLowerCase() == reverseWord.toLowerCase()){
      console.log('la parola è palindroma');
      document.querySelector("#answer-text").innerHTML = `La parola inserita <strong>${word.toLowerCase()}</strong>, è palindroma in quanto il suo contrario è <strong>${reverseWord.toLowerCase()}</strong>`
    } else {
      console.log('la parola non è palindroma');
      document.querySelector("#answer-text").innerHTML = `La parola inserita <strong>${word.toLowerCase()}</strong>, non è palindroma in quanto il suo contrario è <strong>${reverseWord.toLowerCase()}</strong>`
  }
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



let numberPlayer;
let sum;

const btnPlay = document.querySelector("#btn_play");

btnPlay.addEventListener("click", initGame);

function initGame(){
  const typeForm = document.querySelector("#select-type");
  const typeSelect = typeForm.value;


  const numberForm = document.querySelector("#InputNumber");
  numberPlayer = parseInt(numberForm.value);
  console.log("Numero del giocatore:",numberPlayer);


  const numberComputer = getRandomNumber(1,5);
  console.log("Numero del computer:",numberComputer);

  sum = numberPlayer + numberComputer;

  if(isPari(sum)){
      console.log('La somma è pari');
    } else {
      console.log('La somma è dispari');
  }

  if(isPari(sum) && typeSelect ==="Pari" ){
    console.log('La somma dei numeri è pari. Vince il giocatore!');
    document.querySelector("#answer-text-number").innerHTML = `Il numero random è: <strong>${numberComputer}</strong> <br> La somma dei due numeri è: <strong>${sum} (pari)</strong><br> Il giocatore vince!`

  } else if (isPari(sum) && typeSelect ==="Dispari" ){
  console.log('La somma dei numeri è pari. Vince il computer!');
  document.querySelector("#answer-text-number").innerHTML = `Il numero random è: <strong>${numberComputer}</strong> <br> La somma dei due numeri è: <strong>${sum} (pari)</strong><br> Il computer vince!`

  } else if (!isPari(sum) && typeSelect ==="Dispari" ){
  console.log('La somma dei numeri è dispari. Vince il giocatore!');
  document.querySelector("#answer-text-number").innerHTML = `Il numero random è: <strong>${numberComputer}</strong> <br> La somma dei due numeri è: <strong>${sum} (dispari)</strong><br> Il giocatore vince!`

  } else if (!isPari(sum) && typeSelect ==="Pari" ){
    console.log('La somma dei numeri è dispari. Vince il Computer!');
    document.querySelector("#answer-text-number").innerHTML = `Il numero random è: <strong>${numberComputer}</strong> <br> La somma dei due numeri è: <strong>${sum} (dispari)</strong><br> Il computer vince!`
  }

}


function getRandomNumber(min, max){
  return  Math.floor(Math.random() * (max - min +1) + min );
}

function isPari(num){
  if(num % 2) return false;
  return true;
}