document.addEventListener('DOMContentLoaded', startCalc)

var entries = [];
var temp = '';
var total = 0;

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
    else if (btnValue === "AC") {
        location.reload();
    }
    else if (btnValue === "CE") {
        temp = '';
        display.value = "";
    }
    else if (btnValue === "X") {
        entries.push(temp);
        entries.push("*");
        temp = '';
    } 
    else if (btnValue === "÷") {
        entries.push(temp);
        entries.push("/");
        temp = '';
    }
    else if (btnValue === "=") {
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
            display.value = nt;
            entries = [];
            temp = '';
        }
        else {
            entries.push(temp);
            entries.push(val);
            temp = '';
        }
    }

