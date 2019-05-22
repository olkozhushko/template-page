let position = 0;

const members = {
  elems: document.querySelectorAll(".member-card"),
  elemsCont: document.querySelector(".members-block"),
  prevBtn: document.querySelector(".member-switcher_previous"),
  nextBtn: document.querySelector(".member-switcher_next"),
}

const users = {
  elems: document.querySelectorAll(".brand-user__card"),
  elemsCont: document.querySelector(".users-brand__wrapper"),
  prevBtn: document.querySelectorAll(".btn-switcher_brand")[0],
  nextBtn: document.querySelectorAll(".btn-switcher_brand")[1],
}



class ButtonClickHandler {
  constructor(elems, elemsCont, prevBtn, nextBtn) {
    this.elems = elems;
    this.cont = elemsCont;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
  }

  handleBtnClick(event) {
   console.log("jjjjj")
   let width = this.elems[0].offsetWidth;
   
   let elMarginRight = parseInt(getComputedStyle(this.elems[0]).marginRight);
   
   if(event.currentTarget.dataset.btn === "prev") {
    position += width + elMarginRight;
    position = Math.min(0, position);
    console.log(event.currentTarget.dataset.btn);
    this.cont.style.marginLeft = position + "px";

   } else if (event.currentTarget.dataset.btn === "next") {
     
     position += -width - elMarginRight;
     let marginLimit = (this.elems.length) * (width + elMarginRight) - (4 * width + elMarginRight * 4);
     
     position = Math.max(-marginLimit, position);

     this.cont.style.marginLeft = position + "px";
   }
  }

   executeEvent() {
     this.nextBtn.addEventListener("click", (e) => this.handleBtnClick(e));
     this.prevBtn.addEventListener("click", (e) => this.handleBtnClick(e));
   }
 }

export const memberCarous = new ButtonClickHandler(members.elems, members.elemsCont, members.prevBtn, members.nextBtn);

export const usersCarous = new ButtonClickHandler(users.elems, users.elemsCont, users.prevBtn, users.nextBtn);
