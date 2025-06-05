/* 
Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.*/

setTimeout(() => {
    console.log("fifth snack")

    function logEverySecond(ms) {
        let counter = 0
        const interval = setInterval(() => {
            console.log(`sono passati ${counter} secondi`)
            counter++
            if (counter > 5) {
                clearInterval(interval)
            }
        }, ms)


    }

    logEverySecond(1000)
}, 3000)

//usato un setTimeout per non far accavallare i log in console
