##
gsap.to(element, {
    scrollTrigger: element,
})

##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        scroller: element | default - body,
    }
})


##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        markers: true,
    }
})

##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        markers: {
            startColor: "white",
            endColor: "white",
            fontSize: "18px",
            fontWeight: "bold",
            indent: 20,
        },
    }
})

##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        toggleClass: className,
    }
})

##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        start: "top center",
    }
})


##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        once: true,
    }
})

##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        toggleActions: "play pause pause play"
    }
})

##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        scrub: boolean | number
    }
})

##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        end: values,
    }
})

##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        endTrigger: element,
    }
})

##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        pin: true,
        Warning don't animate the pinned element itself because that will throw off the measurements (ScrollTrigger is highly optimized for performance and pre-calculates as much as possible). Instead, you could nest things such that you're animating only elements INSIDE the pinned element.
    }
})

##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        pin: true,
        pinSpacing: boolean,
    }
})

##
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        horizontal: true,
    }
})


## scrolltrigger functions
onLeave
onEnter
onEnterBack
onLeaveBack
onRefresh
onUpdate -> self
onScrubComplete
onToggle


## methods
direction
isActive
progress
isScrolling
enable
getVelocity


examples
https://codepen.io/GreenSock/pen/QWjjYEw
https://codepen.io/GreenSock/pen/YzyqVNe
getvelocity cards(size depends on velocity of scroll)
scrub animation with three js of mesh disposing to creating
