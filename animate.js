gsap.registerPlugin(SplitText);
var tl = gsap.timeline();

tl.to('#hero-section img',{
    width:"auto", 
    duration:0.5,
    delay:0.5,
    opacity:1,
    duration: 0.5,
    // stagger: 0.3
})

gsap.set("#hero-section h1", { opacity: 1 });
let split = SplitText.create("#hero-section h1",{type: "chars"})
tl.from(split.chars, {
  y: 100,
  autoAlpha: 0,
  stagger: 0.05
});

tl.from("#navbar h3",{
    y:-50,
    opacity:0,
    stagger: 0.1
})

gsap.to("#page2 h1", {
    transform:"translateX(-70%)",
    scrollTrigger: {
        trigger:"#page2",
        scroller: "body",
        markers: true,
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true
    }
})

gsap.to("#page3 h1", {
    y:-50,
    delay: 1,
    opacity:1,
    duration:.5,
    scrollTrigger: {
        trigger:"#page3",
        scroller: "body",
        scrub:5,
    }
})