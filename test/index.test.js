const assert = require('assert');
const scrollingUtilities = require('../src/scrollingUtilities');

describe('Scrolling Utilities', function() {
    describe('#isScrolledToBottom()', function() {
        it('should return true if scrolled to the bottom', function() {
            // Mocking scrollY and innerHeight for testing purposes
            global.window = { scrollY: 100, innerHeight: 200 };
            global.document = { body: { offsetHeight: 300 } };
            assert.strictEqual(scrollingUtilities.isScrolledToBottom(), true);
        });

        it('should return false if not scrolled to the bottom', function() {
            global.window = { scrollY: 100, innerHeight: 200 };
            global.document = { body: { offsetHeight: 400 } };
            assert.strictEqual(scrollingUtilities.isScrolledToBottom(), false);
        });
    });

    describe('#isScrolledToTop()', function() {
        it('should return true if scrolled to the top', function() {
            global.window = { scrollY: 0 };
            assert.strictEqual(scrollingUtilities.isScrolledToTop(), true);
        });

        it('should return false if not scrolled to the top', function() {
            global.window = { scrollY: 100 };
            assert.strictEqual(scrollingUtilities.isScrolledToTop(), false);
        });
    });
});
