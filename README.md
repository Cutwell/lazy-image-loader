# Lazy Load

### Requirements
• lazy images must all use a fixed height and width to ensure correct page layout is maintained.

### Usage
```html
<!-- low rez placeholder image loaded early -->
<img name="lazy-hamburger" class="lazy-placeholder" lazy-src="./lazy/lz_hamburger.png" src="" \>

<!-- hi rez image to lazy load -->
<img name="lazy" id="hamburger" lazy-src="./lazy/hi_hamburger.png" src="" \>
```