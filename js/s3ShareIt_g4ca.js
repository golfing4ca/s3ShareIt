function getShareButtons() {

	var methods = {
		links: null,
		create: function(options) {
			this.generateLinks(options);
			if($('#s3ShareIt', $(options.el))) {
				var el = $('#s3ShareIt', $(options.el));
			} else {
				$(options.el).prepend('<ul id="s3ShareIt"></ul>');
				var el = $('#s3ShareIt', $(options.el));
			}
			var html = '';
			for(i in this.links) {
				if(options[i] == true) {
					html += this.links[i];
				}
			}
			var minus = parseInt(parseInt(options.thumbHeight) / 3);
			var plus = parseInt(parseInt(minus) + parseInt(options.thumbHeight));
			$(el).css({
				'position': 'relative',
				'top': -minus + 'px',
				'left': '231px',
				'height': '48px',
				'opacity': options.opacity
			}).hover(function() {
				$(this).stop().fadeTo('fast', 1);
			}, function() {
				$(this).stop().fadeTo('fast', options.opacity);
			}).append(html).find('li').hover(function() {
				$(this).stop().animate({'marginTop': '8px'}, 'fast');
			}, function() {
				$(this).stop().animate({'marginTop': -minus + 'px'}, 500);
			});
			var minTop = -minus + 'px';
			$(window).scroll(function(){
				var position = $(window).scrollTop();
				if(position < minTop) {
					el.stop().animate({'top': -minus + 'px'}, 500);
				} else {
					el.stop().animate({'top': -minus + parseInt(position)}, 500);
				}
			});
		},		
		generateLinks: function(options) {
			this.links = {
				'twitter': '<li><a target="_blank" title="Twitt it!" href="http://twitter.com/home?status='+ $('title').html() +'+-+'+ document.location +'"><img alt="twitter" src="' + options.iconsPath + '/twitter.png"></a></li>',
				'facebook': '<li><a target="_blank" title="Share on Facebook" href="http://www.facebook.com/sharer.php?u='+ document.location +'"><img alt="facebook" src="' + options.iconsPath + '/facebook.png"></a></li>',
				'digg': '<li><a target="_blank" title="Submit to Digg" href="http://digg.com/submit?phase=2&amp;url='+ document.location +'"><img alt="digg" src="' + options.iconsPath + '/digg.png"></a></li>',
				'delicius': '<li><a target="_blank" title="Submit to Delicius" href="http://del.icio.us/post?url='+ document.location +'"><img alt="delicious" src="' + options.iconsPath + '/delicious.png"></a></li>',
				'stumbleupon': '<li><a target="_blank" title="Submit to StumpleUpon" href="http://www.stumbleupon.com/submit?url='+ document.location +'"><img alt="stumbleupon" src="' + options.iconsPath + '/stumbleupon.png"></a></li>',
				'reddit': '<li><a target="_blank" title="Submit to Reddit" href="http://reddit.com/submit?url='+ document.location +'"><img alt="reddit" src="' + options.iconsPath + '/reddit.png"></a></li>',
				'technorati': '<li><a target="_blank" title="Share on Technorati" href="http://technorati.com/faves?add='+ document.location +'"><img alt="technorati" src="' + options.iconsPath + '/technorati.png"></a></li>',
				'linkedin': '<li><a target="_blank" title="Share on LinkedIn" href="http://www.linkedin.com/shareArticle?mini=true&url='+ document.location +'&title='+ $('title').html() +'"><img alt="linkedin" src="' + options.iconsPath + '/linkedin.png"></a></li>',
				'myspace': '<li><a target="_blank" title="Share on MySpace" href="http://www.myspace.com/index.cfm?fuseaction=postto&t=&c=&u='+ document.location +'&l="><img alt="facebook" src="' + options.iconsPath + '/myspace.png"></a></li>',
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
				'myspace': false,
				'opacity': 1,
				'el': this,
				'thumbHeight': 48,
				'iconsPath': 'https://cdn.rawgit.com/golfing4ca/s3ShareIt/master/img/s3ShareIt'
			}
			options = $.extend(true, defaults, options);
			methods.create(options);
			return this;
		});
	};

}
