import BubbleSortVisualizer from "./bubblesort.js";
import InsertionSortVisualizer from "./insertionsort.js";

let activeVisualizers = [];

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

document.getElementById("restartButton").addEventListener("click", createDemo);
