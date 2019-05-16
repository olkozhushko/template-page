let position = 0;

const handleBtnClick = (event, elems, cont) => {

   let width = elems[0].offsetWidth;
   
   let elMarginRight = parseInt(getComputedStyle(elems[0]).marginRight);
   console.log(elMarginRight);
   if(event.currentTarget.dataset.btn === "prev") {
    position += width + elMarginRight;
    position = Math.min(0, position);
    
    console.log(position);
    cont.style.marginLeft = position + "px";

   } else if (event.currentTarget.dataset.btn === "next") {
     
     position += -width - elMarginRight;
     let marginLimit = (elems.length) * (width + elMarginRight) - (4 * width + elMarginRight * 4);
     
     position = Math.max(-marginLimit, position);
     
     console.log(getComputedStyle(cont).marginLeft);
     cont.style.marginLeft = position + "px";
   }
}

export default handleBtnClick;
