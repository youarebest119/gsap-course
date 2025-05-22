import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);


const tl = gsap.timeline({
    defaults: {
        duration: 1,
        stagger: 0.05,
        ease: "back.inOut",
    }
})

tl.from(".main", {
    scale: 0.2,
    ease: "power4.inOut"
})

tl.to(".loading", {
    "--scale": 1,
    duration: 2,
})

tl.from(".main_logo", {
    scale: 0.4,
})

tl.to(".loading", {
    y: 200,
    opacity: 0,
}, "<")

tl.from(".nav, .logo, .nav_right", {
    y: -100,
    stagger: 0.1,
    duration: 0.8,
})

let leftText = new SplitText(".bottom_left h1");
let leftTitle = new SplitText(".bottom_left h3");
tl.from([...leftText.chars, ...leftTitle.chars], {
    yPercent: 100,
    opacity: 0,
    stagger: 0.01,
    filter: "blur(2rem)",
    duration: 1.4,
})

tl.from(".bottom_left", {
    xPercent: -120,
    stagger: 0.1,
    duration: 0.8,
}, "<")

tl.from(".bottom_right h3, .bottom_right h2", {
    yPercent: 100,
    opacity: 0,
    stagger: 0.01,
    filter: "blur(2rem)",
    duration: 1.4,
})

tl.from(".bottom_right", {
    xPercent: 120,
    stagger: 0.1,
    duration: 0.8,
}, "<")

tl.from(".costume", {
    duration: 0.5,
    opacity: 0,
}, "<")

tl.from(".costume", {
    scale: 2,
    yPercent: 200,
    ease: "power4.inOut(0.5)",
    duration: 2,
}, "<")

tl.from("body", {
    "--light": 0,
}, "<")