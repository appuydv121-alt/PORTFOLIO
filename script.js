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
const locoScroll = new LocomotiveScroll({
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
gsap.to(".hero-lft-content" , {
    scrollTrigger:{
        trigger: "#profile",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
          scrub:1,
          scroller: "#main",
    },
    y:"-200%",
    ease:Power1
  
});
let sections = document.querySelectorAll(".hero-lft-content");
 
Shery.imageEffect("#hero-rgt", {
    style: 4,
    slideStyle: (setScroll) => {
        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "bottom bottom",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(2*prog.progress + index);
                },
                scroller: "#main",
            });
        });
    }
});