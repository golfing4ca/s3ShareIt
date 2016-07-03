(function($) {

	var methods = {
		links: null,
		create: function(options) {
			this.generateLinks(options);
			if($('#s3ShareIt', $(options.el))) {
				var el = $('#s3ShareIt', $(options.el));
			} else {
				$(options.el).prepend('<div id="s3ShareIt"></div>');
				var el = $('#s3ShareIt', $(options.el));
			}
			var html = '';
			for(i in this.links) {
				if(options[i] == true) {
					html += this.links[i];
				}
			}
			var minus = parseInt(parseInt(options.thumbWidth) / 3);
			$(el).css({
				'position': 'absolute',
				'top': '230px',
				'left': -minus + 'px',
				'width': options.thumbWidth + 'px',
				'opacity': options.opacity
			}).hover(function() {
				$(this).stop().fadeTo('fast', 1);
			}, function() {
				$(this).stop().fadeTo('fast', options.opacity);
			}).append(html).find('a').hover(function() {
				$(this).stop().animate({'marginLeft': '18px'}, 'fast');
			}, function() {
				$(this).stop().animate({'marginLeft': '0px'}, 500);
			});
			var minTop = 230;
			$(window).scroll(function(){
				var position = $(window).scrollTop();
				if(position < minTop) {
					el.stop().animate({'top': 230}, 500);
				} else {
					el.stop().animate({'top': parseInt(position)+10}, 500);
				}
			});
		},		
		generateLinks: function(options) {
			this.links = {
				'twitter': '<a target="_blank" title="Twitt it!" href="http://twitter.com/home?status='+ $('title').html() +'+-+'+ document.location +'"><img alt="twitter" src="' + options.iconsPath + '/twitter.png"></a>',
				'facebook': '<a target="_blank" title="Share on Facebook" href="http://www.facebook.com/sharer.php?u='+ document.location +'"><img alt="facebook" src="' + options.iconsPath + '/facebook.png"></a>',
				'digg': '<a target="_blank" title="Submit to Digg" href="http://digg.com/submit?phase=2&amp;url='+ document.location +'"><img alt="digg" src="' + options.iconsPath + '/digg.png"></a>',
				'delicius': '<a target="_blank" title="Submit to Delicius" href="http://del.icio.us/post?url='+ document.location +'"><img alt="delicious" src="' + options.iconsPath + '/delicious.png"></a>',
				'stumbleupon': '<a target="_blank" title="Submit to StumpleUpon" href="http://www.stumbleupon.com/submit?url='+ document.location +'"><img alt="stumbleupon" src="' + options.iconsPath + '/stumbleupon.png"></a>',
				'reddit': '<a target="_blank" title="Submit to Reddit" href="http://reddit.com/submit?url='+ document.location +'"><img alt="reddit" src="' + options.iconsPath + '/reddit.png"></a>',
				'technorati': '<a target="_blank" title="Share on Technorati" href="http://technorati.com/faves?add='+ document.location +'"><img alt="technorati" src="' + options.iconsPath + '/technorati.png"></a>',
				'linkedin': '<a target="_blank" title="Share on LinkedIn" href="http://www.linkedin.com/shareArticle?mini=true&url='+ document.location +'&title='+ $('title').html() +'"><img alt="linkedin" src="' + options.iconsPath + '/linkedin.png"></a>',
				'myspace': '<a target="_blank" title="Share on MySpace" href="http://www.myspace.com/index.cfm?fuseaction=postto&t=&c=&u='+ document.location +'&l="><img alt="facebook" src="' + options.iconsPath + '/myspace.png"></a>',
		}
		}
	};

	$.fn.s3ShareIt = function(options) {
		var options = options;
		this.each(function() {
			var defaults = {
				'twitter': true,
				'facebook': true,
				'digg': true,
				'delicius': true,
				'stumbleupon': true,
				'reddit': true,
				'technorati': true,
				'linkedin': true,
				'myspace': true,
				'opacity': 1,
				'el': this,
				'thumbWidth': 48,
				'iconsPath': '/img/s3ShareIt'
			}
			options = $.extend(true, defaults, options);
			methods.create(options);
			return this;
		});
	};

})(jQuery);
