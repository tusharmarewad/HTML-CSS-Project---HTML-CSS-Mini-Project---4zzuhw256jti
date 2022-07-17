
var seconds = 0;
var tens = 0;

var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");

var Interval;

buttonStart.onclick = function () {
    clearInterval(Interval);

    Interval = setInterval(timerEngine, 10);
}

buttonStop.onclick = function () {

    clearInterval(Interval);
}



buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
}


function timerEngine() {
    tens++;

    if (tens <= 9) {

        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "00";
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}
