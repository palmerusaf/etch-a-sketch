// get container to hold div grid elements
const container = document.getElementById("container");

// place button before grid in its own container
function buildResetButton() {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");
  const resetButton = document.createElement("button");
  resetButton.classList.add("resetButton");
  buttonContainer.appendChild(resetButton);
  resetButton.textContent = "Reset Button";
  resetButton.addEventListener("click", resetGrid);

  // place reset button
  const containerParent = container.parentNode;
  containerParent.insertBefore(buttonContainer, container);
}

// reset the grid with a new one
function resetGrid() {
  removeGrid();
  buildGrid(getDIMForGrid());
}

// remove all elements in current grid
function removeGrid() {
  let elementNodeList = container.getElementsByClassName("gridElement");
  let elementArray = Array.from(elementNodeList);
  for (let i = 0; i < elementArray.length; i++) {
    container.removeChild(elementArray[i]);
  }
}

// ask user for dimensions for new grid
function getDIMForGrid() {
  let numElements = prompt("Enter a size for your new canvas.");
  // Catch input that's not an int < 100
  while (rejectInvalidInput(numElements))
    numElements = prompt(
      "Alert! You must enter a whole number no greater than 100."
    );
  return numElements;
}

// check for proper user input
function rejectInvalidInput(numElements) {
  return (
    !Number.isInteger(+numElements) ||
    numElements > 100 ||
    isNaN(numElements) ||
    numElements === "" ||
    numElements === null
  );
}

// build grid of divs default to 16x16
function buildGrid(numElements = 16) {
  for (let i = 0; i < numElements; i++) {
    for (let j = 0; j < numElements; j++) {
      const div = document.createElement("div");
      div.classList.add("gridElement");
      setElementSize(div, numElements);
      paintElementRandomColor(div);
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
function paintElementRandomColor(div) {
  div.addEventListener(
    "mouseover",
    () => (div.style.backgroundColor = randomColorGenerator()));
}

// generate random color
function randomColorGenerator() {
  randPercent = () => `${Math.floor(Math.random() * 101)}%`;
  return `rgb(${randPercent()},${randPercent()},${randPercent()})`;
}

buildResetButton();
buildGrid();
