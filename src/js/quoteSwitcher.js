let position = 0;

const elms = {
  items: document.querySelectorAll(".testimonial-block__item"),
  prevBtn: document.querySelector(".testimonial-block__prev-btn"),
  nextBtn: document.querySelector(".testimonial-block__next-btn"),
  wrapper: document.querySelector(".testimonial-block__carousel")
}

class QuoteSwitcher {
  constructor(items, prevBtn, nextBtn, wrapper) {
    this.items = items;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.wrapper = wrapper;
  }
  
  quoteSwitcher(e) {
    let width = this.items[0].offsetWidth;
    // let marginLeft = getComputedStyle(wrapper).marginLeft;
    
    if(e.currentTarget.closest(".testimonial-block__next-btn")) {
      position += -width;
      let maxPos = (this.items.length - 1) * width;
      position = Math.max(position, -maxPos);
      this.wrapper.style.marginLeft = position + "px";
    }
  
    if(e.currentTarget.classList.contains("testimonial-block__prev-btn")) {
      position += width;
      position = Math.min(0, position);
  
      this.wrapper.style.marginLeft  = position + "px";
    }
      
  }

  executeEvent() {
    this.prevBtn.addEventListener("click", (e) => this.quoteSwitcher(e));
    this.nextBtn.addEventListener("click", (e) => this.quoteSwitcher(e));
  }
}

export default new QuoteSwitcher(elms.items, elms.prevBtn, elms.nextBtn, elms.wrapper);