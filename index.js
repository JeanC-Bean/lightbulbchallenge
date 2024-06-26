function thelightfunction() {
    var lightbulb = document.getElementById("lightbulb");
    var body = document.body;
    var h1 = document.querySelector("h1");
    var h3 = document.querySelector("h3");
    var p = document.querySelector("p");
 
 
    if (lightbulb.src.includes("e0fd25f9127a9a109a0648c83ee61643")) {
        lightbulb.src = 'https://content.instructables.com/FXZ/9AHQ/IUSLY7Q0/FXZ9AHQIUSLY7Q0.jpg?auto=webp';
        body.style.backgroundColor = 'white';
        h1.style.backgroundColor = 'yellow';
        h3.style.backgroundColor = 'yellow';
        h1.style.color = 'white';
        h3.style.color = 'white';
        p.style.color = 'black';
    } else {
        lightbulb.src = 'https://as1.ftcdn.net/v2/jpg/02/18/07/04/1000_F_218070458_l4ALZHXQrETjkvx4zlirMNs4Gbr9gTOH.jpg'; // Off state
        body.style.backgroundColor = 'black';
        h1.style.backgroundColor = 'yellow';
        h3.style.backgroundColor = 'yellow';
        h1.style.color = 'white';
        h3.style.color = 'white';
        p.style.color = 'white';
    }
 } 
 