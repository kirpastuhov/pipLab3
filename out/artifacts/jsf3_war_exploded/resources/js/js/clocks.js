$('document').ready(function () {
   startClock();
});

function startClock() {
    updateClock();
    setInterval(updateClock, 13000);
}

function updateClock() {
    var clock = document.getElementById('clock');

    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    clock.children[0].innerHTML = hours;

    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    clock.children[1].innerHTML = minutes;

    var seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    clock.children[2].innerHTML = seconds;
}