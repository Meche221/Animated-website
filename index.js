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
// taking some rest for a while hope u will understand that