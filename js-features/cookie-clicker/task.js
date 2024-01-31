const cookie = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let count = 0;


cookie.onclick = function() {

    count = count + 1;
    counter.innerHTML = count;

    if (cookie.width == 200) {
        decrease();
    } else { increase() }

}


function increase() {
    cookie.width = 200;
}

function decrease() {
    cookie.width = 190;
}