// build grid of divs default to 16x16
function buildGrid(numElements = 16) {
  while (numElements > 100 || isNaN(numElements))
    numElements = prompt(
      "Alert! You must enter a whole number no greater than 100."
    );

  let elementWidth = 100 / numElements;
  let elementHeight = elementWidth;
  const container = document.getElementById("container");
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
buildGrid(12);
