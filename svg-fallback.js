/* svg-fallback.js | Copyright (C) 2012 Andrew Duthie | MIT license */
(function(window) {
    'use strict';

    var supportsSVG = !!document.createElementNS && ('createSVGRect' in document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
        docImgs;

    window.SVGFallback = {
        setImgSrc: function () {
            if (typeof docImgs === 'undefined') { return; }

            for (var i = 0, dl = docImgs.length; i < dl; i++) {
                var img = docImgs[i],
                    src = img.getAttribute('data-svg-src'),
                    fallbackSrc = img.getAttribute('data-nosvg-src');

                img.src = (supportsSVG && src) ? src : ((!supportsSVG && fallbackSrc) ? fallbackSrc : '');
            }
        }
    };

    function onload() {
        document.documentElement.className += ' ' + (supportsSVG ? 'svg' : 'no-svg');
        docImgs = document.getElementsByTagName('img');
        window.SVGFallback.setImgSrc();
    }

    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', onload, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', onload);
    } else {
        window.onload = onload;
    }
}(this));