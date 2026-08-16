let counternumber = document.getElementById("count");


let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let decrease = document.getElementById("decrease");

increase.addEventListener("click", function(){
    changedcounternumber = Number(counternumber.innerText) + 1;
    counternumber.innerText = changedcounternumber;
});

reset.addEventListener("click", function(){
    counternumber.innerText = 0;
});

decrease.addEventListener("click", function(){


    if (0 === Number(counternumber.innerText)) {
        alert("sorry counter reached 0 pls increase the number");
    } else {
        countertext = Number(counternumber.innerText);
        counternumber.innerText = countertext - 1;
    };
        

    
});