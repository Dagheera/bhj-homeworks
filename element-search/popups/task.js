const modalMain = document.getElementById("modal_main");
const modalClose = Array.from(document.getElementsByClassName("modal__close"));
const showSuccess = Array.from(document.getElementsByClassName("show-success"));
const modalSuccess = document.getElementById("modal_success");

modalMain.className = "modal modal_active";

if (modalClose) {
    for(let element of modalClose) {
        element.onclick = function() {
            modalMain.classList.remove("modal_active");
            modalSuccess.classList.remove("modal_active");
        }; 
    }
    
}

if (showSuccess) {
    for(let element of showSuccess) {
        element.onclick = function() {
            modalMain.classList.remove("modal_active");
            modalSuccess.classList.add("modal_active");
        }; 
    }
}