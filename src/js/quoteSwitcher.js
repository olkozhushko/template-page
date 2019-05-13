let position = 0;

function quoteSwitcher(e, items, wrapper) {
  let width = items[0].offsetWidth;
  // let marginLeft = getComputedStyle(wrapper).marginLeft;

  if(e.currentTarget.closest(".testimonial-block__next-btn")) {
    position += -width;
    let maxPos = (items.length - 1) * width;

    position = Math.max(position, -maxPos);
    wrapper.style.marginLeft = position + "px";
  }

  if(e.currentTarget.classList.contains("testimonial-block__prev-btn")) {
    position += width;
    position = Math.min(0, position);

    wrapper.style.marginLeft  = position + "px";
  }
    
}

export default quoteSwitcher;