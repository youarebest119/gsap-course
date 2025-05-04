import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import common from "./common";
import commonScrollTrigger from "./commonScrollTrigger";
import Lenis from "lenis";
import slide from "./slide";
import flip from "./flip";
import zoom from "./zoom";
import setAttributesInBox from "./setAttributes";

gsap.registerPlugin(ScrollTrigger)

new Lenis({
    autoRaf: true,
    autoResize: true,
});


let elements = document.querySelectorAll("[data-trigger]")


elements.forEach(element => {
    setAttributesInBox(element);
    gsap.from(element, {
        duration: 1,
        ease: "back.inOut",
        ...common(element),
        ...slide(element),
        ...flip(element),
        ...zoom(element),
        scrollTrigger: {
            trigger: element,
            ...commonScrollTrigger(element),
        }
    })

})