(function($) {
	$.fn.notification = function(options) {

		// This is the easiest way to have default options.
    var opts = $.extend( {}, $.fn.notification.defaults, options );
    console.log(opts)

		this.css({
      'color': opts.color,
      'background': opts.background,
      'font-size' : opts.fontSize
    });

    this.on('click', testOurFunc);

    function testOurFunc () {
    	console.log('test our func');

    	opts.test('test');
    }

		return this;
	}

	$.fn.notification.defaults = {
    color: "red",
   	background: "yellow",
    fontSize:'39px',
    test : function(param) {
      console.log(param);
    }
	};
})(jQuery);

