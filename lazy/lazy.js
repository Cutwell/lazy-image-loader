/**
 * Lazy loading of images.
 * Designed for image heavy websites that must operate on low bandwidths.
 * Requests hi-rez images after DOM has loaded, and once element is within viewport.
 */

window.addEventListener('DOMContentLoaded', () => { lazy() });

async function lazy() {
    // get list of elements in viewport
    let el = document.getElementsByName("lazy");
    let e;

    for (let i = 0; i < el.length; i++) {
        e = el[i];

        if (isInViewport(e)) {
            // fetch hi-rez image
            let response = await fetch(e.getAttribute("lazy-src"))
            let blob = await response.blob()

            // create url blob object from img blob
            let url = URL.createObjectURL(blob);
            // set image source to hi-rez blob
            e.src = url;
        }
    }
}

window.addEventListener('scroll', function () {
    // lazy load content scrolled into view
    lazy();
}, false);


function isInViewport(element) {
    // get location of element
    let bounding = element.getBoundingClientRect();

    return (
        // determine if element is within viewable page boundaries
        bounding.top >= 0 ||
        bounding.left >= 0 ||

        // determine if element is inside viewport proper
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) ||
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}