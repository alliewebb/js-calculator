document.addEventListener('DOMContentLoaded', startCalc)

var entries = [];
var temp = '';
var total = 0;

function startCalc () {
    document.addEventListener('click', valueToTemp)
}

let numberBtns = document.querySelectorAll('.button');
numberBtns.forEach(btn =>
    btn.addEventListener('click', valueToTemp));


function valueToTemp() {
        temp += NumberBtns.value;
        document.getElementById("answer").value = temp;
}
