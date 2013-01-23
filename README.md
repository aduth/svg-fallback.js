# svg-fallback.js

__svg-fallback.js__ provides an unobtrusive fallback for browsers which lack support for SVG images. It supports images rendered either through &lt;img&gt; tags or through CSS background-image. Even better, it can do so without making multiple HTTP requests.

No additional scripts are required. Simply include _svg-fallback.js_, and use either the CSS class or the &lt;img&gt; data-* attributes as outlined below.

_svg-fallback.js_ is only __427 bytes__ when minified and gzipped.

[Demonstration](http://aduth.github.com/svg-fallback.js/)

## Usage

### CSS

_svg-fallback.js_ adds a CSS class to the root &lt;html&gt; tag to indicate support for SVG ("svg" if supported, or "no-svg" if not)*. Therefore, set your _background-image_ in a subclass of the corresponding context.

	<style type="text/css">
		.circle {
			width: 100px;
			height: 100px;
			background-repeat: no-repeat;
			background-position: center center;
		}

		.svg .circle {
			background-image: url('img/circle.svg');
		}

		.no-svg .circle {
			background-image: url('img/circle.png');
		}
	</style>

\*  This is identical to how Modernizr shows support for modern web features. In fact, if at any point you decide to use Modernizr instead, this technique will continue to work without needing any changes.

### &lt;IMG&gt;

_svg-fallback.js_ uses data attributes to appropriately assign an image's source. This is to prevent multiple HTTP requests being made to your server (one which would load the original source, then another if a fallback is needed). In order to support browsers where javascript is disabled, you will want to include an additional &lt;img&gt; inside a &lt;noscript&gt; tag.

	<img data-svg-src="img/circle.svg" data-nosvg-src="img/circle.png" alt="Circle" />
	<noscript>
		<img src="img/circle.png" alt="Circle" />
	</noscript>

Make sure you do not set the standard _src_ attribute to empty, i.e. ```<img src="">``` ([see here](http://www.nczonline.net/blog/2009/11/30/empty-image-src-can-destroy-your-site/) for why).

## FAQ

__I use AJAX to load pages dynamically. How do I provide fallback support for image elements within this content?__

A method has been made available which gives you the option to manually invoke the fallback logic. After your content has been loaded, call the ```SVGFallback.setImgSrc()``` method. The following is a basic example using jQuery:

```
$('#myDiv').load('/myContent.html', SVGFallback.setImgSrc);
```

If you use the CSS option, your subclasses should work automatically for AJAX-loaded content.

## Credits

[Modernizr](http://modernizr.com/) for SVG test

## License

Licensed under the MIT License (see LICENSE.txt)

Copyright (C) 2012 Andrew Duthie
