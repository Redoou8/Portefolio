const sliders = document.querySelectorAll(".swiper");

sliders.forEach(function(slider) {
  let swiperInstance = null; // Stocke l'instance Swiper pour chaque slider

  if (slider.classList.contains("verti")) {

    let x = slider.classList.contains("timer1") ? 3000 : 4500;
    swiperInstance = new Swiper(slider, {
      direction: 'vertical',
      loop: true,
      mousewheel: true,
      draggable: false,
      allowTouchMove: true,
      autoplay: {
                
          delay: x,},
         

      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });} 
    
    else {
      let x = slider.classList.contains("timer1") ? 3700 : 6000;
    swiperInstance = new Swiper(slider, {
      direction: 'horizontal',
      loop: true,
      mousewheel: true,
      draggable: false,
      allowTouchMove: false,
      
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      autoplay: {
        delay: x,
      },

    });


}

  slider.swiperInstance = swiperInstance; // Stocke l'instance dans une propriété personnalisée

  slider.addEventListener("click", function() {
    slider.classList.toggle("focus");

    const images = slider.querySelectorAll("img");
    images.forEach(function(image) {
      image.classList.toggle("focusimg");
    });
  });
});



    
    
  

   
  



