# Lazy Image Loader
![image comparison](assets/banner.png)

### Requirements
• lazy images must all use a consistent height and width as their original image to ensure correct page layout is maintained (this can be achieved with smaller images enlarged via css).

### Usage
> View an example page at [```example.html```](https://cutwell.github.io/lazy-image-loader/example)

Construct your HTML page as below. Once imported, the JS script runs automatically and will lazy load images once any part of the image enters the viewport.

```html
<!-- low rez placeholder image loaded early, hi-rez image loaded late once in viewport -->
<img name="lazy" lazy-src="assets/hi_forest.png" src="assets/lz_forest.png" \>

<!-- load lazy load script at end of file -->
<script src="lazy/lazy.min.js"></script>
```

### Testing
View how the page performs using your browers Developer Tools, try throttling your page load if your internet is too fast.

### Attribution
* Example lazy load image: Photo by Luis del Río from Pexels
