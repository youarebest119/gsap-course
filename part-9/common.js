function common(element) {
    const config = {};

    // fade
    let fade = element.getAttribute("data-fade");
    if (fade !== null) {
        config.opacity = 0;
    }

    // duration
    let duration = element.getAttribute("data-duration");
    if (duration !== null) {
        config.duration = Number(duration) / 100;
    }

    // ease
    let ease = element.getAttribute("data-ease");
    if (ease !== null) {
        config.ease = ease;
    }
    
    return config;
}

export default common;