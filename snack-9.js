/* 
Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo. */

const sum5 = (numb1, numb2) => numb1 + numb2
const minus = (numb1, numb2) => numb1 - numb2
const multiply1 = (numb1, numb2) => numb1 * numb2
const operationsArray = [sum5, minus, multiply1]

setTimeout(() => {
    console.log("ninth snack")
    //setInterval version
    function operationSequence(array, ms) {
        let i = 0
        const interval = setInterval(() => {
            console.log(array[i](5, 5))
            i++
            if (i >= array.length) {
                clearInterval(interval)

            }
        }, ms)
    }
    //setTimeout version
    function operationSequence(array, ms, i = 0) {
        if (i >= array.length) return;
        console.log(array[i](5, 5));
        setTimeout(() => operationSequence(array, ms, i + 1), ms);
    }

    operationSequence(operationsArray, 1000)

}, 28000)
//usato un setTimeout per non far accavallare i log in console

