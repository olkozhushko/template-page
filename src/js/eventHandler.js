class mainEventsHandler {

clickHandler(e) {
  let target = e.target;

  if(target.closest(".page-nav__btn-toggler")) {
    let menuList = document.querySelector(".page-nav__menu");

    menuList.classList.toggle("page-mav__menu_active");
  }
 }

 bindEvent(type) {
   document.addEventListener(type, (e) => this.clickHandler(e));
 }
}

export default new mainEventsHandler();