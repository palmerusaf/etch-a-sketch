// build grid of divs default to 16x16
function buildGrid(size = 16) {
  const container = document.getElementById("container");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-element");
      container.append(div);
    }
  }
}
buildGrid(3);
