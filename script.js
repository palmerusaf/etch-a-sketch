// build grid of divs default to 16x16
function buildGrid(numElements = 16) {
  let elementWidth = 100 / numElements;
  let elementHeight = elementWidth;
  const container = document.getElementById("container");
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
      div.style.width = `${elementWidth}vw`;
      div.style.height = `${elementHeight}vw`;
      // FOR TESTING
      div.textContent = `${++testNum}`;
      // FOR TESTING
      container.append(div);
    }
  }
}

// For use to make prompt while conditional more readable
function isNotInteger(input) {
  return isNaN(input) ? true : !Number.isInteger(input);
}
buildGrid();
