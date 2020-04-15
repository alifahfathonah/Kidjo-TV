// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// Header Banner
TweenMax.to(".overlay img", 2, {
    duration: 3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay span", 2, {
    duration: 3,
    delay: .5,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
    duration: 10.5,
    delay: 1,
    top: -2000,
    ease: Expo.easeInOut
})

TweenMax.from("nav.navbar", 1, {
    delay: 2,
    opacity: 0,
    y: -150,
    ease: Expo.easeInOut
})

TweenMax.from(".navbar-nav li", 1, {
    delay: 2.2,
    opacity: 0,
    y: -120,
    ease: Expo.easeInOut
})

TweenMax.from(".text-one", 1, {
    delay: 2.5,
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut
})

TweenMax.from(".text-two", 1, {
    delay: 3,
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut
})

TweenMax.from(".text-three", 1, {
    delay: 3.5,
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut
})

TweenMax.from(".text-four", 1, {
    delay: 4,
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut
})

TweenMax.from(".girl-tablet", 1, {
    delay: 4.5,
    opacity: 0,
    y: 150,
    ease: Expo.easeInOut
})

TweenMax.from(".star-icon", 1, {
    delay: 5,
    opacity: 0,
    ease: Expo.easeInOut
})
