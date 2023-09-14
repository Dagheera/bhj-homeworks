const dropDownItem = document.getElementsByClassName('dropdown__item');
const dropDownList = document.getElementsByClassName('dropdown__list');
const dropDownValue = document.getElementsByClassName('dropdown__value');

// сначала развернуть весь список
for (let i = 0; i < dropDownValue.length; i++) {
    dropDownValue[i].onclick = function(){
        const list = this.closest('.dropdown').querySelector('.dropdown__list');
        if (list.className === "dropdown__list") {
            list.className = "dropdown__list dropdown__list_active";
        } else {
            list.className = "dropdown__list";
        }
    }
}

for (let i = 0; i < dropDownItem.length; i++) {
    dropDownItem[i].onclick = function() {
        const list = dropDownItem[i].closest("ul");
        const value = dropDownItem[i].closest(".dropdown").querySelector(".dropdown__value");

        list.className = "dropdown__list";
        value.textContent = dropDownItem[i].textContent;
        return false;
    }
    
}