let heading = document.querySelector(".heading");
let btn = document.querySelector(".btn");
let colorPlate = document.querySelector(".color-plate");
let randNumber=()=>{
   return Math.floor(Math.random()*255);
};
btn.addEventListener("click",()=>{
   let rgb=`rgb(${randNumber()},${randNumber()},${randNumber()})`;
   colorPlate.style.backgroundColor=rgb;
   heading.innerHTML=`Color is :${rgb}`;
   heading.style.color=`${rgb}`;
});

