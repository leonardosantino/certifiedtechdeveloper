let body = document.querySelector("body");
let checkBox = document.getElementById("SwitchCheck");

let change = () => {
    if (checkBox.checked){return body.style.backgroundColor = "#000000";}
    else {return body.style.backgroundColor = "#dbdbdb"}
}
