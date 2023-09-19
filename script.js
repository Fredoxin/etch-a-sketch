const gridElements =  [];
const totalGridDimension = 960;
const gridContainer = document.querySelector(".gridContainer")
const createGridButton = document.querySelector(".createGridButton");
const clearGridButton = document.querySelector(".clearGridButton");
const randomColorButton = document.querySelector(".randomColorsButton");
const bordersButton = document.querySelector(".borderSwitchButton");
const animateButton = document.querySelector(".animateButton")
let borderSwitchOn = true;
let randomColor = false;
let animateSwitch = false;
let drawing = false;


animateButton.addEventListener("click", () => {
    animateSwitch = !animateSwitch;
    animate(30)
   
})

//clears borders on click or activates them if they are off.
bordersButton.addEventListener("click", () =>{
    borderSwitchOn = !borderSwitchOn;  
    bordersOffOn()
})

//clears the grid
 clearGridButton.addEventListener("click", ()=> {
    clearGrid()
});

//generates new grid when button clicked
createGridButton.addEventListener("click", ()=> {
    createNewGrid();
   // createHover();
});

//activates randomly generated rgb values on hover.
randomColorButton.addEventListener("click", ()=>{
    randomColor = !randomColor;
    if(!randomColor){
        randomColorButton.style.backgroundColor = "ghostwhite"} // shows that the button is unclicked   
    else {
        randomColorButton.style.backgroundColor = "rgba(0,0,0, 0.6)"} // shows button is clicked. 
   //createHover()
})


gridContainer.addEventListener("mousedown", function() {
    drawing = true;
});

gridContainer.addEventListener("mouseup", function() {
    drawing = false;
});

gridContainer.addEventListener("mousemove", function(e) {
    if(drawing && !randomColor){
        applyBlack(e)
    }
    else if(drawing && randomColor){
        console.log(e)
        applyColor(e)
    }
});

function applyBlack(e) {  //Event handler
    if (e.altKey){return}
    else{e.target.style.backgroundColor = "black"};
}

function applyColor(e) { // event handler
    if (e.altKey){return}
    else {
        const red =  Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
 
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}}




//calculates and sets the grid elements dimensions in a predefined, fixed sized, container
function calcElementDimension(num) {

    let dimension = totalGridDimension / num;
    dimension = dimension.toString() + "px";
    gridElements.forEach(element  => {
        element.style.width = dimension;
        element.style.height = dimension;
    })
    };    

// creates the grid
function grid(num){

    for (let i = 0; i < num * num; i++) {

        const gridElement = document.createElement("div");
        gridElements.push(gridElement)
        gridElement.classList.add("elementStyling");
        gridContainer.appendChild(gridElement);
        
    }; 
    calcElementDimension(num);
};


// creates new grid when button clicked and input given
function createNewGrid() {
    let userInput = prompt("Enter a number between 1 and 100");  
    removeChilds();
    if (userInput < 0 || userInput > 100) {
        alert("Pleaser enter a number between 1 - 100");
        grid(25);
    } else{
       return grid(userInput)
    };  
};
////////////////////////////////////////////////////
function removeChilds() { // removes the child before creating a new grid
    
    gridElements.forEach(element  => {
        gridContainer.removeChild(element)
    })
    gridElements.length = 0; // to reset the nodelist array
};

////////////////////////////////////////////////////
function clearGrid() { // clears the grid // invoked in clear grid button event listener
   
    gridElements.forEach(element => {
        element.style.backgroundColor = "ghostwhite";
    })
}

////////////////////////////////////////////////////
function bordersOffOn() { // sets the borders OFF or ON
     
    if(!borderSwitchOn) {
     
    gridElements.forEach(element => {
        element.style.border = "none";
        bordersButton.textContent = "bordersOFF";
    })} else{

        gridElements.forEach(element => {
            element.style.border = "0.5px solid";
            bordersButton.textContent = "bordersON"

        })    
    }
}

// creates random colors for the animation
function animateColor() { 
     red =  Math.floor(Math.random() * 256 * 1.6);
     green = Math.floor(Math.random() * 256 * 1.6);
     blue = Math.floor(Math.random() * 256 * 1.6);
    
    gridElements.forEach(element => {
        element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    })
    };
        
 


// creates a crazy animation
function animate(num) {
    removeChilds()
    for(let i=0; i < num; i++) {    
        setTimeout(() => {
            removeChilds()
            grid(i)
            animateColor()
        },  150 * i )     
    }
    createHover();  
};

function showInfo2 () {
const odinProjectCom = document.querySelector(".info")
setTimeout( () =>{
    odinProjectCom.classList.remove("hide")
    odinProjectCom.classList.add("show")
}, 5000)
setTimeout( () =>{
    odinProjectCom.classList.remove("show")
    odinProjectCom.classList.add("hide")
}, 10000)
};

function showTitle (){
    const etchASketch = document.querySelector(".title")
setTimeout( () =>{
    etchASketch.classList.remove("hide")
    etchASketch.classList.add("show")
}, 50)
};


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
//createHover() // and hover
showTitle() // shows and animates the title ecth a sketch. should have called showTitle()
showInfo2() // shows and aniamtes "this is odinproject.com project" 








