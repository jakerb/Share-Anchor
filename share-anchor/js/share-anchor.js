/* 
 * Anchor CMS Plugin
 * Plugin: Share Anchor
 * Author: Jake Bown
 * Update: 04 Sept 15
 */
 	var footer = $('.footnote');
 	var shareAnchor = {
 		
 		init:function() {
 			var that = this;
	 		var fb = 'https://www.facebook.com/sharer/sharer.php?u=' + that.returnUrl(); //Facebook
			var tw = 'https://twitter.com/intent/tweet?url='+ that.returnUrl() + '&text=' + that.returnTitle(); //Twitter
			var gg = 'https://plus.google.com/share?url='+ that.returnUrl(); //Google+
			var li = 'https://www.linkedin.com/shareArticle?mini=true&url='+ that.returnUrl()+'&title='+ that.returnTitle(); //LinkedIn
			var tu = 'http://www.tumblr.com/share/link?url='+ that.returnUrl()+'&name='+ that.returnTitle(); //Tumblr
 			
 			var html = '<span id="share-anchor"><a href="'+fb+'" target="_blank" class="share-anchor-button share-anchor-facebook default"><i class="fa fa-facebook"></i></a> <a href="'+tw+'" target="_blank" class="share-anchor-button share-anchor-twitter default"><i class="fa fa-twitter"></i></a> <a href="'+gg+'" target="_blank" class="share-anchor-button share-anchor-google default"><i class="fa fa-google-plus"></i></a> <a href="'+li+'" target="_blank" class="share-anchor-button share-anchor-linkedin default"><i class="fa fa-linkedin"></i></a> <a href="'+tu+'" target="_blank" class="share-anchor-button share-anchor-tumblr default"><i class="fa fa-tumblr"></i></a></span>';
			that.setup(html);
 		},
 		
 		returnTitle:function() {
			var t = $(document).attr('title');
			return encode(t);
		}
	
		returnUrl:function(en) {
			var h = $(location).attr('href');
			return encode(h);
		}
	
		encode:function(url) {
			return encodeURIComponent(url);
		}
 		
 		setup:function(html) {
 			footer.append(html);	
 		}
 	};

	$(document).ready(function() {
		shareAnchor.init();
	});


