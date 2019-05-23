const scrollELements = {
header: document.getElementById("header"),
services: document.getElementById("services"),
features: document.getElementById("features"),
skills: document.getElementById("skills"),
portfolio: document.getElementById("sample-work"),
member: document.getElementById("member"),
contact: document.getElementById("contact"),
testimonial: document.getElementById("testimonial"),
prices: document.getElementById("prices"),
more: document.getElementById("services")
};

class Scroll {
  constructor(targElems) {
  this.targElems = targElems;
}

  executeEvent() {
  
  let links = document.querySelectorAll(".page-nav__link");

  for(let link of links) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      this.scrollTo(e);
    })
  }
    let arrow = document.querySelector(".see-more-container__link");

    arrow.addEventListener("click", (e) => {
      e.preventDefault();
      this.scrollTo(e);
    })

  }

scrollTo(e) {
  
  let dataSet = [
    "header",
    "services",
    "features",
    "skills",
    "portfolio",
    "testimonial",
    "member",
    "prices",
    "contact",
    "more"
  ];
  
  this.targElems[e.currentTarget.dataset.link].scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
 }
}



export default new Scroll(scrollELements);
