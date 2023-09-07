const timer = document.getElementById('timer');
const step = 100;
let count = timer.innerHTML;
const countDown = setInterval(function() {
    count--;
    timer.textContent = count;
    if (count === 0) {
        clearInterval(countDown);
        alert("Вы победили в конкурсе!");
    }
}, step);
