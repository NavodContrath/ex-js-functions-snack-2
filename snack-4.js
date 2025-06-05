/* 
Snack 4
Crea un generatore di funzioni creaTimer:
Scrivi una funzione creaTimer che accetta un tempo (in ms) e 
restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
 */
console.log("fourth snack")

function createTimer(before, ms, after) {
    before()
    return setTimeout(() => {
        console.log("time's up ")
        after()
    }, ms)

}
createTimer(
    () => { console.log("Start!") },
    2000,
    () => { console.log("End!") }
)
