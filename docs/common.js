gsap.from('.img-1', {
  ease: Expo.easeIn,
  opacity:0,
  x:-300,
  duration:1.2,
  scrollTrigger:{
    trigger:'.img-1',
    start:'0 75%'
  }
});