function videoconAnimation(){
  const videocon = document.querySelector("#video-container");
const playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter", () => {
  gsap.to(playbtn, {
    scale: 1,
    opacity:1,
  })
})
videocon.addEventListener("mouseleave", () => {
  gsap.to(playbtn,{
    opacity:0,
    scale:0,
  })
})
videocon.addEventListener("mousemove", (dets) => {
  gsap.to(playbtn, {
    left: dets.x-30,
    top: dets.y-30,
  })
})
}
videoconAnimation()

function loadingAnimation(){
  gsap.from("#page1 h1", {
  y: 100,
  opacity: 0,
  delay:0.5,
  duration: 0.9,
  stagger:0.3
})
gsap.from("#page1 #video-container", {
  scale:0.9,
  opacity: 0,
  delay:1.2,
  duration: 0.5,
})
}
loadingAnimation()