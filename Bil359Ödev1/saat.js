function saat() {
    var sure = new Date;
    document.getElementById('saat').innerHTML = say(sure.getHours()) + ":"
        + say(sure.getMinutes()) + ":"
        + say(sure.getSeconds());
    setInterval(saat, 1000);       
}
function say(x) {
    if (x < 10 ) {
        x = "0" + x;
    }
    return x;
}
saat();