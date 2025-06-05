/*
Snack 1
Crea una funzione che somma due numeri:

Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. */

console.log("first snack")

function sum(numb1, numb2) {
    return numb1 + numb2
}
console.log(sum(2, 2))

const sum2 = function (numb1, numb2) {
    return numb1 + numb2
}
console.log(sum2(3, 3))

const sum3 = (numb1, numb2) => numb1 + numb2

console.log(sum3(4, 4))