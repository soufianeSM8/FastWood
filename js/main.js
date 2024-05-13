// start menu
let menuBtn = document.querySelectorAll('.menuBtn'), // btn for show znd hidden menu box
    menuBox = document.querySelector('.menuBox');

menuBtn.forEach(e => {
    e.addEventListener('click',()=> {
        if(!e.matches('.closeBtn'))  menuBox.style = ` right:0;`;
          else  menuBox.style = ` right:-100vw;`;
    })
});
// end menu

// start slider menu
let sliderContainer = document.querySelector('.box_menu'),
    sliderBtnMove = document.querySelectorAll('.menu_slider_active span'),
    SliderBtnMobile = document.querySelectorAll('.btnSlider'),
    sliderItemMenu = document.querySelectorAll('.menu_item'),
    fullWidthItem = getComputedStyle(sliderItemMenu[0]).marginLeft,
    sliderCounter = [0,0],
    btnCheck = [1,2,3];

    //  for desktop
  function move(btnCheck) {
      if(btnCheck == 1) sliderCounter[0] = 0;

         else if(btnCheck == 2 )
            sliderCounter[0] = sliderContainer.clientWidth;

        else if(btnCheck  == 3)
            sliderCounter[0] = sliderContainer.clientWidth*2;

     sliderContainer.style = `transform:translateX(-${sliderCounter[0]}px);`;
  }
  sliderBtnMove.forEach((e,i)=> {
      e.addEventListener('click',()=>{
        move(btnCheck[i])
      })
  })
   // for mobile and tablet
  function SliderMobile(x)  {
    function sliderMove(CheckClick) {
        if(CheckClick == 1){
            sliderCounter[1] += (sliderItemMenu[0].offsetWidth) + parseFloat(fullWidthItem)*2
        }
        else if (CheckClick == 2) {
            if(sliderCounter[1] > 0){
                sliderCounter[1] -= (sliderItemMenu[0].offsetWidth) + parseFloat(fullWidthItem)*2
            }
        }
        sliderContainer.style = `transform:translateX(-${sliderCounter[1]}px);`;
    }

        if(this.outerWidth >= 230 && this.outerWidth < 481){
            if(sliderCounter[1] < ((sliderItemMenu[0].offsetWidth) + parseFloat(fullWidthItem)*2) * 11 ){
                sliderMove(x)
            }
           }
           else if(this.outerWidth > 480 && this.outerWidth < 768){
            if(sliderCounter[1] <= (sliderItemMenu[0].offsetWidth) + parseFloat(fullWidthItem)*2 * 10 ){
                sliderMove(x)
            }
            }
           else if(this.outerWidth > 767 && this.outerWidth < 2025){
            if(sliderCounter[1] <= (sliderItemMenu[0].offsetWidth) + parseFloat(fullWidthItem)*2 * 9 ){
                sliderMove(x)
            }
            }
  }

  SliderBtnMobile.forEach((e,i )=>{
     e.addEventListener('click',()=>{
    SliderMobile(btnCheck[i])
  })
  })
