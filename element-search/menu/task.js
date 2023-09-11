const menuElements = document.querySelectorAll('menu__link');
const parentMenu = li.closest('menu menu_sub menu_active');

function clearActive() {
    arrayActive = Array.from(parentMenu);
    if (arrayActive.length === 1) {
        for (let i = 0; i < arrayActive.length; i++) {
            arrayActive[i].className = "menu menu_sub";
        }
    }
}

for (let element of menuElements) {
    element.onclick = function() {
        if (!parentMenu) { 
            return
        }
    }
}   

if (parentMenu.className === "menu menu_sub") {
    clearActive();
    parentMenu.className = "menu menu_sub menu_active";
    return false;
} else {
    parentMenu.className = "menu menu_sub";
    return false;
}

































