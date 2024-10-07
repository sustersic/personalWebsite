class InsertionSortVisualizer {
  constructor(size, container, sound = false) {
    this.container = container;

    const array = this.generateRandomArray(size);
    this.generateBars(array, container);
    this.isAnimating = true;
    const swaps = this.insertionSort(array);
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
    this.sound = false;
    this.stopAudio();
    this.fanfare.currentTime = 0;
  }

  stopAudio() {
    this.fanfare.pause();
    this.fanfare.currentTime = 0;
  }

  swapChildren([left, right], children) {
    const barLeft = children[left];
    const barRight = children[right];

    const barLeftDupe = barLeft.cloneNode(true);
    const barRightDupe = barRight.cloneNode(true);

    this.container.replaceChild(barLeftDupe, barRight);
    this.container.replaceChild(barRightDupe, barLeft);

    for (let i = 0; i < children.length - 1; i++) {
      children[i].style.backgroundColor = "black";
    }
    barLeftDupe.style.backgroundColor = "orange";
    barRightDupe.style.backgroundColor = "orangered";
  }

  insertionSort(array) {
    const swaps = [];
    for (let i = 1; i <= array.length; i++) {
      let check;
      for (let j = i - 1; j > 0; j--) {
        check = array[j];
        if (array[j - 1] > check) {
          array[j] = array[j - 1];
          array[j - 1] = check;
          swaps.push([j - 1, j]);
        } else break;
      }
    }
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
export default InsertionSortVisualizer;
