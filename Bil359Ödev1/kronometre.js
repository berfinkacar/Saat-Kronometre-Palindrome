const zamanOlc = document.getElementById('stopwatch');

var saat= 0;
var dakika = 0;
var saniye = 0;
var durdurr = true;

function basla() {
    if (durdurr == true) {
        durdurr = false;
        sure();
    }
}
function durdur() {
    if (durdurr == false) {
        durdurr = true;
    }
}

function sure() {
    if (durdurr == false) {
        saniye= parseInt(saniye);
        dakika = parseInt(dakika);
        saat = parseInt(saat);

        saniye = saniye + 1;

        if (saniye == 60) {
            dakika = dakika + 1;
            saniye= 0;
        }
        if (dakika == 60) {
            saat= saat + 1;
            dakika = 0;
            saniye = 0;
        }

        if (saniye < 10 || saniye == 0) {
            saniye = '0' + saniye;
        }
        if (dakika < 10 || dakika == 0) {
            dakika = '0' + dakika;
        }
        if (saat < 10 || saat == 0) {
            saat= '0' + saat;
        }

        zamanOlc.innerHTML = saat + ':' + dakika + ':' + saniye;

        setTimeout("sure()", 1000);
    }
}

function sifirla() {
    zamanOlc.innerHTML = "00:00:00";
    durdurr = true;
    saat = 0;
    saniye = 0;
    dakika = 0;
}
