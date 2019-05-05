import "./scss/main.scss";
import "./scss/header.scss";
import "./img/bg_header.jpg";
import "./img/logo.png";
import "./img/ipad.png";
import "./scss/nav.scss";
import "./scss/servicesSection.scss";
import "./scss/featuresSection.scss";
import "./scss/skillsSection.scss";
import "./scss/sampleSection.scss";
import "./scss/factsSection.scss";
import "./scss/memberSection.scss";

import "../node_modules/@fortawesome/fontawesome-free/js/all";

import handleDragGallery from "./js/galleryDrag";
import handleBtnClick from "./js/memberCarousel";

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
  position: 0,
  btnClick() {
    this.prevBtn.addEventListener("click", (e) => handleBtnClick(e, this.elems, this.elemsCont, this.position));

    this.nextBtn.addEventListener("click", (e) => handleBtnClick(e, this.elems, this.elemsCont, this.position));
  }
}

dragGallery.dragEvent();
memberSectionCarousel.btnClick();