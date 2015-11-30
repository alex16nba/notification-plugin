( function() {
	this.Notification = function(opt) {
		this.defaults = {
			number:1,
			template: '<div id="not"><h1>Helloo</h1></div>' 
		}
		//extend default if user want sow

		var defaults = $.extend({}, this.defaults, opt); 
		console.log('defaults', defaults);


		this.succesNoty = function() {
			var element = $(defaults.template);
			$('body').append(element);
			$('#not').addClass('success-not')
		}

		this.errorNoty = function() {
			var element = $(defaults.template);
			$('body').append(element);
			$('#not').addClass('error-not')
		}
		
		this.test = defaults.number;

		return this;
	}

	var defaults = {

	};

})();