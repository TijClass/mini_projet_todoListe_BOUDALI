var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

// ======to ad the icon remove====//

var deletButt = document.querySelectorAll(".div");
var i;
for (i = 0; i < deletButt.length; i++) {

var createClose = document.createElement("i");
createClose.setAttribute("class", "fas fa-window-close");
deletButt[i].append(createClose);
}


// this function is for length

function inputLength(inp) { 
    return inp.value.length;}

// ____this fuction is for adding elements___//

function addElements (item) {
var liwrapper = document.createElement('div');
liwrapper.classList.add("li-wrapper");

var lis = document.createElement('li');
lis.innerText = item;
var smallDiv = document.createElement('div');
smallDiv.classList.add("div");
var createClose = document.createElement("i");
createClose.setAttribute("class", "fas fa-window-close");
smallDiv.append(createClose);
liwrapper.append(lis);
liwrapper.append(smallDiv);
ul.append(liwrapper);
createClose.addEventListener('click',removeItem);
input.value = ""; // this for evacute input.
}

button.addEventListener('click', (e)=>{
    e.preventDefault();

    if(inputLength(input) > 0){
        addElements (input.value);
    }
});

input.addEventListener('keypress',(e)=>{
    if (e.keyCode == 13) {  addElements (input.value);} }
);


function removeItem(e){
    const item = e.target;
    item.parentElement.parentElement.remove();
};

const closes = document.getElementsByTagName("i");

for (const close of closes) {
    close.addEventListener('click',removeItem);
}



