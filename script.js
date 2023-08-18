const gridElements =  [];
const totalGridDimension = 960;
let randomColor = false;
const createGridButton = document.querySelector(".createGridButton");
const clearGridButton = document.querySelector(".clearGridButton");
const randomColorButton = document.querySelector(".randomColorsButton");


//clears the grid
 clearGridButton.addEventListener("click", ()=> {
    clearGrid()
});

//generates new grid when button clicked
createGridButton.addEventListener("click", ()=> {
    createNewGrid();
    createHover();
});


randomColorButton.addEventListener("click", ()=>{
    randomColor = !randomColor;
    createHover()})

    

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
// generate hover event listener. also removes eventlisteners before adding them
const createHover = function () {
    console.log("createhover-run")
    console.log(gridElements)
   removeEventListeners();
   if (randomColor == false) {
    console.log("false")
    gridElements.forEach(element => {
    element.addEventListener("mouseover", applyBlack)
})} else {
    console.log("true")
    gridElements.forEach(element => {
    element.addEventListener("mouseover", applyColor)
    })
}

}

const removeChilds = function () { // removes the child before creating a new grid
    const container =  document.querySelector(".grid")
    
    //let gridElements =  document.querySelectorAll(".grid div")
    gridElements.forEach(element  => {
        container.removeChild(element)
    })
    gridElements.length = 0; // to reset the nodelist array, otherwise I get a conflict between DOM and this array which do not really understand. but it makes sense.

};

//calculates and sets the grid elements dimensions in a predefined, fixed sized, container
const calcElementDimension = function (num) {
   
    
    let dimension = totalGridDimension / num;
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
        gridElements.push(gridElement)
        gridElement.classList.add("elementStyling");
        container.appendChild(gridElement);
        
    }; 
    calcElementDimension(num);
};
//createNewGrid(10) // calls a initial grid




const removeEventListeners = () => {
    console.log("remove")
    gridElements.forEach(element => {
        
        if (randomColor === false){
            console.log("colorfalse")
            element.removeEventListener("mouseover", applyColor)}
         else if (randomColor === true){      
            console.log("colortrue")
        element.removeEventListener("mouseover", applyBlack)}
    });
};





const applyBlack = (event) => {  //Event handler
    if (event.altKey){return}
    
    else{event.target.style.backgroundColor = "black"};
}

const applyColor = function (event) { // event handler
    if (event.altKey){return}
    else {
    const red =  Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256); 
    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}}



function clearGrid () {
    console.log("click")
    gridElements.forEach(element => {
        element.style.backgroundColor = "white";
    })
}













