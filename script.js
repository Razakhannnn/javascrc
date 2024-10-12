let age = prompt("enter yoyr age");
    
    if (age >= 18) {
        console.log("You are an adult.");
    } else if (age > 13 && age < 18) {
        console.log("You are a teenager.");
    } else {
        console.log("You are a child.");
    }

    let weather = prompt("Enter The Weather Condition (Sunny,Rainy,Snowy)")
    if (weather === "sunny") {
        console.log("Wear sunglasses");
    } else if (weather === "rainy") {
        console.log("Take an umbrella");
    } else if (weather === "Snowy") {
        console.log("Wear warm clothes.");
    } else {
        console.log("enjoy your day");
    }

    let marks = prompt("Enter The Marks You Obtained")
    if (marks >= 90 && marks <= 99) {
        console.log("A+");
    } else if (marks >= 80 && marks <= 89) {
        console.log("A");
    } else if (marks >= 70 && marks <= 79) {
        console.log("B");
    } else if (marks >= 60 && marks <= 69) {
        console.log("C");
    } else {
        console.log("F");
    }
    let username = prompt("Enter the Username ", "raza");
    let password = prompt("Enter password");
    if (username === "raza" && password === "1234") {
        console.log("Correct password");
    } else {
        console.log("Wrong password");
    }
    let num = prompt("Enter the nunmber")
    if (num >= 1 && num <= 10) {
        console.log("The number is between 1 and 10.");
    } else if (num >= 11 && num <= 20) {
        console.log("The number is between 11 and 20");
    } else if (num >= 21 && num <= 30) {
        console.log("The number is between 21 and 30.");
    } else if (num >= 31 && num <= 40) {
        console.log("The number is between 31 and 40.");
    } else {
        console.log("The number is out of range");
    }