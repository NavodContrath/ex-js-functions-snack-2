/* 
Snack 6
Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione,
che avvia un setInterval, incrementando un contatore e stampandolo. */

setTimeout(() => {
    console.log("sixth snack")

    function createAutoCounter(ms) {
        let counter = 0
        return () => {
            const interval = setInterval(() => {
                counter++
                console.log(counter)
                if (counter >= 5) {
                    clearInterval(interval)
                }
            }, ms)
        }

    }
    const startCounter = createAutoCounter(1000)
    startCounter()
}, 10000)
//usato un setTimeout per non far accavallare i log in console


