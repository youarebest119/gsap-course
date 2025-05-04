function flip(element) {
    const config = {};

    // left flip
    const leftFlip = element.getAttribute("data-flip-left");
    if (leftFlip !== null) {
        config.rotateY = (leftFlip || 100) * -1;
    }

    // right flip
    const rightFlip = element.getAttribute("data-flip-right");
    if (rightFlip !== null) {
        config.rotateY = rightFlip || 100;
    }

    // down flip
    const downFlip = element.getAttribute("data-flip-down");
    if (downFlip !== null) {
        config.rotateX = (downFlip || 100) * -1;
    }

    // up flip
    const upFlip = element.getAttribute("data-flip-up");
    if (upFlip !== null) {
        config.rotateX = upFlip || 100;
    }
    
    return config;
}

export default flip;