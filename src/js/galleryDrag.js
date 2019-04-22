const handleDragGallery = function(event, imgEl, wrapEl) {
  let target = event.target.closest(".draggable");

  if(!target) return;

  let currentMousePos = event.pageX;

  function moveAt(pageX) {
    let passedDis = pageX - currentMousePos;
    currentMousePos = pageX;

    let dragFullWidth = imgEl.offsetWidth * 6;
    console.log(dragFullWidth);
    let dragWidth = wrapEl.offsetWidth;
    console.log(dragWidth);

    let marginLeft = parseInt(getComputedStyle(target).marginLeft) + passedDis;
  
    if(passedDis < 0) {
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

    if(!tarEl) return;
    
    target.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  target.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);

  target.ondragstart = () => false;
}

export default handleDragGallery;