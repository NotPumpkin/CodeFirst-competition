/*jslint devel: true*/

// variables
var user;
var dist;
var type;
var calvalue;
var people;
var fuel;
var energy;
var litre;
var co2;
var price;



function processFormE() {
    "use strict";

    //Initializing variables
    dist = 0;
    calvalue = 0;
    people = 1;
    fuel = 0;
    litre = 0;
    co2 = 0;

    // Getting values from HTML form inputs
    user = document.formE.name.value;
    if (user === "") {
        user = "User";
        console.log("No user name");
    } 

    dist = Number(document.formE.dist.value);
    if (document.formE.dist.value === "" || isNaN(dist)) {
        alert("Please insert a valid distance.");
    }
    
    type = document.formE.type.value;
    if (type = "Petrol car"){
        calvalue = 10;
    } else {
        calvalue = 11;
    }
    
    fuel = Number(document.formE.fuel.value);
    if (document.formE.fuel.value === "" || isNaN(fuel)) {
        alert("Please insert a valid fuel economy.");
    }
    
    if (document.getElementById("notalone").checked === true) {
        people = Number(document.formE.qtt.value);
        if (document.formE.qtt.value === "" || isNaN(people)) {
            alert("Please insert a valid quantity.");
        }
    } else {
        people = 1;
    }
    
    //Calculating energy - roundtrip
    energy = 2 * dist * calvalue / (fuel * people);
    
    //Calculating litres of fuel per roundtrip
    litre = 2 * dist / fuel;
    
    //Calculating CO2 emited 
    if (type= "Petrol car"){
        co2 = litre * 2.19835; 
    } else {
        co2 = litre * 2.60016; 
    }
    
    price = 260 * 0.13 * energy;
    
    energy = energy.toFixed(2);
    co2 = co2.toFixed(2);
    price = price.toFixed(2);
    
    alert("Hi, " + user + "! In one roundtrip to work/study you are using " + energy + " kWh of energy. Plus, you are emitting " + co2 + " kgCO2e in each trip. If you were to pay for that, this amount of energy would cost you £" + price + " per year.")  
    
}



