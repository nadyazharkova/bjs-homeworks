let timer;
let x = 5;
countdown();
function countdown(){
    document.getElementById('timer').innerHTML = x;
    x = x - 1; 
    if (x < 0){
        alert ("Вы победили в конкурсе!");
        clearTimeout(timer);
    }
    else {
        timer = setTimeout(countdown, 1000); 
    }
}