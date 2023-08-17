const body = document.querySelector("body");
//const num = 10;

const darken = function (red, green, blue, num){
   if (num < 0) {return};
    
        red = red/2;
        green = green/2;
        blue = blue/2;
    
    return darken(red, green, blue, num - 1)
}

//const defineColor = function () {}


const applyColor = function (event) {
    if (event.altKey){return}

    const red =  Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256); 
    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    darken(red, green, blue, 10)
}

const createHover = function () {
   let gridElements =  document.querySelectorAll(".grid div");
   
    gridElements.forEach(element => {
        element.addEventListener("mouseover", applyColor);
});

}

const removeChilds = function () { // removes the child before creating a new grid
    const container =  document.querySelector(".grid")
    const gridElements =  document.querySelectorAll(".grid div")
    gridElements.forEach(element  => {
        container.removeChild(element)
    })
};
//calculates and sets the grid elements dimensions in a predefined, fixed sized, container
const calcElementDimension = function (num) {
    let gridElements = document.querySelectorAll(".grid div");
    let dimension = 960 / num;
    dimension = dimension.toString() + "px";
    gridElements.forEach(element  => {
        element.style.width = dimension;
        element.style.height = dimension;
    })
    };
// creates the grid
const grid = function (num){

    for (let i = 0; i < num * num; i++) {
        const container =  document.querySelector(".grid")
        const gridElement = document.createElement("div");
        
        gridElement.classList.add("elementStyling");
        container.appendChild(gridElement);
        
    }; 
    calcElementDimension(num);
};
// creates new grid when button clicked and input given
const createNewGrid = function() {
    let userInput = prompt("Enter a number between 1 and 100");  
    removeChilds();
    if (userInput < 0 || userInput > 100) {
        alert("Pleaser enter a number between 1 - 100")
        userInput = 10;
    } else{
       return grid(userInput)
    };  
};

//creates button
//const buttonContainer = document.querySelector(".buttonContainer")
const button = document.createElement("button");
button.classList.add("button");
button.textContent = "createGrid";
body.appendChild(button);

//generates new grid when button clicked
button.addEventListener("click", ()=> {
    createNewGrid();
    createHover();
});








