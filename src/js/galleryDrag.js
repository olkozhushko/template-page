const dragElems = {
  img: document.querySelector(".sample-block__img"),
  blockEl: document.querySelector(".sample-block"),
};

class DragGallery {
  constructor(imgEl, wrapEl) {
    this.imgEl = imgEl;
    this.wrapEl = wrapEl;

    this.handleDragGallery = this.handleDragGallery.bind(this);
  }

  handleDragGallery(event) {
    let target = event.target.closest(".draggable");
    let self = this;

    if (!target) return;

    let currentMousePos = event.pageX;

    function moveAt(pageX) {
      let passedDis = pageX - currentMousePos;
      currentMousePos = pageX;

      let dragFullWidth = self.imgEl.offsetWidth * 6;
      let dragWidth = self.wrapEl.offsetWidth;

      let marginLeft =
        parseInt(getComputedStyle(target).marginLeft) + passedDis;

      if (passedDis < 0) {
        let max = dragFullWidth - dragWidth;
        marginLeft = Math.max(marginLeft, -max);
      } else {
        marginLeft = Math.min(0, marginLeft);
      }

      target.style.marginLeft = marginLeft + "px";
    }

    function handleMouseMove(e) {
      moveAt(e.pageX);
    }

    function handleMouseUp(e) {
      let tarEl = e.target.closest(".draggable");

      if (!tarEl) return;

      target.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    target.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    target.ondragstart = () => false;
  }

  executeEvent() {
    document.addEventListener("mousedown", this.handleDragGallery);
  }
}

export default new DragGallery(dragElems.img, dragElems.blockEl);
