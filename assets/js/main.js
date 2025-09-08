/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(min-width: 961px) and (max-width: 1880px)',
		normal: '(min-width: 961px) and (max-width: 1620px)',
		narrow: '(min-width: 961px) and (max-width: 1320px)',
		narrower: '(max-width: 960px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a.scrolly');

			// Scrolly-fy links.
				if($nav_a.scrolly()){
					$nav_a
						.scrolly()
						.on('click', function(e) {

							var t = $(this),
								href = t.attr('href');

							if (href[0] != '#')
								return;

							e.preventDefault();

							// Clear active and lock scrollzer until scrolling has stopped
								$nav_a
									.removeClass('active')
									.addClass('scrollzer-locked');

							// Set this link to active
								t.addClass('active');

						});
				}

			// Initialize scrollzer.
				var ids = [];

				$nav_a.each(function() {

					var href = $(this).attr('href');

					if (href[0] != '#')
						return;

					ids.push(href.substring(1));

				});

				$.scrollzer(ids, { pad: 200, lastHack: true });

		// Header (narrower + mobile).

			// Toggle.
				$(
					'<div id="headerToggle">' +
						'<a href="#header" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#headerToggle, #header, #main')
						.css('transition', 'none');

	});

})(jQuery);


$(document).ready(function() {
	  // Add anchors for headings
	  $('.page__content').find('h1, h2, h3, h4, h5, h6').each(function() {
		var id = $(this).attr('id');
		if (id) {
		  var anchor = document.createElement("a");
		  anchor.className = 'header-link';
		  anchor.href = '#' + id;
		  anchor.innerHTML = '<span class=\"sr-only\">Permalink</span><i class=\"fas fa-link\"></i>';
		  anchor.title = "Permalink";
		  $(this).append(anchor);
		}
	  });

	  // Syntax highlighting for code blocks inside details elements
	  function highlightPythonCode(codeBlock) {
		var html = codeBlock.innerHTML;
		
		// Keywords
		var keywords = ['from', 'import', 'True', 'False', 'None', 'def', 'class', 'if', 'else', 'elif', 'for', 'while', 'return', 'print', 'and', 'or', 'not', 'in', 'is', 'with', 'as', 'try', 'except', 'finally', 'raise', 'pass', 'break', 'continue', 'lambda', 'yield'];
		
		keywords.forEach(function(keyword) {
			var regex = new RegExp('\\b' + keyword + '\\b', 'g');
			html = html.replace(regex, '<span class="syntax-keyword">' + keyword + '</span>');
		});
		
		// Strings (single and double quotes)
		html = html.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="syntax-string">$1$2$1</span>');
		
		// Comments
		html = html.replace(/(#.*$)/gm, '<span class="syntax-comment">$1</span>');
		
		// Numbers
		html = html.replace(/\b(\d+\.?\d*)\b/g, '<span class="syntax-number">$1</span>');
		
		// Function calls (word followed by opening parenthesis)
		html = html.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, '<span class="syntax-function">$1</span>');
		
		// Operators
		var operators = ['=', '==', '!=', '<', '>', '<=', '>=', '+', '-', '*', '/', '//', '%', '**', '+=', '-=', '*=', '/=', '%=', '**=', '&', '|', '^', '~', '<<', '>>', 'and', 'or', 'not', 'in', 'is'];
		operators.forEach(function(op) {
			var regex = new RegExp('\\' + op.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
			html = html.replace(regex, '<span class="syntax-operator">' + op + '</span>');
		});
		
		codeBlock.innerHTML = html;
	  }

	  // Apply syntax highlighting to details code blocks
	  function applySyntaxHighlighting() {
		console.log('Looking for details code blocks...');
		$('details pre code').each(function() {
		  var $this = $(this);
		  if (!$this.hasClass('syntax-highlighted')) {
			console.log('Found details code block:', $this.text().substring(0, 50));
			if ($this.hasClass('python') || $this.text().includes('from ') || $this.text().includes('import ')) {
			  console.log('Applying syntax highlighting...');
			  highlightPythonCode(this);
			  $this.addClass('syntax-highlighted');
			}
		  }
		});
	  }

	  // Apply immediately
	  applySyntaxHighlighting();

	  // Also apply when details are opened
	  $('details').on('toggle', function() {
		setTimeout(applySyntaxHighlighting, 100);
	  });

	  // Apply after a short delay to ensure everything is loaded
	  setTimeout(applySyntaxHighlighting, 500);
	});