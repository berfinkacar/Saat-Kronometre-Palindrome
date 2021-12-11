
    function palindrome() {
            var a = document.getElementById("pa").value;
    var b = "";
            for (i = a.length - 1; i >= 0; i--) {
        bb = b + a[i]
    }
    if (a == b)
    document.getElementById("pa2").value = b + " Palindrome...";
    else
    document.getElementById("pa2").value = b + " Palindrome degil..!";
        }
