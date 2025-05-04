function slide(element) {
    const config = {};

    // left slide
    const leftSlide = element.getAttribute("data-slide-left");
    if (leftSlide !== null) {
        config.xPercent = (leftSlide || 100) * -1;
    }

    // right slide
    const rightSlide = element.getAttribute("data-slide-right");
    if (rightSlide !== null) {
        config.xPercent = rightSlide || 100;
    }

    // down slide
    const downSlide = element.getAttribute("data-slide-down");
    if (downSlide !== null) {
        config.yPercent = (downSlide || 100) * -1;
    }

    // up slide
    const upSlide = element.getAttribute("data-slide-up");
    if (upSlide !== null) {
        config.yPercent = upSlide || 100;
    }
    
    return config;
}

export default slide;