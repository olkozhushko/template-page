const scrollELements = {
  header: document.getElementById("header"),
  services: document.getElementById("services"),
  features: document.getElementById("features"),
  skills: document.getElementById("skills"),
  portfolio: document.getElementById("sample-work"),
  member: document.getElementById("member"),
  contact: document.getElementById("contact"),
  offering: document.getElementById("offering"),
  prices: document.getElementById("prices")
}


class Scroll {
  constructor(targElems) {
    this.targElems = targElems;
  }

  scrollTo(e) {
    let dataSet = ["header", "services", "features", "skills", "portfolio", "offering", "member", "prices", "contact"];

    e.preventDefault();
    let target = e.target.closest(".page-nav__link");

    if(!target) return;
  
    if(dataSet.includes(target.dataset.link)) {
      this[target.dataset.link].scrollIntoView({block: "center", behavior: "smooth"});
    }

  }

  executeEvent() {
    document.addEventListener("click", (e) => scrollTo(e));
  }
}
