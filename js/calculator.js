/*
function calculate(op) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
        if(op=="add"){
        var result=num1+num2;   
        }
        else if(op=="sub"){
        var result=num1-num2;
        }
        else if(op=="mul"){
        var result=num1*num2;
        }
        else if(op=="div"){
        var result=num1/num2;
        }
        else if(op=="mod"){
        var result=num1%num2;
        }
        else if(op=="pow"){
        var result=Math.pow(num1, num2);
        }
    document.getElementById("calculation_result").innerHTML=result;
}
*/

var d = new Date();
var hour = d.getHours();
var day = d.getDay();
var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";

function getDayName(day)    
    {
        return weekday[day];
    }

var day_of_week=getDayName(day);

function greetMe() {
            // Instantitate an object (declare a variable) of the Date() Class
    // declare a varaible that allows us access to user's date-time
    
    greeting=""; //set based on time of day.
    if(hour<12 && day_of_week=="Friday"){
            greeting = "Good Morning, ";
        }
    else if(hour<18 && day_of_week=="Friday"){
            greeting = "Get Ready for the weekend. Good Afternoon, ";
        }
    else if(hour>=18 && day_of_week=="Friday"){
            greeting = "Get Ready for the Weekend. Good Evening, ";
        }

       var firstName = document.getElementById("firstName").value;
       var lastName = document.getElementById("lastName").value; document.getElementById("greeting").innerHTML = greeting+firstName+" "+ lastName+".";
}


function fruitLoop(){
// arrays are variables that hold more than one value at a time
    var fruitArr = ["Apple", "Banana", "Cherry", "Kiwi", "Lime", "Plum"];
    alert(fruitArr);
}

fruitLoop();