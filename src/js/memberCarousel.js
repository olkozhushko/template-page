let position = 0;

const handleBtnClick = (event, elems, membersCont) => {

   let width = elems[0].offsetWidth;
   
   let elMarginRight = parseInt(getComputedStyle(elems[0]).marginRight);
   
   if(event.currentTarget.dataset.btn === "prev") {
    position += width + elMarginRight;
    position = Math.min(0, position);
  
    membersCont.style.marginLeft = position + "px";

   } else if (event.currentTarget.dataset.btn === "next") {
     
     position += -width - elMarginRight;
     let marginLimit = (elems.length - 1) * (width + elMarginRight) + width - (4 * width + elMarginRight * 3);
     
     position = Math.max(-marginLimit, position);
     
    
     membersCont.style.marginLeft = position + "px";
   }
}

export default handleBtnClick;
