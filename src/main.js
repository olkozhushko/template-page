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

import "../node_modules/@fortawesome/fontawesome-free/js/all";

import handleDragGallery from "./js/galleryDrag";

const dragGallery = {
  img: document.querySelector(".sample-block__img"),
  blockEl: document.querySelector(".sample-block"),
  dragEvent() {
    document.addEventListener("mousedown", (e) => handleDragGallery(e, this.img, this.blockEl));
  }
}

dragGallery.dragEvent();