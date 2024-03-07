/**
 * Scroll Utilities
 * A collection of utility functions for handling scrolling events.
 */

/**
 * Function to check if the page is scrolled to the bottom.
 * @returns {boolean} True if scrolled to the bottom, false otherwise.
 */
function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

/**
 * Function to check if the page is scrolled to the top.
 * @returns {boolean} True if scrolled to the top, false otherwise.
 */
function isScrolledToTop() {
    return window.scrollY === 0;
}

/**
 * Function to smoothly scroll to a specific element on the page.
 * @param {HTMLElement} element The element to scroll to.
 * @param {number} duration The duration of the scroll animation in milliseconds.
 */
function scrollToElement(element, duration) {
    const targetPosition = element.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Exporting functions for use in other modules
module.exports = {
    isScrolledToBottom,
    isScrolledToTop,
    scrollToElement
};
