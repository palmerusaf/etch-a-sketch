// get container to hold div elements
const container = document.getElementById("container");

// place button before grid in its own container
function resetButton() {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    const resetButton = document.createElement("button");
    resetButton.classList.add("resetButton");
    buttonContainer.appendChild(resetButton);
    resetButton.textContent = "Reset Button";
    resetButton.addEventListener('click', resetEvent);

    // place reset button
    const containerParent = container.parentNode;
    containerParent.insertBefore(buttonContainer, container);
}

// complete all reset actions
function resetEvent() {
    resetGrid();
    buildGrid(promptForNewGrid());
}

// reset grid, used by resetButton()
function resetGrid() {
    let elementNodeList = container.getElementsByClassName("gridElement");
    let elementArray = Array.from(elementNodeList);
    for (let i = 0; i < elementArray.length; i++) {
        container.removeChild(elementArray[i]);
    }
}

// ask user for dimensions for next grid
function promptForNewGrid() {
    let numElements = prompt("Enter a size for your new canvas.");
    // Catch input that's not an int < 100
    while (!Number.isInteger(+numElements) || numElements > 100 || isNaN(numElements))
        numElements = prompt(
            "Alert! You must enter a whole number no greater than 100."
        );
    return numElements;
}

// build grid of divs default to 16x16
function buildGrid(numElements = 16) {
    for (let i = 0; i < numElements; i++) {
        // FOR TESTING
        let testNum = 0;
        // FOR TESTING
        for (let j = 0; j < numElements; j++) {
            const div = document.createElement("div");
            div.classList.add("gridElement");
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
    div.addEventListener('mouseover', () => div.style.backgroundColor = "red", { once: true })
}

resetButton();
buildGrid();
