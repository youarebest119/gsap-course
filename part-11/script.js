import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const tl = gsap.timeline({
    defaults: {
        ease: "back.inOut",
        duration: 2,
    }
});

const subTitle = new SplitText("h2", {
    type: "chars"
})
const title = new SplitText("h1")


tl.from(subTitle.chars, {
    scale: 0,
    opacity: 0,
    stagger: {
        amount: 0.5,
        from: "center",
    },
})

tl.from(title.lines, {
    scaleY: 0,
    ease: "ease.inOut",
    duration: 0.5,
})

tl.to(title.words, {
    x: i => {
        return i <= 3 ? -100 : 100;
    },
    stagger: 0.075,
    duration: 1,
})

tl.from("h1", {
    "--creative": 0,
    "--creative-color": "black",
})