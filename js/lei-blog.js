/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

 /*!
 * Lei Blog theme scripts
 * Customized for Lei's Blog
 * Licensed under Apache 2.0 
 */

// Tooltip Init
// Tooltip disabled by default
// $(function() {
//     $("[data-toggle='tooltip']").tooltip();
// });


// make all images responsive
/* 
 * Disabled in this theme
 * actually only Portfolio-Pages can't use it and only post-img need it.
 * so I modify the _layout/post and CSS to make post-img responsive!
 */
// $(function() {
//  $("img").addClass("img-responsive");
// });

// responsive tables
$(document).ready(function() {
    $("table").wrap("<div class='table-responsive'></div>");
    $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function() {
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation script: keep navbar pinned on top and only handle side catalog position
jQuery(document).ready(function($) {
    var MQL = 1170;
    var $navbar = $('.header-minimal .navbar-custom');
    $navbar.addClass('is-fixed');

    // Scroll behavior for both desktop and mobile:
    // scroll down -> hide navbar, scroll up -> show navbar.
    if ($navbar.length) {
        var lastTop = $(window).scrollTop();

        $(window).on('scroll', function() {
            var currentTop = $(window).scrollTop();
            var navOpen = $('#huxblog_navbar').hasClass('in');

            if (Math.abs(currentTop - lastTop) < 2) return;

            // Keep navbar visible while mobile menu is expanded.
            if (navOpen) {
                $navbar.removeClass('nav-slide-hidden');
                lastTop = currentTop;
                return;
            }

            if (currentTop <= 0 || currentTop < lastTop) {
                $navbar.removeClass('nav-slide-hidden');
            } else {
                $navbar.addClass('nav-slide-hidden');
            }

            lastTop = currentTop;
        });
    }

    // keep side catalog behavior on large screens
    if ($(window).width() > MQL) {
        var bannerHeight  = $('.intro-header .container').height();     
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop(),
                    $catalog = $('.side-catalog');


                //adjust the appearance of side-catalog
                $catalog.show()
                if (currentTop > (bannerHeight + 41)) {
                    $catalog.addClass('fixed')
                } else {
                    $catalog.removeClass('fixed')
                }
            });
    }
});
