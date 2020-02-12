/**
 * Lazy loading of images.
 * Designed for image heavy websites that must operate on low bandwidths.
 * Requests images after DOM has loaded, and once element is within viewport.
 */

window.addEventListener('DOMContentLoaded', () => {
    LazyDOMLoaded();
});

function lazy() {
    // get list of elements in viewport
    let el = document.getElementsByName("lazy");
    let e;

    for (let i = 0; i < el.length; i++) {
        e = el[i];

        if (isInViewport(e)) {
            // set pre-loaded image as placeholder
            e.src = document.images.namedItem("lazy-" + e.id).src

            // load image actual
            //setTimeout(function () { e.src = e.getAttribute("lazy-src") }, 2000)
            e.src = e.getAttribute("lazy-src");
        }
    }
}


function init() {
    // get list of elements in viewport
    let el = document.getElementsByClassName("lazy-placeholder");
    let e;

    for (let i = 0; i < el.length; i++) {
        e = el[i];

        e.src = e.getAttribute("lazy-src");
    }
}

window.addEventListener('scroll', function () {
    // lazy load content scrolled into view
    lazy();
}, false);

function LazyDOMLoaded() {
    // lazy load content placeholders for hi rez images
    init();
    // lazy load content initially in viewport
    lazy();
}


function isInViewport(element) {
    // get location of element
    let bounding = element.getBoundingClientRect();

    return (
        // determine if element is within viewable page boundaries
        bounding.top >= 0 &&
        bounding.left >= 0 &&

        // determine if element is inside viewport proper
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}