var Justlazy = (function() {
    'use strict';

    var module = {};

    /**
     * Creates an img html node and sets the src and alt
     * attributes.
     *
     * @param src mandatory image source attribute.
     * @param alt optional alt text attribute.
     * @param title optional title attribute.
     *
     * @returns {HTMLElement} img html node.
     */
    var createImg = function (src, alt, title) {
        var img = document.createElement("img");

        img.src = src;
        if (alt) {
            img.alt = alt;
        }
        if (title) {
            img.title = title;
        }

        return img;
    };

    /**
     * Replaces the img placeholder (html node of any type) with the img.
     *
     * @param imgPlaceholder img placeholder html node.
     * @param img img node itself.
     */
    var replacePlacholderWithImg = function (imgPlaceholder, img) {
        var parentNode = imgPlaceholder.parentNode;
        if (parentNode) {
            parentNode.insertBefore(img, imgPlaceholder);
            parentNode.removeChild(imgPlaceholder);
        }
    };

    /**
     * Lazy load images with img tag.
     *
     * @param imgPlaceholder the placeholder is a html node of any type (e.g. a span element).
     *                       The node has to provide the data element data-src. The data-alt
     *                       and data-title attributes are optional.
     */
    module.lazyLoadImg = function(imgPlaceholder) {
        var src = imgPlaceholder.getAttribute("data-src");
        var alt = imgPlaceholder.getAttribute("data-alt");
        var title = imgPlaceholder.getAttribute("data-title");

        if (src) {
            var img = createImg(src, alt, title);
            replacePlacholderWithImg(imgPlaceholder, img);
        }
    };

    return module;

})();
