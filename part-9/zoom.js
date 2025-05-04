function zoom(element) {
    const config = {};

    // zoom in
    const zoomIn = element.getAttribute("data-zoom-in");
    if (zoomIn !== null) {
        config.scale = 0;
    }

    // zoom out
    const zoomOut = element.getAttribute("data-zoom-out");
    if (zoomOut !== null) {
        config.scale = 2;
    }

    return config;
}

export default zoom;