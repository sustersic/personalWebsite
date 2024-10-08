import BubbleSortVisualizer from "./bubblesort.js";
import InsertionSortVisualizer from "./insertionsort.js";

let activeVisualizers = [];
let chaoticVisualizers = [];

createDemo();

function resetState() {
  activeVisualizers.forEach((vis) => vis.stopAnimation());
  activeVisualizers = [];
  visualizersContainer.innerHTML = "";
}

function stopSounds() {
  activeVisualizers.forEach((vis) => vis.stopAudio());
}

function createDemo() {
  resetState();
  if (Math.random() < 0.5) {
    const container = document.createElement("div");
    container.classList.add("visualizer");
    const sv = new BubbleSortVisualizer(20, container);
    activeVisualizers.push(sv);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("visualizerName");
    nameDiv.textContent = "Bubble Sort";
    container.appendChild(nameDiv);

    visualizersContainer.appendChild(container);
  } else {
    const container = document.createElement("div");
    container.classList.add("visualizer");
    const sv = new InsertionSortVisualizer(20, container);
    activeVisualizers.push(sv);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("visualizerName");
    nameDiv.textContent = "Insertion Sort";
    container.appendChild(nameDiv);

    visualizersContainer.appendChild(container);
  }
}

function chaos() {
  resetChaos();
  visualizerChaos.style.display = "flex";
  for (let i = 1; i <= 40; i++) {
    if (Math.random() < 0.5) {
      const container = document.createElement("div");
      container.classList.add("visualizer");
      const sv = new BubbleSortVisualizer(20, container, true);
      chaoticVisualizers.push(sv);

      const nameDiv = document.createElement("div");
      nameDiv.classList.add("visualizerName");
      nameDiv.textContent = "Bubble Sort";
      container.appendChild(nameDiv);

      visualizerChaos.appendChild(container);
    } else {
      const container = document.createElement("div");
      container.classList.add("visualizer");
      const sv = new InsertionSortVisualizer(20, container, true);
      chaoticVisualizers.push(sv);

      const nameDiv = document.createElement("div");
      nameDiv.classList.add("visualizerName");
      nameDiv.textContent = "Insertion Sort";
      container.appendChild(nameDiv);

      visualizerChaos.appendChild(container);
    }
  }
}

function resetChaos() {
  chaoticVisualizers.forEach((vis) => vis.stopAnimation());
  chaoticVisualizers = [];
  visualizerChaos.innerHTML = "";
  visualizerChaos.style.display = "none";
}

document.getElementById("restartButton").addEventListener("click", createDemo);
document
  .getElementById("visualizersContainer")
  .addEventListener("click", chaos);
document
  .getElementById("visualizerChaos")
  .addEventListener("click", resetChaos);
