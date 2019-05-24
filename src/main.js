import "./scss/main.scss";

import "./img/bg_header.jpg";
import "./img/logo.png";
import "./img/ipad.png";

// import "../node_modules/@fortawesome/fontawesome-free/js/all";

import dragGallery from "./js/galleryDrag";
import {memberCarous, usersCarous} from "./js/elemsCarousel";
import quoteSwitcher from "./js/quoteSwitcher";
import eventHandler from "./js/eventHandler";
import scroll from "./js/scroll";

//events initiating

dragGallery.executeEvent();
memberCarous.executeEvent();
usersCarous.executeEvent();
quoteSwitcher.executeEvent();
eventHandler.bindEvent("click");
scroll.executeEvent();