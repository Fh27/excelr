let interval;
let timer = document.getElementById('timer');
let minutes = 25;
let seconds = 0;

function startTimer() {
    interval = setInterval(function() {
        seconds--;
        if (seconds < 0) {
            if (minutes == 0) {
                clearInterval(interval);
                alert('Timer completed');
            } else {
                minutes--;
                seconds = 59;
            }
        }
        timer.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    minutes = 25;
    seconds = 0;
    timer.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}