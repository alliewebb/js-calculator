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
        if (btnValue != NaN || btnValue === ".") {
            temp += btnValue;
            display.value = temp;
        }
}

