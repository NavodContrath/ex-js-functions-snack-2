/* 
 Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0,
con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer. */

setTimeout(() => {
    console.log("eighth snack")
    function countdown(numb) {
        const timer = setInterval(() => {
            console.log(numb)
            numb--
            if (numb === 0) {
                console.log("Time's up")
                clearInterval(timer)
            }

        }, 1000)
    }
    countdown(5)
}, 22000)
//usato un setTimeout per non far accavallare i log in console
