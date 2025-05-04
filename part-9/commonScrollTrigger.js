function commonScrollTrigger(element) {
    const config = {};

    // repeat
    let repeat = element.getAttribute("data-repeat");
    if (repeat !== null) {
        config.toggleActions = "play reset play reverse";
    }

    // markers
    let markers = element.getAttribute("data-markers");
    if (markers !== null) {
        config.markers = true;
    }

    // start
    let start = element.getAttribute("data-start");
    if (start !== null) {
        config.start = start;
    }

    // end
    let end = element.getAttribute("data-end");
    if (end !== null) {
        config.end = end;
    }

    // scrub
    let scrub = element.getAttribute("data-scrub");
    if(scrub !== null) {
        config.scrub = 1;
        if(Number(scrub)) {
            config.scrub = Number(scrub);
        }
    }

    return config;
}

export default commonScrollTrigger;