import "./scss/main.scss";
import "./scss/header.scss";
import "./scss/nav.scss";
import "./scss/servicesSection.scss";
import "./scss/featuresSection.scss";
import "./scss/skillsSection.scss";
import "./scss/sampleSection.scss";
import "./scss/factsSection.scss";
import "./scss/memberSection.scss";
import "./scss/testimonialSection.scss";
import "./scss/productPricesSection.scss";
import "./scss/contactSection.scss";
import "./scss/footer.scss";

// import "./img/bg_header.jpg";
// import "./img/logo.png";
// import "./img/ipad.png";

import "../node_modules/@fortawesome/fontawesome-free/js/all";

import handleDragGallery from "./js/galleryDrag";
import handleBtnClick from "./js/elemsCarousel";
import quoteSwitcher from "./js/quoteSwitcher";

const dragGallery = {
  img: document.querySelector(".sample-block__img"),
  blockEl: document.querySelector(".sample-block"),
  dragEvent() {
    document.addEventListener("mousedown", (e) => handleDragGallery(e, this.img, this.blockEl));
  }
}

const memberSectionCarousel = {
  elems: document.querySelectorAll(".member-card"),
  elemsCont: document.querySelector(".members-block"),
  prevBtn: document.querySelector(".member-switcher_previous"),
  nextBtn: document.querySelector(".member-switcher_next"),
  btnClick() {
    this.prevBtn.addEventListener("click", (e) => handleBtnClick(e, this.elems, this.elemsCont));

    this.nextBtn.addEventListener("click", (e) => handleBtnClick(e, this.elems, this.elemsCont));
  }
}

const quoteSwitcherObj = {
  items: document.querySelectorAll(".testimonial-block__item"),
  prevBtn: document.querySelector(".testimonial-block__prev-btn"),
  nextBtn: document.querySelector(".testimonial-block__next-btn"),
  wrapper: document.querySelector(".testimonial-block__carousel"),
  switchQuote() {
    this.prevBtn.addEventListener("click", (e) => quoteSwitcher(e, this.items,this.wrapper));
    this.nextBtn.addEventListener("click", (e) => quoteSwitcher(e, this.items, this.wrapper));
  }
}

const usersBrandsCarousel = {
  elems: document.querySelectorAll(".brand-user__card"),
  elemsCont: document.querySelector(".users-brand__wrapper"),
  prevBtn: document.querySelectorAll(".btn-switcher_brand")[0],
  nextBtn: document.querySelectorAll(".btn-switcher_brand")[1],
}

Object.setPrototypeOf(usersBrandsCarousel, memberSectionCarousel);

dragGallery.dragEvent();
memberSectionCarousel.btnClick();
quoteSwitcherObj.switchQuote();
usersBrandsCarousel.btnClick();