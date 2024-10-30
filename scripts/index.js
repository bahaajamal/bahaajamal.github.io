let btn = document.getElementById("btn");
let menu = document.getElementById("ka2ima");
function myone(){
   if(menu.style.display==="none"){
    menu.style.display="block"
    btn.innerText="اغلاق"
   }
   else{
    menu.style.display="none"
    btn.innerText="القائمة"
   }
  
}