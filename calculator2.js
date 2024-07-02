const display = document.querySelector(".display");
const button = document.querySelectorAll("button");
const specialchars = ["*", "/", "-", "+", "="];
let output ="";

const calculate = (btnValue) => {
    if (btnValue === "AC") {
        output = "";
    }
    else if (btnValue === "del") {
        output = output.toString().slice(0,-1);
    }
    else{
        if (output === "" && specialchars.includes(btnValue))return;
        output +=btnValue;
    }
    display.value = output;


}

button.forEach((button) => {
    button.addEventListener("click", (e) => (e.target.dataset.value))
})