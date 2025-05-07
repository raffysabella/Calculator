function addNum() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    let result = parseFloat(n1) + parseFloat(n2);

    document.getElementById("result").innerText = "Result: " + result;
}

function subNum() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    let result = parseFloat(n1) - parseFloat(n2);

    document.getElementById("result").innerText = "Result: " + result;
}

function mulNum() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    let result = parseFloat(n1) * parseFloat(n2);

    document.getElementById("result").innerText = "Result: " + result;
}

function divNum() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    let result = parseFloat(n1) / parseFloat(n2);

    document.getElementById("result").innerText = "Result: " + result;
}

function modNum() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    let result = parseFloat(n1) % parseFloat(n2);

    document.getElementById("result").innerText = "Result: " + result;
}

function clrCont() {
    var n1 = document.getElementById("num1").value = " ";
    var n2 = document.getElementById("num2").value = " ";
    document.getElementById("result").innerText = " ";
}