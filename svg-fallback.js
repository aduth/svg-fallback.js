/*! svg-fallback.js 1.0.1 | (c) 2013 Andrew Duthie | MIT License */
(function(window, document) {
    'use strict';

    var supportsSVG = !!document.createElementNS && ('createSVGRect' in document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
        docImgs;

    window.SVGFallback = {
        setSupport: function() {
            document.documentElement.className += ' ' + (supportsSVG ? 'svg' : 'no-svg');
        },

        setImgSrc: function () {
            docImgs = docImgs || document.getElementsByTagName('img');

            for (var i = 0, dl = docImgs.length; i < dl; i++) {
                var img = docImgs[i],
                    src = img.getAttribute('data-svg-src'),
                    fallbackSrc = img.getAttribute('data-nosvg-src');

                img.src = (supportsSVG && src) ? src : ((!supportsSVG && fallbackSrc) ? fallbackSrc : img.src);
            }
        }
    };

    function onload() {
        window.SVGFallback.setSupport();
        window.SVGFallback.setImgSrc();
    }

    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', onload, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', onload);
    } else {
        window.onload = onload;
    }
}(this, this.document));
