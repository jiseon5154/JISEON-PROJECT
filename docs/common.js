gsap.from('.img-1', {
  ease: Expo.easeIn,
  opacity:0,
  x:-300,
  duration:0.7,
  scrollTrigger:{
    trigger:'.img-1',
    start:'0 75%'
  }
});