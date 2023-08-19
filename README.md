README

This is a TheOdinProject.com project. The Goal is, to create button which creates a grid in a fixed space, based on a user Input between 1-100. The grid has always the same size. Only the elment size changes.
On mouse hover it does draw a line within the grid.
The Maximum amount of grid elements is 100x100.
Atm the hover effect applies a random rgb color value to each element.


Still trying to figure out a darkening effect which darkens the element on every interaction.



remember arrow function and function expression behave differently with events.

like this:  The function runs on click.

 clearGridButton.addEventListener("click", ()=> {
    clearGrid()
});

If you use a function expression or decleration you first have to invoke the function to attach the listener.
