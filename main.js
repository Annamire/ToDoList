// Create a "close" button and append it to each list item
let nodeList = document.getElementsByTagName('li');
for (let i = 0; i < nodeList.length; i++) {
    let span = document.createElement('span');
    let txt = document.createTextNode("\u2573");
    span.className = 'close';
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let itemLi = this.parentElement;
        itemLi.style.display = 'none';
    }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
}
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('inputTodo').value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert('You mast write to-do!');
    } else {
        document.getElementById('todos__list').appendChild(li);
    } 
    document.getElementById('inputTodo').value = '';

    let span = document.createElement('span');
    let txt = document.createTextNode("\u2573");
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        let itemLi = this.parentElement;
        itemLi.style.display = "none";
        }
    }
}

//create an event for input when clicked Enter
(function() {
    document.querySelector('input').addEventListener('keypress', function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            newElement()
    }
    });
})();

