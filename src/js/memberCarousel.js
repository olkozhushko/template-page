let position = 0;

const handleBtnClick = (event, elems, membersCont) => {
   const VIS_EL_NUM = 4;

   let width = elems[0].offsetWidth;
   console.log(`width: ${width}`);
   let elMarginRight = parseInt(getComputedStyle(elems[0]).marginRight);
   console.log(`elMar: ${elMarginRight}`);
   if(event.currentTarget.dataset.btn === "prev") {
    position += width + elMarginRight;
    position = Math.min(0, position);
  
    membersCont.style.marginLeft = position + "px";

   } else if (event.currentTarget.dataset.btn === "next") {
     console.log(`pos: ${position}`);
     position += -width - elMarginRight;
     let marginLimit = (elems.length - 1) * (width + elMarginRight) + width - (4 * width + elMarginRight * 3);
     console.log(`limit: ${marginLimit}`);
     position = Math.max(-marginLimit, position);
     
     console.log(position);
     membersCont.style.marginLeft = position + "px";
     console.log(`left: ${getComputedStyle(membersCont).marginLeft}`);
   }
}

export default handleBtnClick;
