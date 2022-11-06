// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";

// Zoom on Project Card
$(function(){
    $(".title").mouseenter(function(){
        $(this).siblings('.img').addClass('--hover');
    }),

    $(".title").mouseleave(function(){
        $(this).siblings('.img').removeClass('--hover');
    })

    //Navbar button
    var btn = $('.btn');

    btn.on('click', function() {
    $(this).toggleClass('active not-active');
    });


    //Slide-in
    $.fn.visible = function(partial) {
    
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };

    $(window).scroll(function(event) {
  
        $(".detail-img").each(function(i, el) {
          var el = $(el);
          if (el.visible(true)) {
            el.addClass("come-in"); 
          } 
        });
    });
});
