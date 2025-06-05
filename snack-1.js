/*
Snack 1
Crea una funzione che somma due numeri:

Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. */


function somma(numb1, numb2) {
    console.log(numb1 + numb2)
}
somma(2, 2)


const somma2 = function (numb1, numb2) {
    return numb1 + numb2
}
console.log(somma2(3, 3))

const somma3 = (numb1, numb2) => {
    return numb1 + numb2
}

console.log(somma3(4, 4))