
const gridElements =  [];
const totalGridDimension = 960;
const createGridButton = document.querySelector(".createGridButton");
const clearGridButton = document.querySelector(".clearGridButton");
const randomColorButton = document.querySelector(".randomColorsButton");
const bordersOffButton = document.querySelector(".borderSwitchButton");
const animateButton = document.querySelector(".animateButton")
let borderSwith = false;
let randomColor = false;
let animateSwitch = false;


animateButton.addEventListener("click", () => {
    animateSwitch = !animateSwitch;
    animate(50)
   
})

//clears borders
bordersOffButton.addEventListener("click", () =>{
    borderSwith = !borderSwith;  
    bordersOFF()
})

//clears the grid
 clearGridButton.addEventListener("click", ()=> {
    clearGrid()
});

//generates new grid when button clicked
createGridButton.addEventListener("click", ()=> {
    createNewGrid();
    createHover();
});

//activates randomly generated rgb value on hover.
randomColorButton.addEventListener("click", ()=>{
    randomColor = !randomColor;
    createHover()
})

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
    removeEventListeners();
    if (randomColor == false) {
    gridElements.forEach(element => {
    element.addEventListener("mouseover", applyBlack)
})}
    else {
    console.log("true")
    gridElements.forEach(element => {
    element.addEventListener("mouseover", applyColor)
    })
}}

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


const removeChilds = function () { // removes the child before creating a new grid
    const container =  document.querySelector(".grid")
    gridElements.forEach(element  => {
        container.removeChild(element)
    })
    gridElements.length = 0; // to reset the nodelist array, otherwise I get a conflict between DOM and this array which do not really understand. but it makes sense.

};

const removeEventListeners = () => {
    
    gridElements.forEach(element => {
        
        if (randomColor === false){
            element.removeEventListener("mouseover", applyColor)}
         else if (randomColor === true){      

            element.removeEventListener("mouseover", applyBlack)}
    });
};


function clearGrid () {
    console.log("click")
    gridElements.forEach(element => {
        element.style.backgroundColor = "ghostwhite";
    })
}


function bordersOFF () {
     
    if(borderSwith) {
      
    gridElements.forEach(element => {
        element.style.border = "none";
    })} else{
        gridElements.forEach(element => {
            element.style.border = "0.5px solid";
        })
         
    }
}
/*
function animationGrid (num) {
    
    for (let i = 0; i < num * num; i++) {
        const container =  document.querySelector(".grid")
        const gridElement = document.createElement("div");
        gridElements.push(gridElement)
        gridElement.classList.add("elementStyling");
        container.appendChild(gridElement);
        
    }; 
    calcElementDimension(num);

}*/


const animateColor = function () { 
     red =  Math.floor(Math.random() * 256 * 1.6);
     green = Math.floor(Math.random() * 256 * 1.6);
     blue = Math.floor(Math.random() * 256 * 1.6);
    
    gridElements.forEach(element => {
        element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    })
    };
        
 



function animate (num) {
    removeChilds()
    for(let i=0; i < num; i++) {
        
        setTimeout(() => {
            removeChilds()
            grid(i)
            animateColor()
        },  150 * i )
        
    }
    createHover()
    
}

function showInfo2 () {
const odinProjectCom = document.querySelector(".info2")
setTimeout( () =>{
    odinProjectCom.classList.remove("hide")
    odinProjectCom.classList.add("show")
}, 10000)
setTimeout( () =>{
    odinProjectCom.classList.remove("show")
    odinProjectCom.classList.add("hide")
}, 15000)
}

function showInfo (){
    const etchASketch = document.querySelector(".info")
setTimeout( () =>{
    etchASketch.classList.remove("hide")
    etchASketch.classList.add("show")
}, 50)
}


// animates the clickME button
let interval 
function clickMeAnimation () {
 interval = setInterval(()=> {
    red =  Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    animateButton.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
   }, 100)

}
// stops the animations and adds click more to button text.
animateButton.addEventListener("click", () =>{
    clearInterval(interval)
    animateButton.style.backgroundColor = "ghostwhite";
    animateButton.textContent = "click more"
})



clickMeAnimation() // starts the clickeme animation on the button
grid(25) //creates initial grid
createHover() // and hover
showInfo() // shows and animates the title ecth a sketch. should have called showTitle()
showInfo2() // shows and aniamtes "this is odinproject.com project"








