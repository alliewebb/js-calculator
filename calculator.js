document.addEventListener('DOMContentLoaded', startCalc)

var entries = [];
var temp = '';

let display = document.getElementById("answer");


function startCalc () {
    document.addEventListener('click', getBtnValue);
}

function getBtnValue() {
    var clickedButton = event.target;
    var btnValue = clickedButton.value;
    var numberedBtn = Number(btnValue);
    if (numberedBtn != NaN || btnValue === ".") {
        temp += btnValue;
        display.value = temp;
    }
    if (btnValue === "AC") {
        location.reload();
    }
    if (btnValue === "CE") {
        temp = '';
        display.value = "";
    }
    if (btnValue === "=") {
        entries.push(temp);
        var nt = Number(entries[0]);
        for (var i = 1; i < entries.length; i++) {
            var nextNum = Number(entries[i+1]);
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
        }
            if (nt < 0) {
                nt = Math.abs(nt) + "-";
            }
            display.value = nt;
            entries = [];
            temp = '';
        }
        else {
            entries.push(temp);
            temp = '';
        }
    }

