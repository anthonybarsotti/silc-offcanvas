const server = require('node-http-server');
const Browser = require('zombie');

describe('User visits offcanvas demo page', function () {

    const browser = new Browser();

    before(function () {

        server.deploy({
            port: 9001
        });

        return browser.visit('http://localhost:9001/index.html');
    });

    describe('offcanvas trigger open', function () {

        before(function() {
            return browser
                .fire('#silc-offcanvas-0-open', 'click');
        });

        it('should display offcanvas element when clicked', function () {
            browser.assert.elements('#silc-offcanvas-0.silc-offcanvas--visible', { exactly: 1 });
        });

    });

    describe('offcanvas trigger close', function () {

        before(function() {
            return browser
                .fire('#silc-offcanvas-0 .silc-offcanvas__trigger--close', 'click');
        });

        it('should hide offcanvas element when clicked', function () {
            browser.assert.elements('#silc-offcanvas-0.silc-offcanvas--visible', { exactly: 0 });
        });

    });

    describe('modal trigger open', function () {

        before(function() {
            return browser
                .fire('#silc-offcanvas-1-open', 'click');
        });

        it('should display modal element when clicked', function () {
            browser.assert.elements('#silc-offcanvas-1.silc-offcanvas--visible', { exactly: 1 });
        });

    });

    describe('modal trigger close', function () {

        before(function() {
            return browser
                .fire('#silc-offcanvas-1 .silc-offcanvas__trigger--modal', 'click');
        });

        it('should hide modal element when clicked', function () {
            browser.assert.elements('#silc-offcanvas-1.silc-offcanvas--visible', { exactly: 0 });
        });

    });

});
