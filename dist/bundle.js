!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){},function(e,t,n){e.exports=n.p+"470b7f9643e057149c91b3d98fac1d9e.jpg"},function(e,t,n){e.exports=n.p+"d51be807d0cdb6f791b3cc58380c69bb.png"},function(e,t,n){e.exports=n.p+"124d4dad70a0a5c2d8e4e28ea3e42214.png"},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3);const r={img:document.querySelector(".sample-block__img"),blockEl:document.querySelector(".sample-block")};var l=new class{constructor(e,t){this.imgEl=e,this.wrapEl=t,this.handleDragGallery=this.handleDragGallery.bind(this)}handleDragGallery(e){let t=e.target.closest(".draggable"),n=this;if(!t)return;let r=e.pageX;function l(e){!function(e){let l=e-r;r=e;let o=6*n.imgEl.offsetWidth,c=n.wrapEl.offsetWidth,s=parseInt(getComputedStyle(t).marginLeft)+l;if(l<0){let e=o-c;s=Math.max(s,-e)}else s=Math.min(0,s);t.style.marginLeft=s+"px"}(e.pageX)}t.addEventListener("mousemove",l),document.addEventListener("mouseup",function e(n){n.target.closest(".draggable")&&(t.removeEventListener("mousemove",l),document.removeEventListener("mouseup",e))}),t.ondragstart=(()=>!1)}executeEvent(){document.addEventListener("mousedown",this.handleDragGallery)}}(r.img,r.blockEl);let o=0;const c={elems:document.querySelectorAll(".member-card"),elemsCont:document.querySelector(".members-block"),prevBtn:document.querySelector(".member-switcher_previous"),nextBtn:document.querySelector(".member-switcher_next")},s={elems:document.querySelectorAll(".brand-user__card"),elemsCont:document.querySelector(".users-brand__wrapper"),prevBtn:document.querySelectorAll(".btn-switcher_brand")[0],nextBtn:document.querySelectorAll(".btn-switcher_brand")[1]};class i{constructor(e,t,n,r){this.elems=e,this.cont=t,this.prevBtn=n,this.nextBtn=r}handleBtnClick(e){console.log("jjjjj");let t=this.elems[0].offsetWidth,n=parseInt(getComputedStyle(this.elems[0]).marginRight);if("prev"===e.currentTarget.dataset.btn)o+=t+n,o=Math.min(0,o),console.log(e.currentTarget.dataset.btn),this.cont.style.marginLeft=o+"px";else if("next"===e.currentTarget.dataset.btn){o+=-t-n;let e=this.elems.length*(t+n)-(4*t+4*n);o=Math.max(-e,o),this.cont.style.marginLeft=o+"px"}}executeEvent(){this.nextBtn.addEventListener("click",e=>this.handleBtnClick(e)),this.prevBtn.addEventListener("click",e=>this.handleBtnClick(e))}}const a=new i(c.elems,c.elemsCont,c.prevBtn,c.nextBtn),u=new i(s.elems,s.elemsCont,s.prevBtn,s.nextBtn);let m=0;const d={items:document.querySelectorAll(".testimonial-block__item"),prevBtn:document.querySelector(".testimonial-block__prev-btn"),nextBtn:document.querySelector(".testimonial-block__next-btn"),wrapper:document.querySelector(".testimonial-block__carousel")};var p=new class{constructor(e,t,n,r){this.items=e,this.prevBtn=t,this.nextBtn=n,this.wrapper=r}quoteSwitcher(e){let t=this.items[0].offsetWidth;if(e.currentTarget.closest(".testimonial-block__next-btn")){m+=-t;let e=(this.items.length-1)*t;m=Math.max(m,-e),this.wrapper.style.marginLeft=m+"px"}e.currentTarget.classList.contains("testimonial-block__prev-btn")&&(m+=t,m=Math.min(0,m),this.wrapper.style.marginLeft=m+"px")}executeEvent(){this.prevBtn.addEventListener("click",e=>this.quoteSwitcher(e)),this.nextBtn.addEventListener("click",e=>this.quoteSwitcher(e))}}(d.items,d.prevBtn,d.nextBtn,d.wrapper);var h=new class{clickHandler(e){e.target.closest(".page-nav__btn-toggler")&&document.querySelector(".page-nav__menu").classList.toggle("page-mav__menu_active")}bindEvent(e){document.addEventListener(e,e=>this.clickHandler(e))}};var g=new class{constructor(e){this.targElems=e}executeEvent(){let e=document.querySelectorAll(".page-nav__link");for(let t of e)t.addEventListener("click",e=>{e.preventDefault(),this.scrollTo(e)});document.querySelector(".see-more-container__link").addEventListener("click",e=>{e.preventDefault(),this.scrollTo(e)})}scrollTo(e){this.targElems[e.currentTarget.dataset.link].scrollIntoView({block:"center",behavior:"smooth"})}}({header:document.getElementById("header"),services:document.getElementById("services"),features:document.getElementById("features"),skills:document.getElementById("skills"),portfolio:document.getElementById("sample-work"),member:document.getElementById("member"),contact:document.getElementById("contact"),testimonial:document.getElementById("testimonial"),prices:document.getElementById("prices"),more:document.getElementById("services")});l.executeEvent(),a.executeEvent(),u.executeEvent(),p.executeEvent(),h.bindEvent("click"),g.executeEvent()}]);