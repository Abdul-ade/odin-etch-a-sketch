// let container = document.getElementById("container");
// let containerWidth = container.style.width = "600px";
// let containerHeight = container.style.height = "600px";
// let grid;
// grid = 10;
// let button = document.querySelector("button");
// button.addEventListener("click", function(){
//    let answer = prompt("How many grid squares do you want?");
//     grid = answer;
// });
// console.log(grid);
// let child;
// for(i = 0; i < grid**2; i++){
//     child = document.createElement("div");
//     child.className = "divs";
//     container.appendChild(child);
//     child.style.backgroundColor = "pink";
// }

// let divs = document.querySelectorAll(".divs");
// let div;
// for(i=0;i<divs.length;i++){
//     div = divs[i];
//     // console.log(div);
//     div.style.width = 600/grid + 'px';
//     div.style.height = 600/grid + 'px';
//     div.addEventListener("mouseover", function(){
//         this.style.backgroundColor = "blue";
//     });
//     div.addEventListener("mouseout", function(){
//         this.style.backgroundColor = "pink";
//     });
// }
// console.log(div.style.width);
// console.log(div.style.height);
// // console.log(child.style.width);
// // child.style.backgroundColor = 'yellow';
// // child.style.width = containerWidth/16;



let container = document.getElementById("container");

container.style.width = "600px";
container.style.height = "600px";

let grid = 16;
let button = document.querySelector("button");
let time = 5;

function createGrid() {
    container.innerHTML = "";

    for (let i = 0; i < grid ** 2; i++) {
        let child = document.createElement("div");

        child.className = "divs";
        child.style.backgroundColor = "rgb(255, 255, 255)";
        child.style.width = 600 / grid + "px";
        child.style.height = 600 / grid + "px";
        child.style.opacity = 1;

        // Store interaction count and timeout for each box
        child.interactions = 0;
        child.resetTimeout = null;

        container.appendChild(child);

        child.addEventListener("mouseover", function() {

            // Cancel any pending reset
            clearTimeout(this.resetTimeout);

            // Generate random RGB values
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);

            this.style.backgroundColor =
                `rgb(${red}, ${green}, ${blue})`;

            // Increase opacity by 10% per interaction
            this.interactions++;
            this.style.opacity = Math.min(this.interactions * 0.1, 1);
        });

        child.addEventListener("mouseout", function() {

            let div = this;

            this.resetTimeout = setTimeout(function() {
                div.style.backgroundColor = "rgb(255, 255, 255)";
            }, time * 1000);

        });
    }
}

createGrid();

button.addEventListener("click", function() {
    let answer = prompt("How many grid squares do you want? (1-100)");
    
    if (
        answer !== null &&
        answer.trim() !== "" &&
        Number.isInteger(Number(answer)) &&
        Number(answer) >= 1 &&
        Number(answer) <= 100
    ) {
        grid = Number(answer);
        // createGrid();
    } else if (answer !== null) {
        alert("Please enter a whole number between 1 and 100 else it goes back to default.");
    }

    let delay = prompt("How fast do you want the new colors to disappear? (1-60)");
    if (
        delay !== null &&
        delay.trim() !== "" &&
        Number.isInteger(Number(delay)) &&
        Number(delay) >= 1 &&
        Number(delay) <= 60
    ) {
        time = Number(delay);
        createGrid();
    } else if (answer !== null) {
        alert("Please enter a whole number between 1 and 60 else it goes back to default.");
    }
});
