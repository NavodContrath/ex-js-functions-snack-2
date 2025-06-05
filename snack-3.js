/* 
Snack 3
Crea una funzione eseguiOperazione:
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
La funzione deve eseguire l'operazione fornita sui due numeri. */

console.log("third snack")

const sum4 = (numb1, numb2) => numb1 + numb2
const multiply = (numb1, numb2) => numb1 * numb2
const executeOperation = (numb1, numb2, operation) => operation(numb1, numb2)

console.log(executeOperation(2, 3, sum4))
console.log(executeOperation(2, 3, multiply))
