# Silk Offcanvas
The offcanvas module is an ultra-lightweight web component for the [silk framework](https://github.com/nickrigby/silk). The offcanvas module allows you to place content outside of the viewport, with the ability to trigger its visibility.

## HTML
The offcanvas pattern consists of two main elements:

### Open Trigger
The open trigger must contain an anchor link that references an element on the page with a corresponding id.
```html
<a class="silk-offcanvas__trigger" href="#silk-offcanvas-1">Trigger Offcanvas</a>
```

### Content element
The content element should contain an anchor link that is self-referencing through an id for closing the offcanvas element.
```html
<div class="silk-offcanvas" id="silk-offcanvas-1">
    <a class="silk-offcanvas__trigger silk-offcanvas__trigger--close" href="#silk-offcanvas-1">Close</a>
    <p>This content is outside of the viewport.</p>
</div>
```
