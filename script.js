// let body = document.querySelector('body');
// let main = document.querySelector("#main")
// let theme = false;
// function ChangeTheme() {
//     console.dir(body.style.backgroundColor)
//     if (!theme) {
//         main.style.backgroundColor = "#fff"
//         theme = true;
//     }

//     else {
//         main.style.backgroundColor = "#333"

//         theme = false;
//     }
// }
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
Shery.mouseFollower()
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".hvr",{
    images:["./bucket.avif"]
})
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },

  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
gsap.registerPlugin(ScrollTrigger);
gsap.to("#hero-lft" , {
    scrollTrigger:{
        trigger: "#hero",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
          scrub:1,
          scroller: "#main",
    },
    y:"-300%",
    ease:Power1
  
})