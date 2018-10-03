var btn = Array.from(document.getElementsByTagName("button"));
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
    var val = btn[i].value;
    if (val != NaN || val === ".") {
        temp += val;
        document.getElementById("answer").value = temp;
    }
    else if (val === "AC") {
        entries = [];
        total = 0;
        temp = '';
        val = '';
        document.getElementById("answer").value = "";
    }
    else if (val === "CE") {
        temp = '';
        document.getElementById("answer").value = "";
    }
    else if (val === "X") {
        entries.push(temp);
        entries.push("*");
        temp = '';
    } 
    else if (val === "÷") {
        entries.push(temp);
        entries.push("/");
        temp = '';
    }
    else if (val === "=") {
        entries.push(temp);
        var nt = entries.map(Number);
        for (var i = 1; i < entries.length; i++) {
            var nextNum = entries[i+1](Number);
            var symbol = entries[i];
            if (symbol === "+") {
                nt += nextNum;
            }
            else if (symbol === "-") {
                nt -= nextNum;
            }
            else if (symbol === "*") {
                nt *= nextNum;
            }
            else if (symbol === "/") {
                nt /= nextNum;
            }
            i++
        }
        if (nt < 0) {
            return Math.abs(nt) + "-";
        }
        document.getElementById("answer").value = nt;
        entries = [];
        temp = '';
    }
    else {
        entries.push(temp);
        entries.push(val);
        temp = '';
    }
})