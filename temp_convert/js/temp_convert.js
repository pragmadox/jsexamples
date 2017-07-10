
function convertTemp(t) {
    var input = document.getElementById("temp2convert").value;
    input = parseFloat(input);
    if (t == "f2c") {
        var result = (input - 32) * 5 / 9;
        input = input.toFixed(4);
        document.getElementById("button1").innerHTML = input;
        result = result.toFixed(4);
        document.getElementById("button2").innerHTML = result;
        document.getElementById("standard1").innerHTML = "Fahrenheit";
        document.getElementById("standard2").innerHTML = "Celsius";
    } else if (t == "c2f") {
        var result = (input * (9 / 5)) + 32;
        input = input.toFixed(4);
        document.getElementById("button1").innerHTML = input;
        result = result.toFixed(4);
        document.getElementById("button2").innerHTML = result;
        document.getElementById("standard1").innerHTML = "Celsius";
        document.getElementById("standard2").innerHTML = "Fahrenheit";
    }
    
}