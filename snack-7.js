/* 
Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.
Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop. */

setTimeout(() => {
    console.log("seventh snack")

    function executeAndEnd(message, startTimer, stopTimer) {
        let timeCounter = 0
        const timer = setInterval(() => {
            console.log(`${message} ${startTimer} ms`)
            timeCounter += startTimer
            if (timeCounter >= stopTimer) {
                clearInterval(timer)
                console.log("End")
            }

        }, startTimer)
    }
    executeAndEnd("I log every", 1000, 5000)

}, 16000)