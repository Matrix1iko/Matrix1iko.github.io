var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 20,
        modifier: 1,
        slideShadows: true,
        },
        breakpoints:   {
            600:{
                slidesPerView: 3
        },
            200:{
                slidesPerView: 1
            }
    }
});


var swiper = new Swiper(".swiper-news", {
    slidesPerView: 3,
    loop: true,
    breakpoints:   {
        992:{
            slidesPerView: 3
    },
    500:{
        slidesPerView: 2
    },
    200:{
        slidesPerView: 1
    },
}
});