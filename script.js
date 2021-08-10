// get container to hold div elements
const container = document.getElementById("container");

// reset grid when pressed
function resetButton() {
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Button"
const containerParent = container.parentNode;
containerParent.insertBefore(resetButton, container);
}

// ask user for diminsions for next grid
function promptForNewGrid(){

}

// build grid of divs default to 16x16
function buildGrid(numElements = 16) {
    // Catch input that's not an int < 101
    while (numElements > 101 || isNotInteger(numElements))
        numElements = prompt(
            "Alert! You must enter a whole number no greater than 100."
        );
    for (let i = 0; i < numElements; i++) {
        // FOR TESTING
        let testNum = 0;
        // FOR TESTING
        for (let j = 0; j < numElements; j++) {
            const div = document.createElement("div");
            div.classList.add("grid-element");
            setElementSize(div, numElements);
            paintElementOnHover(div);
            // FOR TESTING
            div.textContent = `${++testNum}`;
            // FOR TESTING
            container.append(div);
        }
    }
}

// set size of div elements based on amount and view width
function setElementSize(div, numElements) {
    let elementWidth = 100 / numElements;
    let elementHeight = elementWidth;
    div.style.width = `${elementWidth}vw`;
    div.style.height = `${elementHeight}vw`;

}

// paint each element when hovered over
function paintElementOnHover(div) {
        div.addEventListener('mouseover', () => div.style.backgroundColor = "red",{once: true})
}

// For use to make prompt while conditional more readable
function isNotInteger(input) {
    return isNaN(input) ? true : !Number.isInteger(input);
}
resetButton();
buildGrid();
