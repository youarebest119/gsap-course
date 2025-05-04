import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);


let title = new SplitText("#title", {
    // type: "chars, words, lines"
    // type: "chars",
    charsClass: "character",
    linesClass: "line",
    wordsClass: "word",
})


gsap.from(title.chars, {
    yPercent: 50,
    opacity: 0,
    stagger: 0.05,
    onComplete: () => {
        title.revert();
    }
})