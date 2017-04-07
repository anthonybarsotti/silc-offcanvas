"use strict";
exports.__esModule = true;
var SilkOffcanvas = (function () {
    function SilkOffcanvas(element) {
        var _this = this;
        // Save shortcut to element
        this.element = element;
        this.element.addEventListener('click', function (event) {
            _this.toggle(event);
        });
    }
    SilkOffcanvas.prototype.toggle = function (event) {
        event.preventDefault();
        var target = event.target.getAttribute('href');
        var targetEl = document.querySelector(target);
        targetEl.classList.toggle('silk-offcanvas--visible');
    };
    return SilkOffcanvas;
}());
exports.SilkOffcanvas = SilkOffcanvas;
