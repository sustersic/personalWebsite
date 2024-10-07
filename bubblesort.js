class BubbleSortVisualizer {
  constructor(size, container, sound = false) {
    this.container = container;

    const array = this.generateRandomArray(size);
    this.generateBars(array, container);
    const swaps = this.bubbleSort(array);
    this.isAnimating = true;
    this.animate(swaps);
    this.fanfare = new Audio("Assets/fanfare.mp3");
    this.sound = sound;
  }

  animate(swaps) {
    if (!this.isAnimating) return;
    if (swaps.length == 0) {
      for (let i = 0; i < this.container.children.length - 1; i++) {
        this.container.children[i].style.backgroundColor = "mediumseagreen";
        if (this.sound == true) {
          this.fanfare.play();
        }
      }
      return;
    }
    const indices = swaps.shift();
    this.swapChildren(indices, this.container.children);

    setTimeout(() => {
      this.animate(swaps);
    }, 100);
  }

  stopAnimation() {
    this.isAnimating = false;
    this.stopAudio();
    this.fanfare.currentTime = 0;
  }

  stopAudio() {
    this.sound=false
    this.fanfare.pause();
    this.fanfare.currentTime = 0;
  }

  swapChildren([left, right], children) {
    const barLeft = children[left];
    const barRight = children[right];
    this.container.insertBefore(barRight, barLeft);
    for (let i = 0; i < children.length - 1; i++) {
      children[i].style.backgroundColor = "black";
    }
    barLeft.style.backgroundColor = "green";
    barRight.style.backgroundColor = "red";
  }

  bubbleSort(array) {
    const swaps = [];
    let somethingChanged;
    do {
      somethingChanged = false;
      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          [array[i - 1], array[i]] = [array[i], array[i - 1]];
          swaps.push([i - 1, i]);
          somethingChanged = true;
        }
      }
    } while (somethingChanged);
    return swaps;
  }

  generateRandomArray(size) {
    const array = new Array(size);
    for (let i = 0; i < size; i++) {
      array[i] = Math.random(); // between [0 and 1]
    }
    return array;
  }

  generateBars(array, container) {
    for (let i = 0; i < array.length; i++) {
      const bar = document.createElement("div");
      bar.classList.add("vis-bar");
      bar.style.height = array[i] * 100 + "%";
      container.appendChild(bar);
    }
  }
}
export default BubbleSortVisualizer;
