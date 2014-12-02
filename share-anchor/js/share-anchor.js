/* 
 * Anchor CMS Plugin
 * Plugin: Share Anchor
 * Author: Jake Bown
 * Update: 2 Dec 2014
 */

	$(document).ready(function() {
		$(".footnote").append(shareAnchor());
	});

	function shareAnchor() {
		var fb = 'https://www.facebook.com/sharer/sharer.php?u=' + returnUrl(); //Facebook
		var tw = 'https://twitter.com/intent/tweet?url='+returnUrl()+'&text='+returnTitle(); //Twitter
		var gg = 'https://plus.google.com/share?url='+returnUrl(); //Google+
		var li = 'https://www.linkedin.com/shareArticle?mini=true&url='+returnUrl()+'&title='+returnTitle(); //LinkedIn
		var tu = 'http://www.tumblr.com/share/link?url='+returnUrl()+'&name='+returnTitle(); //Tumblr

		var html = '<span id="share-anchor"><a href="'+fb+'" target="_blank" class="share-anchor-button share-anchor-facebook default"><i class="fa fa-facebook"></i></a> <a href="'+tw+'" target="_blank" class="share-anchor-button share-anchor-twitter default"><i class="fa fa-twitter"></i></a> <a href="'+gg+'" target="_blank" class="share-anchor-button share-anchor-google default"><i class="fa fa-google-plus"></i></a> <a href="'+li+'" target="_blank" class="share-anchor-button share-anchor-linkedin default"><i class="fa fa-linkedin"></i></a> <a href="'+tu+'" target="_blank" class="share-anchor-button share-anchor-tumblr default"><i class="fa fa-tumblr"></i></a></span>';
		return html;


	}


	function returnTitle() {
		var t = $(document).attr('title');
		return encode(t);
	}

	function returnUrl(en) {
		var h = $(location).attr('href');
		return encode(h);
	}

	function encode(url) {
		return encodeURIComponent(url);
	}