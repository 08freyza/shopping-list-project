var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function dynamicClass() {
    var row = document.querySelectorAll(".row");
    var delRow = document.querySelectorAll("#delete");
    for (var i = 0; i < row.length; i++) {
        if (row[i].classList[1] != undefined) {
            row[i].classList.remove(row[i].classList[1]);
            delRow[i].classList.remove(delRow[i].classList[0]);
        }
        row[i].classList.add(i.toString());
        delRow[i].classList.add(i.toString());
    }
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var divRow = document.createElement("div");
    var buttonDel = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    buttonDel.appendChild(document.createTextNode("X"));
    divRow.classList.add("row");
    buttonDel.setAttribute("id", "delete");
    divRow.appendChild(li);
    divRow.appendChild(buttonDel);
    ul.appendChild(divRow);
    input.value = "";
    dynamicClass();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

var toggleClassDone = (e) => {
    var myLi = document.querySelectorAll("li");
    for (var i = 0; i < myLi.length; i++) {
        if (e.target.tagName.toLowerCase() == "li" && e.target.innerText == myLi[i].innerText) {
            myLi[i].classList.toggle("done");
        }
    }
};

var removeListElement = (e) => {
    var myLi = document.querySelectorAll("li");
    var divRow = document.querySelectorAll(".row");
    for (var i = 0; i < myLi.length; i++) {
        if (e.target.tagName.toLowerCase() == "button" && e.target.id == "delete" && e.target.className == i.toString()) {
            divRow[i].remove();
        }
        dynamicClass();
    }
};

dynamicClass();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

document.addEventListener("click", toggleClassDone);

document.addEventListener("click", removeListElement);
