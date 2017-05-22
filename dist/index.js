"use strict";
exports.__esModule = true;
var SilcOffcanvas = (function () {
    function SilcOffcanvas(element) {
        var _this = this;
        // Save shortcut to element
        this.element = element;
        this.element.addEventListener('click', function (event) {
            _this.toggle(event);
        });
    }
    SilcOffcanvas.prototype.toggle = function (event) {
        event.preventDefault();
        var target = event.target.getAttribute('href');
        var targetEl = document.querySelector(target);
        targetEl.classList.toggle('silc-offcanvas--visible');
    };
    return SilcOffcanvas;
}());
exports.SilcOffcanvas = SilcOffcanvas;
