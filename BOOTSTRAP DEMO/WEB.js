const element = document.getElementById("animationDemo");
const animate = new mdb.Animate(element, {
  animation: "slide-up",
  animationStart: "onScroll",
  animationDelay: "0",
  animationDuration: "10000",
  animationReverse: "false",
  animationRepeat: "true",
  animationInterval: "0",
});
animate.init();