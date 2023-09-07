const cookie = document.getElementById("cookie");
const counterId = document.getElementById("clicker__counter");
let countClicked = 0;
let prevWidth = 200;
let prevHeight = 200;

function changeSize() {
    if (cookie.width == 100 && cookie.height == 100) {
        cookie.width = prevWidth;
        cookie.height = prevHeight;
    } else {
        cookie.width = 100;
        cookie.height = 100;
    };
    countClicked++;
    counterId.textContent = countClicked;
};

cookie.onclick = changeSize;